// 1- createContext
// 2- Context.Provider
// 3- useContext

import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export function AuthContextProvider({children}){
    const [token, setToken] = useState(sessionStorage.getItem("token"));
// token {id, email, name}, provide token, provide setToken
    function addToken(userData){
        // 1- Token'ı sessionStorage ya da localStorage'a kaydet.
        // 2- Kaydedildikten sonra setToken ile re-render et.
        console.log(userData);
        sessionStorage.setItem("token", JSON.stringify(userData));
        console.log(JSON.stringify(userData))
        setToken({...userData});
    }

    function clearToken(){
        // 1- Token'ı sessionStorage ya da localStorage'dan sil.
        // 2- Silindikten sonra setToken ile re-render et.
        
        sessionStorage.removeItem("token");
        setToken(null);
    }

    return (
        <AuthContext.Provider value={{token, addToken, clearToken}}>
            {children}
        </AuthContext.Provider>
    )
}