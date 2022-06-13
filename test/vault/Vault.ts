import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { artifacts, ethers, waffle } from "hardhat";
import type { Artifact } from "hardhat/types";
import { MockNFT, Vault } from "../../src/types";

import { Signers } from "../types";
import { shouldBehaveLikeVaultForAdmin, shouldBehaveLikeVaultForReceiver } from "./Vault.behavior";

describe("Unit tests", function () {
  before(async function () {
    this.signers = {} as Signers;

    const signers: SignerWithAddress[] = await ethers.getSigners();
    this.signers.admin = signers[0];
    this.signers.compromised = signers[1];
    this.signers.claimer = signers[2];
  });

  describe("Vault", function () {
    beforeEach(async function () {
      
      const greeterArtifact: Artifact = await artifacts.readArtifact("Vault");
      this.vault = <Vault>await waffle.deployContract(this.signers.admin, greeterArtifact);

      const mockNFTArtifact: Artifact = await artifacts.readArtifact("MockNFT");
      this.mockNFT = <MockNFT>await waffle.deployContract(this.signers.admin, mockNFTArtifact);

    });

    shouldBehaveLikeVaultForAdmin();
    shouldBehaveLikeVaultForReceiver();
  });
});
