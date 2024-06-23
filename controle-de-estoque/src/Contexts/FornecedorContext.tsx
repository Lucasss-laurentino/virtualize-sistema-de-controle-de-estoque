import { SetStateAction, createContext, useState } from "react";
import IFornecedor from "../types/Fornecedor";
import { http } from "../http/http";
import axios from 'axios';

type FornecedorType = {

    fornecedores: IFornecedor[],
    setFornecedores: React.Dispatch<SetStateAction<IFornecedor[]>>,
    pegar_fornecedores: () => void,
    criar_fornecedor: (itemDigitado: string) => void,
    fornecedoresPopUp: IFornecedor[],
    setFornecedoresPopUp: React.Dispatch<SetStateAction<IFornecedor[]>>,
}

export const FornecedorContext = createContext<FornecedorType>(null!);

export const FornecedorProvider = ({children}: {children: JSX.Element}) => {

    const [fornecedores, setFornecedores] = useState<IFornecedor[]>([]);
    const [fornecedoresPopUp, setFornecedoresPopUp] = useState<IFornecedor[]>([...fornecedores]);
    const [fornecedorId, setFornecedorId] = useState('');

    const pegar_fornecedores = () => {
        //console.log('antes da req '+localStorage.getItem('token'))

        http.get('/fornecedor').then((response) => {
            setFornecedoresPopUp([...response.data.fornecedores])
            setFornecedores([...response.data.fornecedores]);
            console.log(response.data.fornecedores);
        }).catch((response) => {
            console.log(response?.response.data)
        })
        
    }

    const criar_fornecedor = (itemDigitado: string ) => {

        const nome = itemDigitado;

        http.post('/fornecedor', {nome}).then((response) => {
            console.log(response.data);
            setFornecedoresPopUp([...fornecedoresPopUp, response.data.fornecedor])
            setFornecedores([...fornecedores, response.data.fornecedor]);
        }).catch(erro => {
            console.log(erro.response);
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