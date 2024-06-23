import { SetStateAction, createContext, useState } from "react";
import Produto from "../types/Produto";
import { http } from "../http/http";

type ProdutoType = {
    produto: Produto | undefined,
    produtos: Produto[],
    criarProduto: (dados_produto: Produto) => void,
    pegarProdutos: (fornecedorId: string) => void,
    setFornecedorId: React.Dispatch<SetStateAction<string>>,
}

export const ProdutoContext = createContext<ProdutoType>(null!);

export const ProdutoProvider = ({children}: {children: JSX.Element}) => {
    
    const [produto, setProduto] = useState<Produto | undefined>();

    const [produtos, setProdutos] = useState<Produto[]>([]);

    const [fornecedorId, setFornecedorId] = useState('');

    const pegarProdutos = (fornecedorId: string) => { // essa função e chamado na popup fornecedor

        http.get(`/produtos/${fornecedorId}`).then((response) => { // MUDANÇA A FAZER - PASSAR PARAMETRO PELO BODY

            setProdutos([...response.data.produtos])

        }).catch((response) => {

            console.log(response);

        })

    }

    const criarProduto = (dados_produto: Produto) => {

        http.post('/produtos', {dados_produto, fornecedorId}).then((response) => {
            console.log(response.data);
        }).catch(() => {
            
        })
        
    }

    return (

        <ProdutoContext.Provider value={{produto, produtos, criarProduto, pegarProdutos, setFornecedorId}}>
            {children}
        </ProdutoContext.Provider>

    );

}