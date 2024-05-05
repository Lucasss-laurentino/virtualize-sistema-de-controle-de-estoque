import { useContext, useEffect, useState } from 'react';
import './index.css';
import React from 'react';
import { ProdutoContext } from '../../Contexts/ProdutoContext';
import Produto from '../../types/Produto';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import IProduto from '../../types/Produto';

interface Props {
    classFormProduto: string,
    setClassFormProduto: React.Dispatch<React.SetStateAction<string>>,
}

const schema = yup.object({
    categoria: yup.string().required('Campo obrigatório'),
});

export const FormProduto = ({ classFormProduto, setClassFormProduto }: Props) => {

    const [nomeProduto, setNomeProduto] = useState('');
    const [codigoProprio, setCodigoProprio] = useState('');
    const [categoria, setCategoria] = useState('');
    const [palavraChave, setPalavraChave] = useState('');
    const [precoDeCusto, setPrecoDeCusto] = useState('');
    const [precoDeVenda, setPrecoDeVenda] = useState('');
    const [estoqueAtual, setEstoqueAtual] = useState('');
    const [estoqueMinimo, setEstoqueMinimo] = useState('');
    const [itemDigitado, setItemDigitado] = useState('');
    const [renderPopup, setRenderPopup] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema)
      })

    const [categorias, setCategorias] = useState([
        {
            id: '1',
            nome: 'categoria 1',
        },
        {
            id: '2',
            nome: 'ategoria 2',
        },
        {
            id: '3',
            nome: 'bategoria 3',
        },

    ])

    const { criarProduto } = useContext(ProdutoContext)

    useEffect(() => {
    
        setItemDigitado(watch('categoria'));
    
        }, [watch('categoria')])
    

    const closeForm = () => {
        setClassFormProduto('div-form-produtos-none');
    }

    const limparFormEcadastrar = () => {

        const produto: IProduto = {

            _id: '',
            nome: nomeProduto,
            codigo_proprio: codigoProprio,
            categoria,
            palavra_chave: palavraChave,
            preco_de_custo: precoDeCusto,
            preco_de_venda: precoDeVenda,
            estoque_atual: estoqueAtual,
            estoque_minimo: estoqueMinimo,
            total: '00,00'

        }

        criarProduto(produto);

        setNomeProduto('');
        setCodigoProprio('');
        setCategoria('');
        setPalavraChave('');
        setPrecoDeCusto('');
        setPrecoDeVenda('');
        setEstoqueAtual('');
        setEstoqueMinimo('');

    }

    return (
        <>
            <div className={classFormProduto}>

                <div className="head-form-produto">

                    <h6 className='title-novo-produto'>Novo produto</h6>

                    <svg onClick={closeForm} version="1.0" xmlns="http://www.w3.org/2000/svg" className='svg-close'
                        width="16" height="16" viewBox="0 0 512.000000 512.000000"
                        preserveAspectRatio="xMidYMid meet">

                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                            fill="#ffff" stroke="none">
                            <path d="M4580 4789 c-14 -5 -474 -458 -1022 -1007 l-998 -997 -997 997
                c-1085 1084 -1016 1021 -1110 1003 -49 -9 -109 -69 -118 -118 -18 -94 -81 -25
                1003 -1109 l997 -998 -1002 -1002 c-1087 -1089 -1026 -1021 -1009 -1114 9 -47
                73 -111 120 -120 93 -17 25 -78 1113 1009 l1003 1002 1002 -1002 c1090 -1089
                1021 -1026 1115 -1008 49 9 109 69 118 118 18 94 81 25 -1008 1114 l-1002
                1003 1002 1002 c1086 1087 1026 1021 1009 1113 -17 91 -127 149 -216 114z"/>
                        </g>
                    </svg>
                </div>

                <div className="body-form-produtos">
                    <form action="">
                        <div className="container d-flex justify-content-center w-100">
                            <div className="container col-10 mt-3 person-row-top-form-produtos">
                                <div className="row w-100">
                                    {/* nome */}
                                    <div className="col-8 p-0 mt-2">
                                        <div className="span-input">
                                            <span className='px-4'>Nome</span>
                                            <input className='input-form-produto col-8' value={nomeProduto} onChange={(valor) => setNomeProduto(valor.target.value)} type="text" />
                                        </div>
                                    </div>
                                    {/* codigo proprio */}
                                    <div className="col-4 p-0 mt-2">
                                        <div className="span-input">
                                            <span className='px-3'>Código Próprio</span>
                                            <input className='input-form-produto col-12' value={codigoProprio} onChange={(valor) => setCodigoProprio(valor.target.value)} type="text" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row w-100 mb-4">
                                    <div className="col-6 p-0 mt-2">
                                        <div className="span-input mx-2">
                                            <span className='px-3'>Categoria</span>
                                            <div className="span-icon-input d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#605d5d" className="bi bi-tags col-1" viewBox="0 0 16 16">
                                                    <path d="M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z" />
                                                    <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z" />
                                                </svg>
                                                <div className="container position-relative">
                                                    <input className='input-form-categoria col-12 m-0' type="text"
                                                    
                                                        onFocus={() => {
                                                            setRenderPopup(true)
                                                        }}  
                                                        {...register('categoria')}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 p-0 mt-2">
                                        <div className="span-input">
                                            <span className='px-3'>Palavras chave</span>
                                            <div className="span-icon-input d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#606d5d" className="bi bi-key col-1" viewBox="0 0 16 16">
                                                    <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z" />
                                                    <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                                </svg>
                                                <input className='input-form-produto col-11 m-0' value={palavraChave} onChange={(valor) => setPalavraChave(valor.target.value)} type="text" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container d-flex justify-content-center w-100">
                            <div className="container col-10 mt-3 person-row-top-form-produtos">
                                <h6 className='titulo-bloco2-form pt-3 px-2'>Valores unitários</h6>
                                <div className="row w-100 mb-4 justify-content-between">
                                    <div className="col-4 p-0 mt-2">
                                        <div className="span-input">
                                            <span className='px-3'>Preço de custo</span>
                                            <div className="span-icon-input d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#606d5d" className="bi bi-currency-dollar col-1" viewBox="0 0 16 16">
                                                    <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
                                                </svg>
                                                <input className='input-form-produto col-7 m-0' value={precoDeCusto} onChange={(valor) => setPrecoDeCusto(valor.target.value)} type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4 p-0 mt-2">
                                        <div className="span-input">
                                            <span className='px-3'>Preço de venda</span>
                                            <div className="span-icon-input d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#605d5d" className="bi bi-currency-dollar col-1" viewBox="0 0 16 16">
                                                    <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
                                                </svg>
                                                <input className='input-form-produto col-7 m-0' value={precoDeVenda} onChange={(valor) => setPrecoDeVenda(valor.target.value)} type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4 p-0 mt-2">
                                        <div className="span-input m-0">
                                            <span className=''>Margem de contribuição</span>
                                            <div className="span-icon-input m-0 d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#605d5d" className="bi bi-currency-dollar col-1" viewBox="0 0 16 16">
                                                    <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
                                                </svg>
                                                <input className='input-form-produto col-7 m-0' type="text" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container d-flex justify-content-center w-100">
                            <div className="container col-10 mt-3 person-row-top-form-produtos">
                                <h6 className='titulo-bloco2-form pt-3 px-2'>Estoque</h6>
                                <div className="row w-100 mb-4 justify-content-between">
                                    <div className="col-6 p-0 mt-2">
                                        <div className="span-input">
                                            <span className='px-4'>Estoque atual</span>
                                            <div className="span-icon-input d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#605d5d" className="bi bi-list col-1" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                                </svg>
                                                <input className='input-form-produto col-10 m-0' value={estoqueAtual} onChange={(valor) => setEstoqueAtual(valor.target.value)} type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 p-0 mt-2">
                                        <div className="span-input">
                                            <span className='px-4'>Estoque mínimo</span>
                                            <div className="span-icon-input d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#605d5d" className="bi bi-list col-1" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                                </svg>
                                                <input className='input-form-produto col-10 m-0' value={estoqueMinimo} onChange={(valor) => setEstoqueMinimo(valor.target.value)} type="text" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container d-flex justify-content-end col-10 mt-2">
                            <button type='button' className='btn-cadastrar-produto' onClick={() => limparFormEcadastrar()}>Salvar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )

}