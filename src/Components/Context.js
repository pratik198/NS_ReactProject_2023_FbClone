import { createContext, useContext, useState } from "react";
const AuthContext = createContext();
export function useAuth() {
    return useContext(AuthContext);
  }
  export function AuthProvider({ children }) {
    const [apiSearch, setApiSearchData] = useState([]);
    const [puId, setpuId] = useState(null);
  
    return (
      <AuthContext.Provider value={{setApiSearchData,apiSearch,puId, setpuId }}>
        {children}
      </AuthContext.Provider>
    );
  }






   
  