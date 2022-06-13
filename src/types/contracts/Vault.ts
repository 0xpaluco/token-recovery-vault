/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";

export declare namespace Vault {
  export type SafeStruct = {
    id: PromiseOrValue<BigNumberish>;
    from: PromiseOrValue<string>;
    to: PromiseOrValue<string>;
    unlocked: PromiseOrValue<boolean>;
    fee: PromiseOrValue<BigNumberish>;
  };

  export type SafeStructOutput = [
    BigNumber,
    string,
    string,
    boolean,
    BigNumber
  ] & {
    id: BigNumber;
    from: string;
    to: string;
    unlocked: boolean;
    fee: BigNumber;
  };
}

export interface VaultInterface extends utils.Interface {
  functions: {
    "_safeDetails(address,uint256)": FunctionFragment;
    "createSafe(address,address,uint256)": FunctionFragment;
    "getSafeDetails(address,uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "rescueTokens(uint256,address[],uint256[])": FunctionFragment;
    "throwError()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unlockSafe(uint256)": FunctionFragment;
    "withdraw()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "_safeDetails"
      | "createSafe"
      | "getSafeDetails"
      | "owner"
      | "renounceOwnership"
      | "rescueTokens"
      | "throwError"
      | "transferOwnership"
      | "unlockSafe"
      | "withdraw"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "_safeDetails",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "createSafe",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getSafeDetails",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rescueTokens",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "throwError",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "unlockSafe",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "_safeDetails",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "createSafe", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getSafeDetails",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rescueTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "throwError", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unlockSafe", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "NewSafe(address,address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "SafeUnlocked(uint256)": EventFragment;
    "TokenRescued(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewSafe"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SafeUnlocked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenRescued"): EventFragment;
}

export interface NewSafeEventObject {
  from: string;
  to: string;
  id: BigNumber;
}
export type NewSafeEvent = TypedEvent<
  [string, string, BigNumber],
  NewSafeEventObject
>;

export type NewSafeEventFilter = TypedEventFilter<NewSafeEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface SafeUnlockedEventObject {
  id: BigNumber;
}
export type SafeUnlockedEvent = TypedEvent<
  [BigNumber],
  SafeUnlockedEventObject
>;

export type SafeUnlockedEventFilter = TypedEventFilter<SafeUnlockedEvent>;

export interface TokenRescuedEventObject {
  from: string;
  tokenAddress: string;
  tokenId: BigNumber;
}
export type TokenRescuedEvent = TypedEvent<
  [string, string, BigNumber],
  TokenRescuedEventObject
>;

export type TokenRescuedEventFilter = TypedEventFilter<TokenRescuedEvent>;

export interface Vault extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VaultInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    _safeDetails(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string, boolean, BigNumber] & {
        id: BigNumber;
        from: string;
        to: string;
        unlocked: boolean;
        fee: BigNumber;
      }
    >;

    createSafe(
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _fee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getSafeDetails(
      to: PromiseOrValue<string>,
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[Vault.SafeStructOutput]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    rescueTokens(
      _safeId: PromiseOrValue<BigNumberish>,
      _tokenAddresses: PromiseOrValue<string>[],
      _tokenIds: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    throwError(overrides?: CallOverrides): Promise<[void]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    unlockSafe(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  _safeDetails(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, string, boolean, BigNumber] & {
      id: BigNumber;
      from: string;
      to: string;
      unlocked: boolean;
      fee: BigNumber;
    }
  >;

  createSafe(
    _from: PromiseOrValue<string>,
    _to: PromiseOrValue<string>,
    _fee: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getSafeDetails(
    to: PromiseOrValue<string>,
    _id: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<Vault.SafeStructOutput>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  rescueTokens(
    _safeId: PromiseOrValue<BigNumberish>,
    _tokenAddresses: PromiseOrValue<string>[],
    _tokenIds: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  throwError(overrides?: CallOverrides): Promise<void>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  unlockSafe(
    _id: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    _safeDetails(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string, boolean, BigNumber] & {
        id: BigNumber;
        from: string;
        to: string;
        unlocked: boolean;
        fee: BigNumber;
      }
    >;

    createSafe(
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _fee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getSafeDetails(
      to: PromiseOrValue<string>,
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<Vault.SafeStructOutput>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    rescueTokens(
      _safeId: PromiseOrValue<BigNumberish>,
      _tokenAddresses: PromiseOrValue<string>[],
      _tokenIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    throwError(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    unlockSafe(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "NewSafe(address,address,uint256)"(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      id?: null
    ): NewSafeEventFilter;
    NewSafe(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      id?: null
    ): NewSafeEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "SafeUnlocked(uint256)"(id?: null): SafeUnlockedEventFilter;
    SafeUnlocked(id?: null): SafeUnlockedEventFilter;

    "TokenRescued(address,address,uint256)"(
      from?: PromiseOrValue<string> | null,
      tokenAddress?: PromiseOrValue<string> | null,
      tokenId?: null
    ): TokenRescuedEventFilter;
    TokenRescued(
      from?: PromiseOrValue<string> | null,
      tokenAddress?: PromiseOrValue<string> | null,
      tokenId?: null
    ): TokenRescuedEventFilter;
  };

  estimateGas: {
    _safeDetails(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createSafe(
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _fee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getSafeDetails(
      to: PromiseOrValue<string>,
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    rescueTokens(
      _safeId: PromiseOrValue<BigNumberish>,
      _tokenAddresses: PromiseOrValue<string>[],
      _tokenIds: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    throwError(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    unlockSafe(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdraw(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    _safeDetails(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createSafe(
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _fee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getSafeDetails(
      to: PromiseOrValue<string>,
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    rescueTokens(
      _safeId: PromiseOrValue<BigNumberish>,
      _tokenAddresses: PromiseOrValue<string>[],
      _tokenIds: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    throwError(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    unlockSafe(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
