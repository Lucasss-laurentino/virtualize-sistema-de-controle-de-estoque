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
            quantidade: yup.number().required(),
            desconto: yup.string().required(),
            outros_custos: yup.string().required(),
            custos_externos: yup.string().required(),
            ipi: yup.string().required(),
            substituicao_tributaria: yup.string().required(),

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
    const [total, setTotal] = useState('0,00');

    const custo_unitario_ = useState(0);
    const desconto_ = useState(0);
    const outros_custos_ = useState(0);
    const custos_externos_ = useState(0);
    const ipi_ = useState(0);
    const substituicao_tributaria_ = useState(0);
    const quantidade_ = useState(0);

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
                custo_unitario: '0,00',
                quantidade: 0,
                desconto: '0,00',
                outros_custos: '0,00',
                custos_externos: '0,00',
                ipi: '0,00',
                substituicao_tributaria: '0,00',
            }]
        }
    })

    const { fields, append } = useFieldArray({
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

        let texto = watch(`produto.${indexState !== null ? indexState : 0}.nome_produto`);
        setItemDigitado(texto !== undefined ? texto : '');

        // custo unitario
        const custo_unitario = watch(`produto.${indexState !== null ? indexState : 0}.custo_unitario`).replace(/\D/g, '');
        setValue(`produto.${indexState !== null ? indexState : 0}.custo_unitario`, input_mascara.format(parseInt(custo_unitario) / 100));

        // desconto
        const desconto = watch(`produto.${indexState !== null ? indexState : 0}.desconto`).replace(/\D/g, '');
        setValue(`produto.${indexState !== null ? indexState : 0}.desconto`, input_mascara.format(parseInt(desconto) / 100));

        // outros custos
        const outros_custos = watch(`produto.${indexState !== null ? indexState : 0}.outros_custos`).replace(/\D/g, '');
        setValue(`produto.${indexState !== null ? indexState : 0}.outros_custos`, input_mascara.format(parseInt(outros_custos) / 100));

        // custos externos
        const custos_externos = watch(`produto.${indexState !== null ? indexState : 0}.custos_externos`).replace(/\D/g, '');
        setValue(`produto.${indexState !== null ? indexState : 0}.custos_externos`, input_mascara.format(parseInt(custos_externos) / 100));

        // ipi
        const ipi = watch(`produto.${indexState !== null ? indexState : 0}.ipi`).replace(/\D/g, '');
        setValue(`produto.${indexState !== null ? indexState : 0}.ipi`, input_mascara.format(parseInt(ipi) / 100));

        // Substituição tributaria
        const substituicao_tributaria = watch(`produto.${indexState !== null ? indexState : 0}.substituicao_tributaria`).replace(/\D/g, '');
        setValue(`produto.${indexState !== null ? indexState : 0}.substituicao_tributaria`, input_mascara.format(parseInt(substituicao_tributaria) / 100));

        const quantidade = watch(`produto.${indexState !== null ? indexState : 0}.quantidade`);

        const elemento = document.getElementById(`produto.${indexState !== null ? indexState : 0}.total`);

        if(elemento !== null && elemento !== undefined) {
            
            elemento.innerHTML = input_mascara.format((
                parseInt(custo_unitario) * quantidade - parseInt(desconto) + parseInt(outros_custos) + parseInt(custos_externos) + parseInt(ipi) + parseInt(substituicao_tributaria)
            ) / 100)
        
        }

    },
        [
            watch(`produto.${indexState !== null ? indexState : 0}.custo_unitario`),
            watch(`produto.${indexState !== null ? indexState : 0}.desconto`),
            watch(`produto.${indexState !== null ? indexState : 0}.outros_custos`),
            watch(`produto.${indexState !== null ? indexState : 0}.custos_externos`),
            watch(`produto.${indexState !== null ? indexState : 0}.ipi`),
            watch(`produto.${indexState !== null ? indexState : 0}.substituicao_tributaria`),
            watch(`produto.${indexState !== null ? indexState : 0}.quantidade`)
        ])

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
                                                    input_mascara={input_mascara}
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
                                                    onFocus={() => {
                                                        setIndexState(index)
                                                    }}
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
                                                <input
                                                    {...register(`produto.${index}.quantidade`, {
                                                        valueAsNumber: true
                                                    })}
                                                    className='input-form-produto col-10 mx-1 my-3'
                                                    type="number"
                                                    placeholder='R$'
                                                    onFocus={() => {
                                                        setIndexState(index)
                                                    }}

                                                />
                                            </div>
                                        </div>
                                    </th>

                                    <th className='th-tabela-compras-produto col-1'>
                                        <div className="span-input col-12">
                                            <div className="span-icon-input d-md-flex align-items-center">
                                                <div className="col-12 color-title title-table justify-content-md-center d-md-none">
                                                    <p className='txt-compras'>Desconto</p>
                                                </div>
                                                <input
                                                    {...register(`produto.${index}.desconto`)}
                                                    className='input-form-produto col-10 mx-1 my-3'
                                                    type="text"
                                                    placeholder='R$'
                                                    onFocus={() => {
                                                        setIndexState(index)
                                                    }}

                                                />
                                            </div>
                                        </div>
                                    </th>

                                    <th className='th-tabela-compras-produto col-1'>
                                        <div className="span-input col-12 ">
                                            <div className="span-icon-input d-md-flex align-items-center">
                                                <div className="col-12 color-title title-table justify-content-md-center d-md-none">
                                                    <p className='txt-compras'>Outros custos</p>
                                                </div>
                                                <input
                                                    {...register(`produto.${index}.outros_custos`)}
                                                    className='input-form-produto col-10 mx-1 my-3'
                                                    type="text"
                                                    placeholder='R$'
                                                    onFocus={() => {
                                                        setIndexState(index)
                                                    }}

                                                />
                                            </div>
                                        </div>
                                    </th>

                                    <th className='th-tabela-compras-produto col-1'>
                                        <div className="span-input col-12">
                                            <div className="span-icon-input d-md-flex align-items-center">
                                                <div className="col-12 color-title title-table justify-content-md-center d-md-none">
                                                    <p className='txt-compras'>Custos externos</p>
                                                </div>
                                                <input
                                                    {...register(`produto.${index}.custos_externos`)}
                                                    className='input-form-produto col-10 mx-1 my-3'
                                                    type="text"
                                                    placeholder='R$'
                                                    onFocus={() => {
                                                        setIndexState(index)
                                                    }}

                                                />
                                            </div>
                                        </div>
                                    </th>

                                    <th className='th-tabela-compras-produto col-1'>
                                        <div className="span-input col-12">
                                            <div className="span-icon-input d-md-flex align-items-center">
                                                <div className="col-12 color-title title-table justify-content-md-center d-md-none">
                                                    <p className='txt-compras'>IPI</p>
                                                </div>
                                                <input
                                                    {...register(`produto.${index}.ipi`)}
                                                    className='input-form-produto col-10 mx-1 my-3'
                                                    type="text"
                                                    placeholder='R$'
                                                    onFocus={() => {
                                                        setIndexState(index)
                                                    }}

                                                />
                                            </div>
                                        </div>
                                    </th>
                                    <th className='th-tabela-compras-produto col-1'>
                                        <div className="span-input col-12">
                                            <div className="span-icon-input d-md-flex align-items-center">
                                                <div className="col-12 color-title title-table justify-content-md-center d-md-none">
                                                    <p className='txt-compras'>Substituição tributária</p>
                                                </div>
                                                <input
                                                    {...register(`produto.${index}.substituicao_tributaria`)}
                                                    className='input-form-produto col-10 mx-1 my-3'
                                                    type="text"
                                                    placeholder='R$'
                                                    onFocus={() => {
                                                        setIndexState(index)
                                                    }}

                                                />
                                            </div>
                                        </div>
                                    </th>
                                    <th className='th-tabela-compras-produto col-1'>

                                        <p className='m-0' id={`produto.${index}.total`}>
                                            R$ 0,00
                                        </p>

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