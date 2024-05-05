import { createContext, useState } from "react";
import Produto from "../types/Produto";
import { http } from "../http/http";

type ProdutoType = {
    produto: Produto | undefined,
    produtos: Produto[],
    criarProduto: (dados_produto: Produto) => void,

}

export const ProdutoContext = createContext<ProdutoType>(null!);

export const ProdutoProvider = ({children}: {children: JSX.Element}) => {
    
    const [produto, setProduto] = useState<Produto | undefined>();

    const [produtos, setProdutos] = useState<Produto[]>([

        {
            _id: '0',
            nome: 'Produto 0',
            codigo_proprio: 'produto 1',
            categoria: 'categoria 1',
            palavra_chave: 'chaveProduto1',
            preco_de_custo: '100, 00',
            preco_de_venda: '199,90',
            estoque_atual: '25',
            estoque_minimo: '5',
            total: '2000.00',
        },
        {
            _id: '1',
            nome: 'Produto 1',
            codigo_proprio: 'produto 1',
            categoria: 'categoria 1',
            palavra_chave: 'chaveProduto1',
            preco_de_custo: '100, 00',
            preco_de_venda: '199,90',
            estoque_atual: '25',
            estoque_minimo: '5',
            total: '2000.00',
        },
        {
            _id: '2',
            nome: 'Produto 2',
            codigo_proprio: 'produto 2',
            categoria: 'categoria 2',
            palavra_chave: 'chaveProduto2',
            preco_de_custo: '100, 00',
            preco_de_venda: '199,90',
            estoque_atual: '25',
            estoque_minimo: '5',
            total: '2000.00',
        },
        {
            _id: '3',
            nome: 'Produto 3',
            codigo_proprio: 'produto 3',
            categoria: 'categoria 3',
            palavra_chave: 'chaveProduto3',
            preco_de_custo: '100, 00',
            preco_de_venda: '199,90',
            estoque_atual: '25',
            estoque_minimo: '5',
            total: '2000.00',
        },
        {
            _id: '4',
            nome: 'Produto 4',
            codigo_proprio: 'produto 4',
            categoria: 'categoria 4',
            palavra_chave: 'chaveProduto4',
            preco_de_custo: '100, 00',
            preco_de_venda: '199,90',
            estoque_atual: '25',
            estoque_minimo: '5',
            total: '2000.00',
        },

    ]);

    const criarProduto = (dados_produto: Produto) => {

        http.post('/criar_produto', {dados_produto}).then((response) => {
            console.log(response.data);
        }).catch(() => {
            
        })
        
    }

    return (

        <ProdutoContext.Provider value={{produto, produtos, criarProduto}}>
            {children}
        </ProdutoContext.Provider>

    );

}