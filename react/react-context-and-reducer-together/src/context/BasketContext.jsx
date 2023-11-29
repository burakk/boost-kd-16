import { createContext } from "react";
import { DATA_BASKET } from "../data/data";

export const BasketContext = createContext(null);


export function BasketContextProvider( {children }){


    return (
        <BasketContext.Provider value={DATA_BASKET}>

               {children}     

        </BasketContext.Provider>
    )
}
