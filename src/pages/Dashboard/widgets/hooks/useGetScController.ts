import {
  AbiRegistry,
  ProxyNetworkProvider,
  SmartContractController
} from '@multiversx/sdk-core';
import { useGetNetworkConfig } from '@multiversx/sdk-dapp/out/react/network/useGetNetworkConfig';
import pingPongAbi from 'contracts/ping-pong.abi.json';

export const useGetScController = () => {
  const { network } = useGetNetworkConfig();

  const proxy = new ProxyNetworkProvider(network.apiAddress);

  const abi = AbiRegistry.create(pingPongAbi);

  const scController = new SmartContractController({
    chainID: network.chainId,
    networkProvider: proxy,
    abi
  });

  return scController;
};
