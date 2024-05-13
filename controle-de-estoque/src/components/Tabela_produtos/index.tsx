import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useFieldArray, useForm } from 'react-hook-form';
import './index.css';
import React, { useEffect, useState } from 'react';
import { Popup_create_fornecedor } from '../Popup_create_fornecedor';
import IProduto from '../../types/Produto';
import IFornecedor from '../../types/Fornecedor';

const schema = yup.object().shape({

    produto: yup.array().of(

        yup.object().shape({
            nome_produto: yup.string().required(),
            custo_unitario: yup.string().required(),
        })

    ),

})

export const Tabela_produtos = () => {

    const [renderPopup, setRenderPopup] = useState(false);
    const [itemDigitado, setItemDigitado] = useState('');
    const [itensPopup, setItensPopup] = useState<IFornecedor[] | IProduto[]>([]);
    const [indexState, setIndexState] = useState<null | number>(null);
    const [id_campo, setId_campo] = useState('');
    const [elemento, setElemento] = useState<any>();
    
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        setFocus,
        formState: { errors },
        control,
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            produto: [{
                nome_produto: '',
                custo_unitario: '',
            }]
        }
    })

    const { fields, append} = useFieldArray({
        name: 'produto',
        control
    });

    const delay_fechar_popup = () => { // função de delay pro click funcionar quando desfocar input e fechar popup


        setTimeout(() => {
         setRenderPopup(false)
         setId_campo('')
        }, 200)

    }

    const input_mascara = Intl.NumberFormat('pt-BR', {
        currency: 'BRL',
        style: 'currency',
    });

    useEffect(() => {

        if(indexState != null) {

            let texto = watch(`produto.${indexState}.nome_produto`);
            setItemDigitado(texto != undefined ? texto : '');
        }

    }, [watch()])

    useEffect(() => {

        if(indexState !== null){


            const txt = watch(`produto.${indexState}.custo_unitario`).replace(/\D/g, '');
            setValue(`produto.${indexState}.custo_unitario` ,input_mascara.format(parseInt(txt) / 100));
            

        }

    },[watch(`produto.${indexState !== null ? indexState : 0}.custo_unitario`)])

    return (

        <>

            <table className='tabela-compras-produto'>
                <thead>
                    <tr>
                        <th className='th-tabela-compras-produto col-2 p-0'>
                            Nome do produto
                        </th>
                        <th className='th-tabela-compras-produto col-1'>
                            Custo unitário
                        </th>
                        <th className='th-tabela-compras-produto col-1'>
                            Quantidade
                        </th>
                        <th className='th-tabela-compras-produto col-1'>
                            Desconto
                        </th>
                        <th className='th-tabela-compras-produto col-1'>
                            Outros custos
                        </th>
                        <th className='th-tabela-compras-produto col-1'>
                            Custos externos
                        </th>
                        <th className='th-tabela-compras-produto col-1'>
                            IPI
                        </th>
                        <th className='th-tabela-compras-produto col-1'>
                            Substituição tributária
                        </th>
                        <th className='th-tabela-compras-produto col-1'>
                            Total
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {fields.map((field, index) => {
                        return (
                            <React.Fragment key={field.id}>
                                <tr>
                                    
                                    <th className='th-tabela-compras-produto col-2 p-0'>
                                        <div className="span-input col-12">
                                            <div className="container position-relative">
                                                <input
                                                    className='col-12 input-form-produto'
                                                    type="text"
                                                    placeholder=''
                                                    {...register(`produto.${index}.nome_produto`)}
                                                    onFocus={() => {

                                                        setTimeout(() => {
                                                            setElemento(document.getElementsByClassName(`produto.${index}.custo_unitario`))
                                                            setIndexState(index);
                                                            setId_campo(field.id)
                                                            setRenderPopup(true)
    
                                                        }, 300)
                                                    }}
                                                    onBlur={() => {
                                                        delay_fechar_popup();
                                                    }}
                                                />
                                                <Popup_create_fornecedor

                                                    append={append}
                                                    index={index}
                                                    renderPopup={renderPopup}
                                                    itemDigitado={itemDigitado}
                                                    setValue={setValue}
                                                    Nfunc={2}
                                                    itensPopup={itensPopup}
                                                    setItensPopup={setItensPopup}
                                                    fieldId={field.id}
                                                    id_campo={id_campo}
                                                    fields={fields}
                                                    elemento={elemento}
                                                />
                                            </div>
                                        </div>
                                    </th>

                                    <th className='th-tabela-compras-produto col-1'>
                                        <div className="span-input col-12">
                                            <div className="span-icon-input d-md-flex align-items-center">
                                                <div className="col-12  title-table justify-content-md-center d-md-none">
                                                    <p className='txt-compras'>Custo unitário</p>
                                                </div>
                                                <input
                                                    {...register(`produto.${index}.custo_unitario`)}
                                                    id={`custo_unitario.${index}`}
                                                    className='col-10 col-md-10 input-form-produto mx-1 my-3' 
                                                    type="text"
                                                    placeholder='R$'
                                                />
                                            </div>
                                        </div>
                                    </th>
                                    <th className='th-tabela-compras-produto col-1'>
                                        <div className="span-input col-12">
                                            <div className="span-icon-input d-md-flex align-items-center">
                                                <div className="col-12 color-title title-table justify-content-md-center d-md-none">
                                                    <p className='txt-compras'>Quantidade</p>
                                                </div>
                                                <input className='input-form-produto col-10 mx-1 my-3' type="number" placeholder='R$' />
                                            </div>
                                        </div>
                                    </th>
                                    <th className='th-tabela-compras-produto col-1'>
                                        <div className="span-input col-12">
                                            <div className="span-icon-input d-md-flex align-items-center">
                                                <div className="col-12 color-title title-table justify-content-md-center d-md-none">
                                                    <p className='txt-compras'>Desconto</p>
                                                </div>
                                                <input className='input-form-produto col-10 mx-1 my-3' type="number" placeholder='R$' />
                                            </div>
                                        </div>
                                    </th>
                                    <th className='th-tabela-compras-produto col-1'>
                                        <div className="span-input col-12 ">
                                            <div className="span-icon-input d-md-flex align-items-center">
                                                <div className="col-12 color-title title-table justify-content-md-center d-md-none">
                                                    <p className='txt-compras'>Outros custos</p>
                                                </div>
                                                <input className='input-form-produto col-10 mx-1 my-3' type="number" placeholder='R$' />
                                            </div>
                                        </div>
                                    </th>
                                    <th className='th-tabela-compras-produto col-1'>
                                        <div className="span-input col-12">
                                            <div className="span-icon-input d-md-flex align-items-center">
                                                <div className="col-12 color-title title-table justify-content-md-center d-md-none">
                                                    <p className='txt-compras'>Custos externos</p>
                                                </div>
                                                <input className='input-form-produto col-10 mx-1 my-3' type="number" placeholder='R$' />
                                            </div>
                                        </div>
                                    </th>
                                    <th className='th-tabela-compras-produto col-1'>
                                        <div className="span-input col-12">
                                            <div className="span-icon-input d-md-flex align-items-center">
                                                <div className="col-12 color-title title-table justify-content-md-center d-md-none">
                                                    <p className='txt-compras'>IPI</p>
                                                </div>
                                                <input className='input-form-produto col-10 mx-1 my-3' type="number" placeholder='R$' />
                                            </div>
                                        </div>
                                    </th>
                                    <th className='th-tabela-compras-produto col-1'>
                                        <div className="span-input col-12">
                                            <div className="span-icon-input d-md-flex align-items-center">
                                                <div className="col-12 color-title title-table justify-content-md-center d-md-none">
                                                    <p className='txt-compras'>Substituição tributária</p>
                                                </div>
                                                <input className='input-form-produto col-10 mx-1 my-3' type="number" placeholder='R$' />
                                            </div>
                                        </div>
                                    </th>
                                    <th className='th-tabela-compras-produto col-1'>
                                        00,00
                                    </th>
                                </tr>
                            </React.Fragment>
                        )
                    })}

                </tbody>
            </table>
        </>

    )

}