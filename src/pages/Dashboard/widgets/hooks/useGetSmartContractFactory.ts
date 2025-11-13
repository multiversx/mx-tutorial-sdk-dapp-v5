import {
  AbiRegistry,
  SmartContractTransactionsFactory,
  TransactionsFactoryConfig
} from '@multiversx/sdk-core';
import { useGetNetworkConfig } from '@multiversx/sdk-dapp/out/react/network/useGetNetworkConfig';
import pingPongAbi from 'contracts/ping-pong.abi.json';

export const useGetSmartContractFactory = () => {
  const { network } = useGetNetworkConfig();

  const abi = AbiRegistry.create(pingPongAbi);

  const factory = new SmartContractTransactionsFactory({
    config: new TransactionsFactoryConfig({
      chainID: network.chainId
    }),
    abi
  });

  return factory;
};
