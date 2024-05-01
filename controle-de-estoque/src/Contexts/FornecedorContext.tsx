import { SetStateAction, createContext, useState } from "react";
import IFornecedor from "../types/Fornecedor";
import { http } from "../http/http";

type FornecedorType = {

    fornecedores: IFornecedor[],
    setFornecedores: React.Dispatch<SetStateAction<IFornecedor[]>>,
    pegar_fornecedores: () => void,
    criar_fornecedor: (itemDigitado: string) => void,
    fornecedoresPopUp: IFornecedor[]
    setFornecedoresPopUp: React.Dispatch<SetStateAction<IFornecedor[]>>,
}

export const FornecedorContext = createContext<FornecedorType>(null!);

export const FornecedorProvider = ({children}: {children: JSX.Element}) => {

    const [fornecedores, setFornecedores] = useState<IFornecedor[]>([]);
    const [fornecedoresPopUp, setFornecedoresPopUp] = useState<IFornecedor[]>([]);

    const pegar_fornecedores = () => {

        
        http.get('/pegar_fornecedores').then((response) => {
            setFornecedoresPopUp([...response.data.fornecedores])
            setFornecedores([...response.data.fornecedores]);
        })
        

    }

    const criar_fornecedor = (itemDigitado: string ) => {

        const nome = itemDigitado;

        http.post('/criar_fornecedor', {nome}).then((response) => {
            console.log(response.data);
            setFornecedoresPopUp([...fornecedoresPopUp, response.data.novo_fornecedor])
            setFornecedores([...fornecedores, response.data.novo_fornecedor]);
        })

    }

    return (

        <FornecedorContext.Provider value={{
            fornecedores, 
            setFornecedores,
            pegar_fornecedores,
            criar_fornecedor,    
            fornecedoresPopUp,
            setFornecedoresPopUp
        }}>
            {children}
        </FornecedorContext.Provider>

    )

}