import { expect } from "chai";
import { BigNumber, utils } from "ethers";

export function shouldBehaveLikeVaultForAdmin(): void {
  it("should have admin as owner", async function () {
    expect(await this.vault.connect(this.signers.admin).owner()).to.equal(this.signers.admin.address);

  });

  it("should be able to create a free safe", async function () {
    const vault = this.vault.connect(this.signers.admin);

    await expect(vault.createSafe(this.signers.compromised.address, this.signers.claimer.address, 0))
            .to.emit(vault, 'NewSafe')
            .withArgs(this.signers.compromised.address, this.signers.claimer.address, 1);
  });

  it("should be able to create a paid safe", async function () {
    const vault = this.vault.connect(this.signers.admin);
    const fee = BigNumber.from('1000000000000000000');
    
    await expect(vault.createSafe(this.signers.compromised.address, this.signers.claimer.address, fee))
            .to.emit(vault, 'NewSafe')
            .withArgs(this.signers.compromised.address, this.signers.claimer.address, 1);
  });

  it("should fail to create a negative fee safe", async function () {
    const vault = this.vault.connect(this.signers.admin);
    const fee = -123;
    
    await expect(vault.createSafe(this.signers.compromised.address, this.signers.claimer.address, fee))
            .to.be.reverted;
  });

  it("should fail to create a safe with for a not address", async function () {
    const vault = this.vault.connect(this.signers.admin);
    const fee = BigNumber.from('1000000000000000000');
    
    await expect(vault.createSafe("0xabc123", this.signers.claimer.address, fee))
            .to.be.reverted;
  });

}

export function shouldBehaveLikeVaultForReceiver(): void {
  it("should be able to unlock safe", async function () {

    const adminVault = this.vault.connect(this.signers.admin);
    const fee = BigNumber.from('1000000000000000000');
    
    await expect(adminVault.createSafe(this.signers.compromised.address, this.signers.claimer.address, fee))
            .to.emit(adminVault, 'NewSafe')
            .withArgs(this.signers.compromised.address, this.signers.claimer.address, 1);

    const claimerVault = this.vault.connect(this.signers.claimer);
    const safe = await claimerVault.getSafeDetails(this.signers.claimer.address, 1);
    
    expect(!safe.unlocked)

    await expect(claimerVault.unlockSafe(safe.id, { value: safe.fee }))
            .to.emit(claimerVault, 'SafeUnlocked')
            .withArgs(1);
  });

  it("should fail to unlock safe", async function () {

    const adminVault = this.vault.connect(this.signers.admin);
    const fee = BigNumber.from('1000000000000000000');
    
    await expect(adminVault.createSafe(this.signers.compromised.address, this.signers.claimer.address, fee))
            .to.emit(adminVault, 'NewSafe')
            .withArgs(this.signers.compromised.address, this.signers.claimer.address, 1);

    const claimerVault = this.vault.connect(this.signers.claimer);
    const safe = await claimerVault.getSafeDetails(this.signers.claimer.address, 1);
    expect(!safe.unlocked)

    await expect(claimerVault.unlockSafe(safe.id, { value: safe.fee }))
            .to.emit(claimerVault, 'SafeUnlocked')
            .withArgs(1);

    const unlockedSafe = await claimerVault.getSafeDetails(this.signers.claimer.address, 1);
    expect(unlockedSafe.unlocked)    

    await expect(claimerVault.unlockSafe(unlockedSafe.id, { value: safe.fee }))
            .to.revertedWith("Already unlocked")
  });

  it("should be able to rescue tokens", async function () {

    const adminVault = this.vault.connect(this.signers.admin);
    const fee = BigNumber.from('1000000000000000000');

    const mockNFT = this.mockNFT.connect(this.signers.compromised);
    await mockNFT.mintNFT(this.signers.compromised.address, "");
    await mockNFT.setApprovalForAll(this.vault.address, true);
    await mockNFT.mintNFT(this.signers.compromised.address, "");

    const isApproved = await mockNFT.isApprovedForAll(this.signers.compromised.address, this.vault.address)
    expect(isApproved)

    const compromisedBalance = await mockNFT.balanceOf(this.signers.compromised.address)
    
    await expect(adminVault.createSafe(this.signers.compromised.address, this.signers.claimer.address, fee))
            .to.emit(adminVault, 'NewSafe')
            .withArgs(this.signers.compromised.address, this.signers.claimer.address, 1);

    const claimerVault = this.vault.connect(this.signers.claimer);
    const safe = await claimerVault.getSafeDetails(this.signers.claimer.address, 1);
    expect(!safe.unlocked)

    await expect(claimerVault.unlockSafe(safe.id, { value: safe.fee }))
            .to.emit(claimerVault, 'SafeUnlocked')
            .withArgs(1);

    const unlockedSafe = await claimerVault.getSafeDetails(this.signers.claimer.address, 1);
    expect(unlockedSafe.unlocked)    

    await expect(claimerVault.rescueTokens(safe.id, [mockNFT.address, mockNFT.address], [0, 1], { gasPrice: 30000000, gasLimit: 30000000 }))
            .to.emit(claimerVault, 'TokenRescued')
            .withArgs(unlockedSafe.from, mockNFT.address, 0);

    const claimerBalance = await mockNFT.balanceOf(this.signers.claimer.address);
    expect(claimerBalance).to.be.gt(0);
   
  });

  it("should fail to rescue tokens", async function () {

    const adminVault = this.vault.connect(this.signers.admin);
    const fee = BigNumber.from('1000000000000000000');

    const mockNFT = this.mockNFT.connect(this.signers.compromised);
    await mockNFT.mintNFT(this.signers.compromised.address, "");
    await mockNFT.mintNFT(this.signers.compromised.address, "");
    //await mockNFT.setApprovalForAll(this.vault.address, true);

    const isApproved = await mockNFT.isApprovedForAll(this.signers.compromised.address, this.vault.address)
    expect(isApproved)

    const compromisedBalance = await mockNFT.balanceOf(this.signers.compromised.address)
    
    await expect(adminVault.createSafe(this.signers.compromised.address, this.signers.claimer.address, fee))
            .to.emit(adminVault, 'NewSafe')
            .withArgs(this.signers.compromised.address, this.signers.claimer.address, 1);

    const claimerVault = this.vault.connect(this.signers.claimer);
    const safe = await claimerVault.getSafeDetails(this.signers.claimer.address, 1);
    expect(!safe.unlocked)

    await expect(claimerVault.unlockSafe(safe.id, { value: safe.fee }))
            .to.emit(claimerVault, 'SafeUnlocked')
            .withArgs(1);

    const unlockedSafe = await claimerVault.getSafeDetails(this.signers.claimer.address, 1);
    expect(unlockedSafe.unlocked)    

    await expect(claimerVault.rescueTokens(safe.id, [mockNFT.address, mockNFT.address], [0, 1], { gasPrice: 30000000, gasLimit: 30000000 }))
            .to.revertedWith("ERC721: transfer caller is not owner nor approved")
            

    const claimerBalance = await mockNFT.balanceOf(this.signers.claimer.address);
    expect(claimerBalance).to.be.eq(0);
    expect(compromisedBalance).to.be.gte(2);
  });
}
