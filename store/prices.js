import { createContext, useContext, useEffect, useState } from 'react';
import usePrices from '../hooks/prices';

const PricesContext = createContext();

export function PricesWrapper({ children }) {
  const [prices, setPrices] = useState([]);

  const { getRenBtcEthPair } = usePrices();

  useEffect(() => {
    getRenBtcEthPair()
    .then((data) => {
        setPrices({
            renBtcEth: data
        })
    });
  }, []);

  return (
    <PricesContext.Provider value={{
        prices, setPrices
    }}>
      {children}
    </PricesContext.Provider>
  );
}

export function usePricesContext() {
  return useContext(PricesContext);
}