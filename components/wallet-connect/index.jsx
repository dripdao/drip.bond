import { useCallback, useEffect } from 'react';
import { useAccountContext } from '../../store/account';
import Web3Modal from 'web3modal'
import { providers } from 'ethers'
import { providerOptions } from './config';
import styled from 'styled-components';

function WalletConnect() {
    const { 
        setAddress, 
        setProvider, 
        setChainId, 
        setWeb3Provider,
        provider,
        web3Provider,
        address 
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
    }, [])
    
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
    
    // Auto connect to the cached provider
    useEffect(() => {
        if (web3Modal.cachedProvider) {
          connect();
        }
    }, [connect]);
    
    useEffect(() => {
        if (provider?.on) {
            const handleAccountsChanged = (accounts) => {
            // eslint-disable-next-line no-console
            console.log('accountsChanged', accounts);
            setAddress(accounts[0]);
        }
    
        // https://docs.ethers.io/v5/concepts/best-practices/#best-practices--network-changes
        const handleChainChanged = (_hexChainId) => {
            window.location.reload();
        }
    
        const handleDisconnect = (error) => {
            // eslint-disable-next-line no-console
            console.log('disconnect', error);
            disconnect();
        }
    
        provider.on('accountsChanged', handleAccountsChanged);
        provider.on('chainChanged', handleChainChanged);
        provider.on('disconnect', handleDisconnect);
    
        // Subscription Cleanup
        return () => {
            if (provider.removeListener) {
                provider.removeListener('accountsChanged', handleAccountsChanged)
                provider.removeListener('chainChanged', handleChainChanged)
                provider.removeListener('disconnect', handleDisconnect)
            }
        }
        }
    }, [provider, disconnect])
    
    return (
        <>
            {web3Provider ? (
                <ConnectionButton type="button" onClick={disconnect}>
                    Disconnect
                </ConnectionButton>
            ) : (
                <ConnectionButton type="button" onClick={connect}>
                    Connect Wallet
                </ConnectionButton>
            )}
        </>
    )
}

const ConnectionButton = styled.button`
    cursor: pointer;
`;

export default WalletConnect;