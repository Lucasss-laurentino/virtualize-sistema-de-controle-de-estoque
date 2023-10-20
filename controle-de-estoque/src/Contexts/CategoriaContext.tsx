import { createContext, useState } from "react";
import Categoria from "../types/Categoria";

type CategoriaType = {
    categoria: string | undefined,
    encontrarCategoria: (categoriaDigitadaNoInput: string) => void,
    categorias: Categoria[] | undefined,
    categoriaDigitada: Categoria[],
}

export const CategoriaContext = createContext<CategoriaType>(null!);

export const CategoriaProvider = ({children}: {children: JSX.Element}) => {

    const [categoria, setCategoria] = useState('');

    const [categorias, setCategorias] = useState<Categoria[]>([
        {
            id: '1233',
            categoria: 'categoria 1'
        },
        {
            id: '1232',
            categoria: 'tetando 2'
        },
        
        {
            id: '1231',
            categoria: 'teste'
        },
        

    ]);

    const [categoriaDigitada, setCategoriaDigitada] = useState<Categoria[]>([]);

    const encontrarCategoria = (categoriaDigitadaNoInput: string) => {

        const arrayTeste: Categoria[] = []

        categorias.filter(categoria => {
    
            if(categoria.categoria.indexOf(categoriaDigitadaNoInput) != -1 && categoria.categoria.indexOf(categoriaDigitadaNoInput) === 0){
                arrayTeste.push(categoria);
            }
            
        })

        setCategoriaDigitada(arrayTeste)
    }

    return (
        <CategoriaContext.Provider value={{ categoria, encontrarCategoria, categorias, categoriaDigitada }}>
            {children}
        </CategoriaContext.Provider>
    )

}