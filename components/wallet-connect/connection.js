import { useCallback } from "react";
import { useAccountContext } from "../../store/account"
import Web3Modal from 'web3modal'
import { providers } from 'ethers'
import { providerOptions } from './config';

function useConnection(){
    const { 
        setAddress, 
        setProvider, 
        setChainId, 
        setWeb3Provider,
        provider,
    } = useAccountContext();

    let web3Modal
    if (typeof window !== 'undefined') {
        web3Modal = new Web3Modal({
            network: 'mainnet', // optional
            cacheProvider: true,
            providerOptions, // required
        })
    }

    const connect = useCallback(async function () {
        const provider = await web3Modal.connect();
        const web3Provider = new providers.Web3Provider(provider);
        const signer = web3Provider.getSigner();
        const address = await signer.getAddress();
        const network = await web3Provider.getNetwork();
    
        setProvider(provider);
        setWeb3Provider(web3Provider);
        setAddress(address);
        setChainId(network.chainId);
    }, []);
    
    const disconnect = useCallback(async function () {
        await web3Modal.clearCachedProvider()
        if (provider?.disconnect && typeof provider.disconnect === 'function') {
            await provider.disconnect();
        }

        setProvider(null);
        setWeb3Provider(null);
        setAddress(null);
        setChainId(null);
    }, [provider]);

    return {
        connect,
        disconnect,
        web3Modal
    }
}

export default useConnection;