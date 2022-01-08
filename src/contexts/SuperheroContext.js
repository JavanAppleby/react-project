import { createContext, useState } from "react";

const SuperheroContext = createContext(null);

const SuperheroContextProvider = props => {
    const [superArray, setSuperArray] = useState([]);

    return (
        <SuperheroContext.Provider value={[superArray, setSuperArray]}>
            {props.children}
        </SuperheroContext.Provider>
    )
}

export {SuperheroContext, SuperheroContextProvider}