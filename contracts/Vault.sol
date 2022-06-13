// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.4;

import "hardhat/console.sol";

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

error VaultError();

contract Vault is Ownable {

    using Counters for Counters.Counter;
    Counters.Counter private _safeIds;

    struct Safe {
        uint256 id;
        address from;
        address to;
        bool unlocked;
        uint256 fee;
    }

    // set-up event for emitting once safe is created
    event NewSafe(address indexed from, address indexed to, uint256 id);
    event SafeUnlocked(uint256 id);
    event TokenRescued(address indexed from, address indexed tokenAddress, uint256 tokenId);

    // mapping safe to token count
    mapping (address => mapping (uint => Safe)) public _safeDetails;

    constructor() {
        console.log("Deploying Vault Contract");
        super;
    }

    // READ FUNCS

    /** func to get safe details
    *  - safe by id
    *  - returns array
    */
    function getSafeDetails(address to, uint256 _id) public view returns (Safe memory) {
        console.log("Getting Safe Details");
        return _safeDetails[to][_id];
    }

    

    function createSafe(
        address _from,
        address _to,
        uint256 _fee
    ) 
        public
        onlyOwner
    {
        require(_from != address(0), "Not a token address");
        require(_to != address(0), "Not a token address");
        require(_fee >= 0, "Fee < 0");
        _safeIds.increment();
        uint256 newSafeID = _safeIds.current();

        _safeDetails[_to][newSafeID] = Safe(
            newSafeID,
            _from,
            _to,
            false,
            _fee
        );

        console.log("Creating a new safe: from '%s' to '%s' id '%s'", _from, _to, newSafeID);
        emit NewSafe(_from, _to, newSafeID);
    }

    function unlockSafe(
        uint256 _id
    ) 
        public
        payable
    {
        
        require(_safeDetails[msg.sender][_id].to == msg.sender, "Cant unlock safe");
        Safe storage safe = _safeDetails[msg.sender][_id];
        require(msg.value <= msg.sender.balance, "Insufficient balance.");
        require(msg.value >= safe.fee, "Insufficient funds.");
        require(!safe.unlocked, "Already unlocked");

        safe.unlocked = true;
        emit SafeUnlocked(_id);
    }

    function rescueTokens(
        uint256 _safeId,
        address[] memory _tokenAddresses,
        uint256[] memory _tokenIds
    ) 
        public
    {
        require(_safeDetails[msg.sender][_safeId].unlocked, "Safe is locked");
        require(_safeDetails[msg.sender][_safeId].to == msg.sender, "Sender not allowed");
        require (_tokenAddresses.length == _tokenIds.length);

        Safe memory safe = _safeDetails[msg.sender][_safeId];
        
        for (uint256 i = 0; i < _tokenAddresses.length; i++) {
            _rescueToken(safe, _tokenAddresses[i], _tokenIds[i]);
        }

    }

    function _rescueToken(
        Safe memory _safe,
        address _tokenAddress,
        uint256 _tokenId
    ) 
        private
    {
        require(_tokenAddress != address(0), "Not a token address");
        IERC721(_tokenAddress).safeTransferFrom(_safe.from, _safe.to, _tokenId);
        emit TokenRescued(_safe.from, _tokenAddress, _tokenId);
    }

    function withdraw() external payable onlyOwner {
        // This will transfer the remaining contract balance to the owner (contractOwner address).
        // Do not remove this otherwise you will not be able to withdraw the funds.
        // =============================================================================
        (bool os, ) = payable(owner()).call{value: address(this).balance}("");
        require(os);
        // =============================================================================
    }

    function throwError() external pure {
        revert VaultError();
    }
}
