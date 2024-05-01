import { useContext, useEffect, useState } from 'react';
import Categoria from '../../types/Categoria';
import IFornecedor from '../../types/Fornecedor';
import './index.css';
import { FornecedorContext } from '../../Contexts/FornecedorContext';
import React from 'react';

interface Props {
    renderPopup: boolean,
    itemDigitado: string,
}

export const Popup_create_fornecedor = ({ renderPopup, itemDigitado }: Props) => {

    const {
        fornecedores,
        criar_fornecedor,
        pegar_fornecedores,
        fornecedoresPopUp,
        setFornecedoresPopUp } = useContext(FornecedorContext);

    const [gatilho_form_fornecedor_lista, setGatilho_form_fornecedor_lista] = useState(false);

    useEffect(() => {

        pegar_fornecedores();

    }, [])

    useEffect(() => {

        let arrayFornecedores: IFornecedor[] = [];

        fornecedores?.filter(fornecedor => { // pegar fornecedores que sao iguais ao 'itemDigitado'

            if (fornecedor.nome.indexOf(itemDigitado) != -1 && fornecedor.nome.indexOf(itemDigitado) === 0) {
                arrayFornecedores.push(fornecedor);
            }

            if (fornecedor.nome === itemDigitado) {
                setGatilho_form_fornecedor_lista(true);
            } else {
                setGatilho_form_fornecedor_lista(false);
            }

        })

        setFornecedoresPopUp([...arrayFornecedores]); // setando fornecedores apenas com fornecedores de acordo com o 'itemDigitado'

    }, [itemDigitado])

    return (

        <>

            {renderPopup &&

                <div className="container position-absolute p-0 hover-block">
                    <ul className="lista-item-digitado">
                        {fornecedoresPopUp?.map((fornecedor) => {
                            return (

                                <li key={fornecedor._id} className='item-lista-categoria'>{fornecedor.nome}</li>

                            )
                        })}

                        {itemDigitado != "" && !gatilho_form_fornecedor_lista &&

                            <>
                                <div className="container d-flex justify-content-center align-itens-center">
                                    <div className="hov mt-1 mb-1 custom-btn-adc-f" onClick={() => {

                                        criar_fornecedor(itemDigitado)

                                    }}>
                                        <div className="svg px-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#605d5d" className="bi bi-plus-square" viewBox="0 0 16 16">
                                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                            </svg>
                                        </div>
                                        <div className="cadastrar-p2 m-0 px-1">Cadastrar</div>
                                    </div>

                                </div>
                                <div className="d-flex justify-content-center align-items-center">
                                    <p className="m-0 pb-2 texto-pequeno">toque para cadastrar '{itemDigitado}'</p>
                                </div>
                            </>
                        }

                    </ul>

                    {fornecedoresPopUp.length < 1 &&


                        <>

                            <div className={itemDigitado === "" ? "d-none" : "criar-item px-3 pt-2"}>
                                <div className="d-flex justify-content-start align-items-center hov" onClick={() => {

                                    criar_fornecedor(itemDigitado)

                                }}>
                                    <div className="svg px-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#605d5d" className="bi bi-plus-square" viewBox="0 0 16 16">
                                            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                        </svg>
                                    </div>
                                    <div className="cadastrar-p m-0 px-1">Cadastrar</div>
                                </div>
                                <p className="m-0 px-2 py-1 texto-pequeno">toque para cadastrar '{itemDigitado}'</p>
                            </div>
                        </>


                    }
                </div>

            }

        </>

    )
}