import { createContext, useState } from "react";
import Categoria from "../types/Categoria";
import { http } from "../http/http";

type CategoriaType = {
    categoria: string | undefined,
    encontrarCategoria: (categoriaDigitadaNoInput: string) => void,
    categorias: Categoria[] | undefined,
    categoriaDigitada: Categoria[],
    pegar_categorias: () => void,
}

export const CategoriaContext = createContext<CategoriaType>(null!);

export const CategoriaProvider = ({children}: {children: JSX.Element}) => {

    const [categoria, setCategoria] = useState('');

    const [categorias, setCategorias] = useState<Categoria[]>([
        {
            id: '1233',
            nome: 'categoria 1'
        },
        {
            id: '1232',
            nome: 'tetando 2'
        },
        
        {
            id: '1231',
            nome: 'teste'
        },
        

    ]);

    const [categoriaDigitada, setCategoriaDigitada] = useState<Categoria[]>([]);

    const pegar_categorias = () => {

        http.get('/').then((response) => {
            //console.log(response.data)
        })

    }

    const encontrarCategoria = (categoriaDigitadaNoInput: string) => {

        const arrayTeste: Categoria[] = []

        categorias.filter(categoria => {
    
            if(categoria.nome.indexOf(categoriaDigitadaNoInput) != -1 && categoria.nome.indexOf(categoriaDigitadaNoInput) === 0){
                arrayTeste.push(categoria);
            }
            
        })

        setCategoriaDigitada(arrayTeste)
    }

    return (
        <CategoriaContext.Provider value={{ 
            categoria, 
            encontrarCategoria, 
            categorias, 
            categoriaDigitada, 
            pegar_categorias,
        }}>
            {children}
        </CategoriaContext.Provider>
    )

}