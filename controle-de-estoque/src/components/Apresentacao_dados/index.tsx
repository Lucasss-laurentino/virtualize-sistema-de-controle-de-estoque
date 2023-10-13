import { useContext } from 'react';
import { PaginaInicial } from '../PaginaInicial';
import './index.css';
import { CurrentPageContext } from '../../Contexts/CurrentPageContext';
import { PaginaProdutos } from '../PageProdutos';


export const Apresentacao_dados = () => {

    const { id } = useContext(CurrentPageContext);

    return (
        <>
            <div className="apresentacao-de-dados">

                
                { id === "0" && <PaginaInicial/> }

                { id === "1" && <PaginaProdutos/> }

            </div>
        </>
    );

}