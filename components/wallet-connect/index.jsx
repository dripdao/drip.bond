import { useEffect } from 'react';
import { useAccountContext } from '../../store/account';
import styled from 'styled-components';
import useConnection from '../../hooks/wallet';
import { truncateBetween } from '../../utils/helpers';
import { ColumnCenter, MarginAround, MarginTop } from '../../styles/layout.styled';

function WalletConnect() {
    const { 
        setAddress, 
        provider,
        web3Provider,
        address
    } = useAccountContext();

    const {
        connect,
        disconnect,
        web3Modal
    } = useConnection();
    
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
                <ColumnCenter>
                    {truncateBetween(address)}
                    <MarginTop>
                        <ConnectionButton type="button" onClick={disconnect}>
                            Disconnect
                        </ConnectionButton>
                    </MarginTop>
                </ColumnCenter>
            ) : (
                <MarginTop>
                    <ConnectionButton type="button" onClick={connect}>
                        Connect Wallet
                    </ConnectionButton>
                </MarginTop>
            )}
        </>
    )
}

const ConnectionButton = styled.button`
    font-size: 16px;
    padding: 0.25rem 1rem;
    cursor: pointer;
    transition: 0.2s ease;
    &:hover {
        color: #8a0600;
    }
`;

export default WalletConnect;