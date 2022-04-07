import { createContext, useContext, useState } from 'react';

const AccountContext = createContext();

export function AccountWrapper({ children }) {
  const [address, setAddress] = useState(null);
  const [provider, setProvider] = useState(null);
  const [web3Provider, setWeb3Provider] = useState(null);
  const [chainId, setChainId] = useState(null);

  return (
    <AccountContext.Provider value={{
        address, setAddress,
        provider, setProvider,
        web3Provider, setWeb3Provider,
        chainId, setChainId
    }}>
      {children}
    </AccountContext.Provider>
  );
}

export function useAccountContext() {
  return useContext(AccountContext);
}