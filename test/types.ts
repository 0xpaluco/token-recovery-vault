import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import type { Fixture } from "ethereum-waffle";
import { Greeter, MockNFT, Vault } from "../src/types";

declare module "mocha" {
  export interface Context {
    greeter: Greeter;
    vault: Vault;
    mockNFT: MockNFT;
    loadFixture: <T>(fixture: Fixture<T>) => Promise<T>;
    signers: Signers;
  }
}

export interface Signers {
  admin: SignerWithAddress;
  compromised: SignerWithAddress;
  claimer: SignerWithAddress;
}
