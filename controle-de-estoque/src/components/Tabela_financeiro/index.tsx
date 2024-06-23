import './index.css';
import * as yup from 'yup';
import { useFieldArray, useForm } from 'react-hook-form';
import React, { SetStateAction, useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup
    .object()
    .shape({

        parcela: yup.array().of(

            yup.object().shape({
                parcela: yup.string().required(),
                valor: yup.string().required(),
                dataDePagamento: yup.string().required(),
                contaDeOrigem: yup.string().required(),
                palavraChave: yup.string().required(),
                status: yup.boolean().required(),
            })

        )

    })

export const Tabela_financeiro = () => {

    const {
        register,
        handleSubmit,
        watch,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            parcela: [
                {
                    parcela: '1/1',
                    valor: 'R$ 0,00',
                    dataDePagamento: '22/02/1996',
                    contaDeOrigem: 'Caixa interno',
                    palavraChave: '',
                    status: false
                }
            ]
        }
    })

    const { fields, append } = useFieldArray({
        name: 'parcela',
        control
    })

    return (
        <>

            <table className='tabela-compras-produto'>
                <thead>
                    <tr>
                        <th className='th-tabela-compras-produto col-1'>
                            Parcelas
                        </th>
                        <th className='th-tabela-compras-produto col-1'>
                            Valor
                        </th>
                        <th className='th-tabela-compras-produto col-2'>
                            Data do pagamento
                        </th>
                        <th className='th-tabela-compras-produto col-2'>
                            Conta de origem
                        </th>
                        <th className='th-tabela-compras-produto col-2'>
                            Palavras-chave
                        </th>
                        <th className='th-tabela-compras-produto col-2'>
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {fields.map((field, index) => {
                        return (
                            <React.Fragment key={field.id}>
                                <tr>
                                    <th className='th-tabela-compras-produto col-1 p-0'>
                                        <div className="span-input col-12">
                                            <div className="container position-relative">
                                                <input
                                                    className='col-12 input-form-financeiro-disabled'
                                                    type="text"
                                                    placeholder=''
                                                    {...register(`parcela.${index}.parcela`)}
                                                />
                                            </div>
                                        </div>
                                    </th>

                                    <th className='th-tabela-compras-produto col-1'>
                                        <div className="span-input col-12">
                                            <div className="span-icon-input d-md-flex align-items-center">
                                                <div className="col-12 color-title title-table justify-content-md-center d-md-none">
                                                    <p className='txt-compras'>Valor</p>
                                                </div>
                                                <input
                                                    {...register(`parcela.${index}.valor`)}
                                                    className='input-form-produto col-10 mx-1 my-3'
                                                    type="text"
                                                    placeholder='R$'
                                                />
                                            </div>
                                        </div>
                                    </th>

                                    <th className='th-tabela-compras-produto col-1'>
                                        <div className="span-input col-12 ">
                                            <div className="span-icon-input d-md-flex align-items-center">
                                                <div className="col-12 color-title title-table justify-content-md-center d-md-none">
                                                    <p className='txt-compras'>Data de pagamento</p>
                                                </div>
                                                <input
                                                    {...register(`parcela.${index}.dataDePagamento`)}
                                                    className='input-form-produto col-10 mx-1 my-3'
                                                    type="date"
                                                    placeholder='R$'
                                                />
                                            </div>
                                        </div>
                                    </th>

                                    <th className='th-tabela-compras-produto col-1'>
                                        <div className="span-input col-12">
                                            <div className="span-icon-input d-md-flex align-items-center">
                                                <div className="col-12 color-title title-table justify-content-md-center d-md-none">
                                                    <p className='txt-compras'>Conta de origem</p>
                                                </div>
                                                <input
                                                    {...register(`parcela.${index}.contaDeOrigem`)}
                                                    className='input-form-produto col-10 mx-1 my-3'
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
                                                    <p className='txt-compras'>Palavra-chave</p>
                                                </div>
                                                <input
                                                    {...register(`parcela.${index}.palavraChave`)}
                                                    className='input-form-produto col-10 mx-1 my-3'
                                                    type="text"
                                                />
                                            </div>
                                        </div>
                                    </th>
                                    <th className='th-tabela-compras-produto col-1'>
                                        <div className="span-input col-12">
                                            <div className="span-icon-input d-md-flex align-items-center">
                                                <div className="col-12 color-title title-table justify-content-md-center d-md-none">
                                                    <p className='txt-compras'>Status</p>
                                                </div>
                                                <input
                                                    {...register(`parcela.${index}.status`)}
                                                    className='input-form-produto col-10 mx-1 my-3'
                                                    type="text"
                                                    placeholder='R$'
                                                />
                                            </div>
                                        </div>
                                    </th>

                                </tr>
                            </React.Fragment>
                        )
                    })}

                </tbody>
            </table>

            <div className="footer-row d-flex align-items-center justify-content-between py-3">
                <div className="title-row ">
                    <h6 className='px-3 color-title m-0'>Total</h6>
                </div>
                <div className="title-row ">
                    <button className="btn btn-md btn-primary">Adicionar parcela</button>
                </div>

            </div>
        </>
    )

}

