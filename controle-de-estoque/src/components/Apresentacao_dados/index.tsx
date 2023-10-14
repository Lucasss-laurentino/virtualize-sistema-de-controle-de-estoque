import { useContext } from 'react';
import { PaginaInicial } from '../PaginaInicial';
import './index.css';
import { CurrentPageContext } from '../../Contexts/CurrentPageContext';
import { PaginaProdutos } from '../PageProdutos';
import { PageVendas } from '../PageVendas';
import { PageEntrada } from '../PageEntrada';


export const Apresentacao_dados = () => {

    const { id } = useContext(CurrentPageContext);

    return (
        <>
            <div className="apresentacao-de-dados">

                
                { id === "0" && <PaginaInicial/> }

                { id === "1" && <PaginaProdutos/> }

                { id === "3" && <PageVendas />}

                { id === "4" && <PageEntrada />}

            </div>
        </>
    );

}