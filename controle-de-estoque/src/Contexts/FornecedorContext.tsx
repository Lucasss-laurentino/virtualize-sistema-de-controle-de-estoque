import { SetStateAction, createContext, useState } from "react";
import IFornecedor from "../types/Fornecedor";
import { http } from "../http/http";

type FornecedorType = {

    fornecedores: IFornecedor[],
    setFornecedores: React.Dispatch<SetStateAction<IFornecedor[]>>,
    buscar_fornecedores: () => void,
    criar_fornecedor: (itemDigitado: string) => void,
}

export const FornecedorContext = createContext<FornecedorType>(null!);

export const FornecedorProvider = ({children}: {children: JSX.Element}) => {

    const [fornecedores, setFornecedores] = useState<IFornecedor[]>([]);

    const buscar_fornecedores = () => {

        http.post('/buscar_fornecedores').then((response) => {
            setFornecedores([...response.data.fornecedores]);
        })

    }

    const criar_fornecedor = (itemDigitado: string ) => {

        const nome = itemDigitado;

        http.post('/criar_fornecedor', {nome}).then((response) => {
            setFornecedores([...response.data.fornecedores]);
        })

    }

    return (

        <FornecedorContext.Provider value={{
            fornecedores, 
            setFornecedores,
            buscar_fornecedores,
            criar_fornecedor,    
        }}>
            {children}
        </FornecedorContext.Provider>

    )

}