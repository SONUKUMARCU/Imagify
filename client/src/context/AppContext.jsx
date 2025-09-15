import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
    const [user,setUser] = useState(null);

    const value = {
        user,setUser
    };

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export const useAppContext = ()=>{
    return useContext(AppContext);
}