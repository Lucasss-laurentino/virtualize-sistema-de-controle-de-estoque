import { createContext, useState } from "react";
import Produto from "../types/Produto";

type ProdutoType = {
    produto: Produto | undefined,
    produtos: Produto[],
}

export const ProdutoContext = createContext<ProdutoType>(null!);

export const ProdutoProvider = ({children}: {children: JSX.Element}) => {
    
    const [produto, setProduto] = useState<Produto | undefined>();

    const [produtos, setProdutos] = useState<Produto[]>([

        {
            id: '0',
            nome: 'Produto 1',
            categoria: 'categoria 1',
            preco: '199,90',
            quantidade: 25,
            entrada: 200,
            saida: 175,
            total: '2000.00',
        },
        {
            id: '1',
            nome: 'Produto 2',
            categoria: 'categoria 2',
            preco: '149,90',
            quantidade: 80,
            entrada: 130,
            saida: 125,
            total: '1300.00',
        },
        {
            id: '2',
            nome: 'Produto 2',
            categoria: 'categoria 1',
            preco: '99,90',
            quantidade: 50,
            entrada: 220,
            saida: 175,
            total: '3000.00',
        },
        {
            id: '3',
            nome: 'Produto 3',
            categoria: 'categoria 3',
            preco: '119,90',
            quantidade: 125,
            entrada: 200,
            saida: 75,
            total: '2000.00',
        },
        {
            id: '4',
            nome: 'Produto 4',
            categoria: 'categoria 2',
            preco: '199,90',
            quantidade: 25,
            entrada: 200,
            saida: 175,
            total: '2000.00',
        },
        {
            id: '5',
            nome: 'Produto 5',
            categoria: 'categoria 4',
            preco: '199,90',
            quantidade: 25,
            entrada: 200,
            saida: 175,
            total: '2000.00',
        },
        {
            id: '6',
            nome: 'Produto 6',
            categoria: 'categoria 4',
            preco: '199,90',
            quantidade: 25,
            entrada: 200,
            saida: 175,
            total: '2000.00',
        },
        {
            id: '7',
            nome: 'Produto 7',
            categoria: 'categoria 2',
            preco: '199,90',
            quantidade: 25,
            entrada: 200,
            saida: 175,
            total: '2000.00',
        },
        {
            id: '8',
            nome: 'Produto 8',
            categoria: 'categoria 1',
            preco: '199,90',
            quantidade: 25,
            entrada: 200,
            saida: 175,
            total: '2000.00',
        },
        {
            id: '9',
            nome: 'Produto 9',
            categoria: 'categoria 1',
            preco: '199,90',
            quantidade: 25,
            entrada: 200,
            saida: 175,
            total: '2000.00',
        },
        {
            id: '10',
            nome: 'Produto 10',
            categoria: 'categoria 1',
            preco: '199,90',
            quantidade: 25,
            entrada: 200,
            saida: 175,
            total: '2000.00',
        },
        {
            id: '11',
            nome: 'Produto 11',
            categoria: 'categoria 1',
            preco: '199,90',
            quantidade: 25,
            entrada: 200,
            saida: 175,
            total: '2000.00',
        },
        {
            id: '12',
            nome: 'Produto 12',
            categoria: 'categoria 1',
            preco: '199,90',
            quantidade: 25,
            entrada: 200,
            saida: 175,
            total: '2000.00',
        },
        {
            id: '13',
            nome: 'Produto 13',
            categoria: 'categoria 1',
            preco: '199,90',
            quantidade: 25,
            entrada: 200,
            saida: 175,
            total: '2000.00',
        },
        {
            id: '14',
            nome: 'Produto 14',
            categoria: 'categoria 1',
            preco: '199,90',
            quantidade: 25,
            entrada: 200,
            saida: 175,
            total: '2000.00',
        },
        {
            id: '15',
            nome: 'Produto 15',
            categoria: 'categoria 1',
            preco: '199,90',
            quantidade: 25,
            entrada: 200,
            saida: 175,
            total: '2000.00',
        },
        {
            id: '16',
            nome: 'Produto 16',
            categoria: 'categoria 1',
            preco: '199,90',
            quantidade: 25,
            entrada: 200,
            saida: 175,
            total: '2000.00',
        },
        {
            id: '17',
            nome: 'Produto 17',
            categoria: 'categoria 1',
            preco: '199,90',
            quantidade: 25,
            entrada: 200,
            saida: 175,
            total: '2000.00',
        },
        {
            id: '18',
            nome: 'Produto 18',
            categoria: 'categoria 1',
            preco: '199,90',
            quantidade: 25,
            entrada: 200,
            saida: 175,
            total: '2000.00',
        },
        {
            id: '19',
            nome: 'Produto 19',
            categoria: 'categoria 1',
            preco: '199,90',
            quantidade: 25,
            entrada: 200,
            saida: 175,
            total: '2000.00',
        },

    ]);

    return (

        <ProdutoContext.Provider value={{produto, produtos}}>
            {children}
        </ProdutoContext.Provider>

    );

}