import React, {createContext, useContext} from 'react';

// Create a Context for the base URL
const ConfigContext = createContext();

export const ConfigProvider = ({children}) => {
  const BASE_URL = 'https://docare.posaccountant.com/api/v1/';

  return (
    <ConfigContext.Provider value={{BASE_URL}}>
      {children}
    </ConfigContext.Provider>
  );
};

// Custom hook to use the ConfigContext
export const useConfig = () => {
  return useContext(ConfigContext);
};
