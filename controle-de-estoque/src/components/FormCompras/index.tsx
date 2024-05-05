import { useContext, useEffect, useState } from 'react';
import { Tabela_produtos } from '../Tabela_produtos';
import './index.css';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Popup_create_fornecedor } from '../Popup_create_fornecedor';
import { FornecedorContext } from '../../Contexts/FornecedorContext';
import IFornecedor from '../../types/Fornecedor';
import IProduto from '../../types/Produto';

interface Props {
    classFormCompras: string,
    setClassFormCompras: React.Dispatch<React.SetStateAction<string>>,
}

const schema = yup.object({
    fornecedor: yup.string().required('Campo obrigatório'),
    date: yup.string().max(10, 'Formato de data inválido +').min(10, 'Formato de data inválido -').required('Campo obrigatório'),
    numero_da_nota: yup.string(),
    palavra_chave: yup.string(),
});

export const FormCompras = ({ classFormCompras, setClassFormCompras }: Props) => {

    const [renderPopup, setRenderPopup] = useState(false);
    const [itemDigitado, setItemDigitado] = useState('');
    const { fornecedores, pegar_fornecedores } = useContext(FornecedorContext);
    const [itensPopup, setItensPopup] = useState<IFornecedor[] | IProduto[]>([]);

    const closeFormVendas = () => {
        setClassFormCompras('div-form-compras-none');
    }

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema)
    })

    const delay_fechar_popup = () => { // função de delay pro click funcionar quando desfocar input e fechar popup

        setTimeout(() => {
            setRenderPopup(false)
        }, 200)

    }

    useEffect(() => {

        pegar_fornecedores();

    }, [])

    useEffect(() => {

        setItemDigitado(watch('fornecedor'));

    }, [watch('fornecedor')]);

    return (

        <>
            <div className={classFormCompras}>

                <div className="head-form-vendas d-flex justify-content-between align-items-center py-3">
                    <h6 className='titulo-form-vendas px-4 text-white'>Nova Compra</h6>

                    <svg xmlns="http://www.w3.org/2000/svg" onClick={closeFormVendas} width="20" height="20" fill="#ffff" className="bi bi-x-lg mx-4" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                    </svg>

                </div>

                <form action="" onSubmit={handleSubmit((data) => { console.log(data) })}>

                    <div className="div-form-body mt-4 container d-flex justify-content-center align-items-center">
                        <div className="col-11 bloco d-flex py-4">

                            <div className="span-input col-10">
                                <span className='px-3'>Nome do Fornecedor</span>
                                <div className="span-icon-input d-flex align-items-center m-0 px-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#605d5d" className="bi bi-person-fill " viewBox="0 0 16 16">
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                    </svg>
                                    <div className="container position-relative">
                                        <input
                                            className='input-form-produto col-12 m-0'
                                            type="text"
                                            {...register('fornecedor')}
                                            onFocus={() => {
                                                setRenderPopup(true)
                                            }}
                                            onBlur={() => {
                                                delay_fechar_popup();
                                            }}
                                        />
                                        {/* dentro de popup_create e feito o cadastro desse input */}
                                        <Popup_create_fornecedor
                                            renderPopup={renderPopup}
                                            itemDigitado={itemDigitado}
                                            Nfunc={1}
                                            setValue={setValue}
                                            itensPopup={itensPopup}
                                            setItensPopup={setItensPopup}
                                        />
                                        {errors.fornecedor && <p className="m-0 text-danger mt-1 texto-erro-cadastro">{errors.fornecedor.message}</p>}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="comprasDados d-flex justify-content-center align-items-center div-form-body mt-4 container">
                        <div className="col-11 d-flex py-4">
                            <div className="col-6 bloco">
                                <h6 className='color-title px-4 pt-3'>Dados da Compra</h6>
                                <div className="input-icon-form">
                                    <div className="span-input mx-2 my-3">
                                        <span className='px-3'>Data da compra</span>
                                        <div className="span-icon-input d-flex align-items-center m-0 px-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#605d5d" className="bi bi-calendar4-week" viewBox="0 0 16 16">
                                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z" />
                                                <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-2 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
                                            </svg>
                                            <input
                                                className='input-form-produto col-10 m-0 mx-2 color-title'
                                                type="date"
                                                {...register("date")}
                                            />
                                        </div>
                                        {errors.date && <p className="m-0 text-danger mt-1 texto-erro-cadastro text-center">{errors.date.message}</p>}
                                    </div>
                                </div>
                                <div className="input-icon-form">
                                    <div className="span-input mx-2 my-3">
                                        <span className='px-3'>Número da nota</span>
                                        <div className="span-icon-input d-flex align-items-center m-0 px-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-list-ol" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5" />
                                                <path d="M1.713 11.865v-.474H2c.217 0 .363-.137.363-.317 0-.185-.158-.31-.361-.31-.223 0-.367.152-.373.31h-.59c.016-.467.373-.787.986-.787.588-.002.954.291.957.703a.595.595 0 0 1-.492.594v.033a.615.615 0 0 1 .569.631c.003.533-.502.8-1.051.8-.656 0-1-.37-1.008-.794h.582c.008.178.186.306.422.309.254 0 .424-.145.422-.35-.002-.195-.155-.348-.414-.348h-.3zm-.004-4.699h-.604v-.035c0-.408.295-.844.958-.844.583 0 .96.326.96.756 0 .389-.257.617-.476.848l-.537.572v.03h1.054V9H1.143v-.395l.957-.99c.138-.142.293-.304.293-.508 0-.18-.147-.32-.342-.32a.33.33 0 0 0-.342.338zM2.564 5h-.635V2.924h-.031l-.598.42v-.567l.629-.443h.635z" />
                                            </svg>
                                            <input
                                                className='input-form-produto col-10 m-0 mx-2'
                                                type="text"
                                                {...register('numero_da_nota')}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="input-icon-form">
                                    <div className="span-input mx-2 mt-2 mb-4">
                                        <span className='px-3'>Palavra Chave</span>
                                        <div className="span-icon-input d-flex align-items-center m-0 px-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#606d5d" className="bi bi-key col-1" viewBox="0 0 16 16">
                                                <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z" />
                                                <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                            </svg>
                                            <input
                                                className='input-form-produto col-10 m-0 mx-2'
                                                type="text"
                                                {...register('palavra_chave')}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="div-form-body mt-4 container d-flex justify-content-center align-items-center">
                        <div className="col-11 bloco pt-2">
                            <div className="title-row mb-3">
                                <h6 className='px-3 color-title'>Produtos</h6>
                            </div>
                            <Tabela_produtos />
                            <div className="footer-row d-flex align-items-center justify-content-between py-3">
                                <div className="title-row ">
                                    <h6 className='px-3 color-title m-0'>Total</h6>
                                </div>
                                <div className="title-row ">
                                    <h6 className='px-3 color-title m-0'>0</h6>
                                </div>
                                <div className="title-row ">
                                    <h6 className='px-3 color-title m-0'>R$ 0,00</h6>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="container d-flex justify-content-end col-11 mt-2">
                        <button className='btn-cadastrar-produto'>Salvar</button>
                    </div>
                </form>
            </div>
        </>

    )
}