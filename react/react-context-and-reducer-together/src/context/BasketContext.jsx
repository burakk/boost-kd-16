import { createContext, useReducer } from "react";
import { DATA_BASKET } from "../data/data";
import { basketReducer } from "../reducer/basketReducer"

export const BasketContext = createContext(null);


export function BasketContextProvider({ children }) {
    const [basketData, dispatch] = useReducer(basketReducer, DATA_BASKET);

    // { data, dispatch }


    return (
        <BasketContext.Provider value={{ basketData, dispatch }}>

            {children}

        </BasketContext.Provider>
    )
}
