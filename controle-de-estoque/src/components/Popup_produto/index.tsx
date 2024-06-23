import { SetStateAction, useContext, useEffect, useState } from 'react';
import './index.css';
import React from 'react';
import { ProdutoContext } from '../../Contexts/ProdutoContext';
import IProduto from '../../types/Produto';
import { http } from '../../http/http';

interface Props {
    append: any,
    fieldId: string,
    fields: any,
    id_campo: string,
    index: number,
    renderPopup: boolean,
    itemDigitado: string,
    setValue: any,
    itensPopup: IProduto[],
    setItensPopup: React.Dispatch<SetStateAction<IProduto[]>>,
    input_mascara:any,
}

export const Popup_produto = ({append, fieldId, fields, id_campo, index, renderPopup, itemDigitado, setValue, itensPopup, setItensPopup, input_mascara}: Props) => {

    const { produtos, criarProduto } = useContext(ProdutoContext);

    const [gatilho_form, setGatilho_form] = useState(true);
    const [criar_componente, setCriar_componente] = useState(true);
    
    // função de produtos 
    //essa função precisa ser refatorada pra uma func sincrona em outro arquivo
    const novo_componente =  (itemNome: string) => {
        
        setValue(`produto.${index}.nome`,  itemNome)

        fields.map((field: any) => {
            
            if(field.nome === '') {
                setCriar_componente(false);
            }            
        
        })

        if(criar_componente){

            append(
                {
                    nome: '',
                    custo_unitario: input_mascara.format(parseInt('000') / 100),
                    quantidade: 0,
                    desconto: input_mascara.format(parseInt('000') / 100),
                    outros_custos: input_mascara.format(parseInt('000') / 100),
                    custos_externos: input_mascara.format(parseInt('000') / 100),
                    ipi: input_mascara.format(parseInt('000') / 100),
                    substituicao_tributaria: input_mascara.format(parseInt('000') / 100),
                    total: input_mascara.format(parseInt('000') / 100),                    
                },
                {
                    focusName: `produto.${index}.custo_unitario`,
                }
            
            )  

        }

    }

    const criar_produto_e_componente = () => {

        novo_componente(itemDigitado);

        const produto = fields.find((field: IProduto) => {
            
            if(field.id === fieldId) {
                field.nome = itemDigitado
            } 

            return field

        });

        criarProduto(produto);
    
    }

    useEffect(() => {
        setItensPopup([...produtos]);
    }, [produtos]);

    useEffect(() => {

            if(itemDigitado.length > 0){
                setGatilho_form(false)
            }

            let arrayProdutos: IProduto[] = [];

            produtos?.filter(produto => { // pegar fornecedores que sao iguais ao 'itemDigitado'

                if (produto.nome.indexOf(itemDigitado) !== -1 && produto.nome.indexOf(itemDigitado) === 0) {

                    arrayProdutos.push(produto);

                }

                if(produto.nome === itemDigitado){
                    setGatilho_form(true);
                }

            })

            setItensPopup([...arrayProdutos]); // setando fornecedores apenas com fornecedores de acordo com o 'itemDigitado'    

    }, [itemDigitado]);

    return (

        <>

            {renderPopup && id_campo === fieldId &&

                <>
                    <div className="popup-produto">
                        <ul className="lista-item">            
                        {!gatilho_form &&
                            // form
                            <li className="item-lista" onClick={() => criar_produto_e_componente()}>
                                <>
                                    <div className={itemDigitado === "" ? "d-none" : "criar-item"}>
                                        <div className="d-flex justify-content-start align-items-center pt-2">
                                            <div className="">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" fill="#605d5d" className="bi bi-plus-square mx-1" viewBox="0 0 16 16">
                                                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                                </svg>
                                                Cadastrar
                                            </div>
                                        </div>
                                        <p className="texto-cadastrar-popup px-1 mb-1">'{itemDigitado}'</p>
                                    </div>
                                </>
                            </li>
                        }
                            {itensPopup?.map((item) => {   
                               return (
                                    <li key={item.id} className='item-lista py-2' onClick={() => {
                                        novo_componente(item.nome);
                                    }}>{item.nome}</li>
                                )
                            })}
                        </ul>
                    </div>
                </>
            }
        </>
    )
}