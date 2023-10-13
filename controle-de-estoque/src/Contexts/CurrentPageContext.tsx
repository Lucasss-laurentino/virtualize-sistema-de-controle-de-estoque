import { createContext, useState } from "react";

type CurrentPageType = {

    id: string,
    changePage: (id: string) => void,

}

export const CurrentPageContext = createContext<CurrentPageType>(null!);

export const CurrentPageProvider = ({children}: {children: JSX.Element}) => {
    
    const [id, setId] = useState<string>('0');

    const changePage = (id: string) => {
        setId(id);
    }

    return (
        <CurrentPageContext.Provider value={{id, changePage}}>
            {children}
        </CurrentPageContext.Provider>
    );
}