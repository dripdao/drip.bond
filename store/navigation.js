import { createContext, useContext, useState } from 'react';

const NavContext = createContext();

export function NavWrapper({ children }) {
  const [current, setCurrent] = useState("Deposit");

  return (
    <NavContext.Provider value={{
        current, setCurrent,
    }}>
      {children}
    </NavContext.Provider>
  );
}

export function useNavContext() {
  return useContext(NavContext);
}