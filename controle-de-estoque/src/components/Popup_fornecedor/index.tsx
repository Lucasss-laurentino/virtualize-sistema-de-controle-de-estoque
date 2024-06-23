import { useContext, useEffect, useState } from 'react';
import './index.css';
import { FornecedorContext } from '../../Contexts/FornecedorContext';
import React from 'react';
import { ProdutoContext } from '../../Contexts/ProdutoContext';

interface Props {

    renderPopup: boolean,
    itemDigitado: string,
    setValue: any,
}

export const Popup_fornecedor = ({renderPopup, itemDigitado, setValue}: Props) => {

    const { fornecedores, criar_fornecedor , fornecedoresPopUp, setFornecedoresPopUp} = useContext(FornecedorContext);
    const [abreFechaForm, setAbreFechaForm] = useState(true);
    const { pegarProdutos, setFornecedorId } = useContext(ProdutoContext);

    useEffect(() => {

        if(itemDigitado.length > 0){

            setFornecedoresPopUp([...fornecedores.filter(fornecedor => fornecedor.nome.startsWith(itemDigitado))]);

            const fornecedor_find = fornecedoresPopUp.find(fornecedorPopup => fornecedorPopup.nome ===  itemDigitado);
            
            if(fornecedor_find === undefined){
                setAbreFechaForm(true);
            } else {
                setAbreFechaForm(false);
            }

        }        

    }, [itemDigitado])

    return (
        <>
        {renderPopup &&
            <div className="popup_fornecedor">                
                <ul className='list-ul-fornecedor_ '>
                    {abreFechaForm && itemDigitado.length > 0 &&
                    <div className="d-flex align-items-center justify-content-center w-100 pt-3">
                        <p className="paragrafo-popup-fornecedor-person" onClick={() => criar_fornecedor(itemDigitado)}>Toque para cadastrar <strong className="person-color">'{itemDigitado}'</strong></p>
                    </div>
                    }

                    {fornecedoresPopUp.map((fornecedor, index) => {
                        return(
                            <React.Fragment key={index}>
                                <li className='list-item-fornecedor' onClick={() => {
                                    setValue('fornecedor', fornecedor.nome);
                                    pegarProdutos(fornecedor.id);
                                    setFornecedorId(fornecedor.id);                                   
                                }}>{fornecedor.nome}</li>                            
                            </React.Fragment>    
                        )
                    })}
                </ul>
            </div>
        }
        </>
    )

}