/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { PromiseOrValue } from "../../common";
import type { MockNFT, MockNFTInterface } from "../../contracts/MockNFT";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "player",
        type: "address",
      },
      {
        internalType: "string",
        name: "tokenURI",
        type: "string",
      },
    ],
    name: "mintNFT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040805180820182526007815266135bd8dad3919560ca1b6020808301918252835180850190945260038452621313d360ea1b9084015281519192916200005c916000916200007b565b508051620000729060019060208401906200007b565b5050506200015d565b828054620000899062000121565b90600052602060002090601f016020900481019282620000ad5760008555620000f8565b82601f10620000c857805160ff1916838001178555620000f8565b82800160010185558215620000f8579182015b82811115620000f8578251825591602001919060010190620000db565b50620001069291506200010a565b5090565b5b808211156200010657600081556001016200010b565b600181811c908216806200013657607f821691505b6020821081036200015757634e487b7160e01b600052602260045260246000fd5b50919050565b611855806200016d6000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806370a082311161008c578063b88d4fde11610066578063b88d4fde146101e1578063c87b56dd146101f4578063e985e9c514610207578063eacabe141461024357600080fd5b806370a08231146101a557806395d89b41146101c6578063a22cb465146101ce57600080fd5b8063095ea7b3116100c8578063095ea7b31461015757806323b872dd1461016c57806342842e0e1461017f5780636352211e1461019257600080fd5b806301ffc9a7146100ef57806306fdde0314610117578063081812fc1461012c575b600080fd5b6101026100fd3660046113bd565b610256565b60405190151581526020015b60405180910390f35b61011f6102a8565b60405161010e9190611432565b61013f61013a366004611445565b61033a565b6040516001600160a01b03909116815260200161010e565b61016a61016536600461147a565b6103d4565b005b61016a61017a3660046114a4565b6104e9565b61016a61018d3660046114a4565b610570565b61013f6101a0366004611445565b61058b565b6101b86101b33660046114e0565b610616565b60405190815260200161010e565b61011f6106b0565b61016a6101dc3660046114fb565b6106bf565b61016a6101ef3660046115c3565b6106ce565b61011f610202366004611445565b61075c565b61010261021536600461163f565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b6101b8610251366004611672565b6108ee565b60006001600160e01b031982166380ac58cd60e01b148061028757506001600160e01b03198216635b5e139f60e01b145b806102a257506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060600080546102b7906116d4565b80601f01602080910402602001604051908101604052809291908181526020018280546102e3906116d4565b80156103305780601f1061030557610100808354040283529160200191610330565b820191906000526020600020905b81548152906001019060200180831161031357829003601f168201915b5050505050905090565b6000818152600260205260408120546001600160a01b03166103b85760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b60006103df8261058b565b9050806001600160a01b0316836001600160a01b03160361044c5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084016103af565b336001600160a01b038216148061046857506104688133610215565b6104da5760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c000000000000000060648201526084016103af565b6104e48383610925565b505050565b6104f333826109a0565b6105655760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f76656400000000000000000000000000000060648201526084016103af565b6104e4838383610a96565b6104e4838383604051806020016040528060008152506106ce565b6000818152600260205260408120546001600160a01b0316806102a25760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201527f656e7420746f6b656e000000000000000000000000000000000000000000000060648201526084016103af565b60006001600160a01b0382166106945760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a6560448201527f726f20616464726573730000000000000000000000000000000000000000000060648201526084016103af565b506001600160a01b031660009081526003602052604090205490565b6060600180546102b7906116d4565b6106ca338383610c57565b5050565b6106d833836109a0565b61074a5760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f76656400000000000000000000000000000060648201526084016103af565b61075684848484610d25565b50505050565b6000818152600260205260409020546060906001600160a01b03166107e95760405162461bcd60e51b815260206004820152603160248201527f45524337323155524953746f726167653a2055524920717565727920666f722060448201527f6e6f6e6578697374656e7420746f6b656e00000000000000000000000000000060648201526084016103af565b60008281526006602052604081208054610802906116d4565b80601f016020809104026020016040519081016040528092919081815260200182805461082e906116d4565b801561087b5780601f106108505761010080835404028352916020019161087b565b820191906000526020600020905b81548152906001019060200180831161085e57829003601f168201915b50505050509050600061089960408051602081019091526000815290565b905080516000036108ab575092915050565b8151156108dd5780826040516020016108c592919061170e565b60405160208183030381529060405292505050919050565b6108e684610dae565b949350505050565b6000806108fa60075490565b90506109068482610ea3565b6109108184610ff2565b61091e600780546001019055565b9392505050565b6000818152600460205260409020805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03841690811790915581906109678261058b565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000818152600260205260408120546001600160a01b0316610a195760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084016103af565b6000610a248361058b565b9050806001600160a01b0316846001600160a01b03161480610a6b57506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b806108e65750836001600160a01b0316610a848461033a565b6001600160a01b031614949350505050565b826001600160a01b0316610aa98261058b565b6001600160a01b031614610b255760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201527f6f776e657200000000000000000000000000000000000000000000000000000060648201526084016103af565b6001600160a01b038216610b875760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b60648201526084016103af565b610b92600082610925565b6001600160a01b0383166000908152600360205260408120805460019290610bbb908490611753565b90915550506001600160a01b0382166000908152600360205260408120805460019290610be990849061176a565b9091555050600081815260026020526040808220805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b816001600160a01b0316836001600160a01b031603610cb85760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016103af565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610d30848484610a96565b610d3c8484848461109b565b6107565760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e746572000000000000000000000000000060648201526084016103af565b6000818152600260205260409020546060906001600160a01b0316610e3b5760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201527f6e6578697374656e7420746f6b656e000000000000000000000000000000000060648201526084016103af565b6000610e5260408051602081019091526000815290565b90506000815111610e72576040518060200160405280600081525061091e565b80610e7c846111f2565b604051602001610e8d92919061170e565b6040516020818303038152906040529392505050565b6001600160a01b038216610ef95760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016103af565b6000818152600260205260409020546001600160a01b031615610f5e5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016103af565b6001600160a01b0382166000908152600360205260408120805460019290610f8790849061176a565b9091555050600081815260026020526040808220805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6000828152600260205260409020546001600160a01b031661107c5760405162461bcd60e51b815260206004820152602e60248201527f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60448201527f6578697374656e7420746f6b656e00000000000000000000000000000000000060648201526084016103af565b600082815260066020908152604090912082516104e49284019061130b565b60006001600160a01b0384163b156111e757604051630a85bd0160e11b81526001600160a01b0385169063150b7a02906110df903390899088908890600401611782565b6020604051808303816000875af192505050801561111a575060408051601f3d908101601f19168201909252611117918101906117be565b60015b6111cd573d808015611148576040519150601f19603f3d011682016040523d82523d6000602084013e61114d565b606091505b5080516000036111c55760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e746572000000000000000000000000000060648201526084016103af565b805181602001fd5b6001600160e01b031916630a85bd0160e11b1490506108e6565b506001949350505050565b6060816000036112195750506040805180820190915260018152600360fc1b602082015290565b8160005b8115611243578061122d816117db565b915061123c9050600a8361180a565b915061121d565b60008167ffffffffffffffff81111561125e5761125e611537565b6040519080825280601f01601f191660200182016040528015611288576020820181803683370190505b5090505b84156108e65761129d600183611753565b91506112aa600a8661181e565b6112b590603061176a565b60f81b8183815181106112ca576112ca611832565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350611304600a8661180a565b945061128c565b828054611317906116d4565b90600052602060002090601f016020900481019282611339576000855561137f565b82601f1061135257805160ff191683800117855561137f565b8280016001018555821561137f579182015b8281111561137f578251825591602001919060010190611364565b5061138b92915061138f565b5090565b5b8082111561138b5760008155600101611390565b6001600160e01b0319811681146113ba57600080fd5b50565b6000602082840312156113cf57600080fd5b813561091e816113a4565b60005b838110156113f55781810151838201526020016113dd565b838111156107565750506000910152565b6000815180845261141e8160208601602086016113da565b601f01601f19169290920160200192915050565b60208152600061091e6020830184611406565b60006020828403121561145757600080fd5b5035919050565b80356001600160a01b038116811461147557600080fd5b919050565b6000806040838503121561148d57600080fd5b6114968361145e565b946020939093013593505050565b6000806000606084860312156114b957600080fd5b6114c28461145e565b92506114d06020850161145e565b9150604084013590509250925092565b6000602082840312156114f257600080fd5b61091e8261145e565b6000806040838503121561150e57600080fd5b6115178361145e565b91506020830135801515811461152c57600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff8084111561156857611568611537565b604051601f8501601f19908116603f0116810190828211818310171561159057611590611537565b816040528093508581528686860111156115a957600080fd5b858560208301376000602087830101525050509392505050565b600080600080608085870312156115d957600080fd5b6115e28561145e565b93506115f06020860161145e565b925060408501359150606085013567ffffffffffffffff81111561161357600080fd5b8501601f8101871361162457600080fd5b6116338782356020840161154d565b91505092959194509250565b6000806040838503121561165257600080fd5b61165b8361145e565b91506116696020840161145e565b90509250929050565b6000806040838503121561168557600080fd5b61168e8361145e565b9150602083013567ffffffffffffffff8111156116aa57600080fd5b8301601f810185136116bb57600080fd5b6116ca8582356020840161154d565b9150509250929050565b600181811c908216806116e857607f821691505b60208210810361170857634e487b7160e01b600052602260045260246000fd5b50919050565b600083516117208184602088016113da565b8351908301906117348183602088016113da565b01949350505050565b634e487b7160e01b600052601160045260246000fd5b6000828210156117655761176561173d565b500390565b6000821982111561177d5761177d61173d565b500190565b60006001600160a01b038087168352808616602084015250836040830152608060608301526117b46080830184611406565b9695505050505050565b6000602082840312156117d057600080fd5b815161091e816113a4565b6000600182016117ed576117ed61173d565b5060010190565b634e487b7160e01b600052601260045260246000fd5b600082611819576118196117f4565b500490565b60008261182d5761182d6117f4565b500690565b634e487b7160e01b600052603260045260246000fdfea164736f6c634300080d000a";

type MockNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockNFT__factory extends ContractFactory {
  constructor(...args: MockNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MockNFT> {
    return super.deploy(overrides || {}) as Promise<MockNFT>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MockNFT {
    return super.attach(address) as MockNFT;
  }
  override connect(signer: Signer): MockNFT__factory {
    return super.connect(signer) as MockNFT__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockNFTInterface {
    return new utils.Interface(_abi) as MockNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockNFT {
    return new Contract(address, _abi, signerOrProvider) as MockNFT;
  }
}