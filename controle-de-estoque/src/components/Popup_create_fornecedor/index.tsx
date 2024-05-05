import { SetStateAction, useContext, useEffect, useState } from 'react';
import IFornecedor from '../../types/Fornecedor';
import './index.css';
import { FornecedorContext } from '../../Contexts/FornecedorContext';
import React from 'react';
import { ProdutoContext } from '../../Contexts/ProdutoContext';
import IProduto from '../../types/Produto';

interface Props {
    renderPopup: boolean,
    itemDigitado: string,
    setValue: any,
    itensPopup: IFornecedor[],
    setItensPopup: React.Dispatch<SetStateAction<IFornecedor[] | IProduto[]>>,
    Nfunc: number,
}

export const Popup_create_fornecedor = ({ renderPopup, itemDigitado, setValue, itensPopup, setItensPopup, Nfunc }: Props) => {

    const {
        fornecedores,
        criar_fornecedor,
        pegar_fornecedores,
        fornecedoresPopUp,
    } = useContext(FornecedorContext);

    const { produtos } = useContext(ProdutoContext);

    const [gatilho_form_item_lista, setGatilho_form_item_lista] = useState(false);

    useEffect(() => {

        Nfunc == 1 && setItensPopup([...fornecedores])
        Nfunc == 2 && setItensPopup([...produtos]);

    }, [fornecedores])

    useEffect(() => {

        if (Nfunc === 1) {

            let arrayFornecedores: IFornecedor[] = [];

            fornecedores?.filter(fornecedor => { // pegar fornecedores que sao iguais ao 'itemDigitado'

                if (fornecedor.nome.indexOf(itemDigitado) != -1 && fornecedor.nome.indexOf(itemDigitado) === 0) {
                    arrayFornecedores.push(fornecedor);
                }

                if (fornecedor.nome === itemDigitado) {
                    setGatilho_form_item_lista(true);
                } else {
                    setGatilho_form_item_lista(false);
                }

            })

            setItensPopup([...arrayFornecedores]); // setando fornecedores apenas com fornecedores de acordo com o 'itemDigitado'    

        }

        if (Nfunc === 2) {

            let arrayProdutos: IProduto[] = [];

            produtos?.filter(produto => { // pegar fornecedores que sao iguais ao 'itemDigitado'

                if (produto.nome.indexOf(itemDigitado) != -1 && produto.nome.indexOf(itemDigitado) === 0) {
                    arrayProdutos.push(produto);
                }

                if (produto.nome === itemDigitado) {
                    setGatilho_form_item_lista(true);
                } else {
                    setGatilho_form_item_lista(false);
                }

            })

            setItensPopup([...arrayProdutos]); // setando fornecedores apenas com fornecedores de acordo com o 'itemDigitado'    

        }

    }, [itemDigitado])

    return (

        <>

            {renderPopup &&

                <>
                    <div className={Nfunc == 1 ? "popup-fornecedor" : "popup-produto"}>
                        <ul className="lista-item">
                            {itensPopup?.map((item) => {
                                return (

                                    <li key={item._id} className='item-lista' onClick={() => setValue('nome_fornecedor', item.nome)}>{item.nome}</li>

                                )
                            })}
                        </ul>

                        {!gatilho_form_item_lista &&

                            <>
                                <div className={itemDigitado === "" ? "d-none" : "criar-item"} onClick={() => {

                                    criar_fornecedor(itemDigitado)

                                }}>
                                    <div className="d-flex justify-content-start align-items-center pt-2">
                                        <div className="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" fill="#605d5d" className="bi bi-plus-square" viewBox="0 0 16 16">
                                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                            </svg>
                                        </div>
                                        <div className="texto-cadastrar m-0 px-1 ">Cadastrar</div>
                                    </div>
                                    <p className="texto-pequeno px-1">toque para cadastrar '{itemDigitado}'</p>
                                </div>
                            </>

                        }

                    </div>

                </>

            }

        </>

    )
}