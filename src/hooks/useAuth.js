import { useContext } from 'react';
// import { useAuth } from '../context/AuthContext';

export const useAuth = () => {
  return useContext(AuthContext);
};
