/* eslint-disable react/prop-types */
import  { createContext, useContext,  } from 'react';
import { Team } from './ImageApi';

const UserContext = createContext();

export const UserProvider = ({ children }) => {

 

  return (
    <UserContext.Provider value={Team}>
      {children}
    </UserContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUserContext = () => {
  return useContext(UserContext);
};
