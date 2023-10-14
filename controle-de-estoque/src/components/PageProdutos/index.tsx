import { useContext, useState } from 'react';
import './index.css';
import { ProdutoContext } from '../../Contexts/ProdutoContext';
import { ModalCreateProduct } from '../ModalCreateProduct';

export const PaginaProdutos = () => {

    const { produtos } = useContext(ProdutoContext);

    const [classFormProduto, setClassFormProduto] = useState('div-form-produtos-none');

    const openForm = () => {
        setClassFormProduto('div-form-produtos');
    }

    const closeForm = () => {
        setClassFormProduto('div-form-produtos-none');
    }

    return (
        <>

            <ModalCreateProduct />

            <div className="paginaProdutos">

                <div className="icon-produtos">

                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="30" height="30" viewBox="0 0 512.000000 512.000000"
                        preserveAspectRatio="xMidYMid meet">

                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                            fill="#757575" stroke="none">
                            <path d="M1389 4392 c-536 -224 -988 -415 -1002 -425 -15 -9 -36 -35 -47 -57
                                -20 -39 -20 -56 -20 -1269 0 -847 3 -1238 11 -1258 6 -15 20 -39 32 -52 12
                                -13 466 -245 1010 -517 763 -382 996 -494 1025 -494 28 -1 115 38 374 167
                                l337 167 63 -60 c276 -263 647 -342 1001 -214 128 47 238 119 347 230 178 180
                                272 393 274 627 1 110 -7 132 -68 177 -39 29 -133 29 -172 0 -54 -40 -66 -67
                                -75 -166 -17 -179 -73 -302 -195 -423 -305 -305 -819 -219 -1014 170 -124 246
                                -78 537 115 730 119 119 246 177 419 193 104 10 130 22 170 76 29 39 29 133 0
                                172 -45 61 -67 69 -177 68 -235 -2 -452 -98 -633 -278 -99 -100 -166 -200
                                -213 -317 -53 -132 -65 -199 -65 -359 -1 -146 0 -150 50 -327 5 -20 -11 -30
                                -185 -117 l-191 -96 0 1097 1 1098 797 331 797 331 5 -708 c5 -695 5 -708 26
                                -735 39 -53 71 -69 134 -69 63 0 95 16 134 69 21 27 21 37 24 864 3 927 5 896
                                -61 946 -51 38 -1977 836 -2018 836 -22 0 -383 -146 -1010 -408z m1764 -239
                                c405 -169 737 -310 737 -313 0 -8 -1471 -620 -1490 -620 -19 0 -1490 612
                                -1490 620 0 9 1462 618 1485 619 11 1 352 -137 758 -306z m-1695 -893 l782
                                -325 0 -1098 0 -1097 -800 400 -800 400 0 1030 c0 998 1 1029 19 1022 10 -4
                                370 -153 799 -332z"/>
                            <path d="M4420 1910 c-14 -6 -150 -135 -302 -288 l-278 -276 -122 121 c-132
                                130 -156 143 -235 128 -49 -9 -109 -69 -118 -118 -16 -85 -9 -97 203 -309 167
                                -167 203 -198 234 -203 91 -17 84 -22 465 358 251 250 356 361 364 385 22 68
                                -2 140 -63 185 -31 23 -111 32 -148 17z"/>
                        </g>
                    </svg>

                    <h2 className="title-produtos">Produtos</h2>

                </div>

                <div className="menu-produtos">
                    <div className="search">
                        <input type="text" className='input-search' placeholder='Qual produto você procura ?' />
                        <button className='btn-search'>
                            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                width="20" height="20" viewBox="0 0 512.000000 512.000000"
                                preserveAspectRatio="xMidYMid meet">

                                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                    fill="#696666" stroke="none">
                                    <path d="M1780 5105 c-444 -56 -864 -263 -1183 -582 -604 -603 -766 -1518
                                        -406 -2281 297 -631 891 -1067 1572 -1157 506 -66 1023 64 1437 361 49 35 93
                                        64 97 64 4 0 339 -331 743 -734 775 -775 776 -775 865 -776 44 0 131 36 157
                                        66 29 33 58 107 58 149 0 89 -1 90 -776 865 -403 404 -734 738 -734 742 0 4
                                        29 48 65 99 248 351 374 742 375 1166 0 548 -210 1055 -597 1440 -306 304
                                        -682 496 -1113 568 -136 23 -418 28 -560 10z m480 -430 c456 -74 845 -320
                                        1092 -692 184 -277 269 -554 270 -883 0 -159 -11 -255 -47 -400 -141 -563
                                        -592 -1014 -1155 -1155 -145 -36 -241 -47 -400 -47 -329 1 -606 86 -883 270
                                        -441 293 -707 790 -707 1325 0 268 55 494 180 736 202 391 562 682 995 807
                                        183 52 466 69 655 39z"/>
                                </g>
                            </svg>
                        </button>
                    </div>
                    <div className="itens-menu-produto">

                        <button className='btn-adc-produto' onClick={openForm}>
                            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                width="20" height="20" viewBox="0 0 512.000000 512.000000"
                                preserveAspectRatio="xMidYMid meet">

                                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                    fill="#ffffff" stroke="none">
                                    <path d="M2471 5103 c-24 -9 -63 -35 -86 -58 -80 -79 -75 -8 -75 -1187 l0
                                        -1048 -1048 0 c-1179 0 -1108 4 -1187 -75 -98 -98 -98 -252 0 -350 79 -79 8
                                        -75 1187 -75 l1048 0 0 -1048 c0 -1179 -4 -1108 75 -1187 98 -98 252 -98 350
                                        0 79 79 75 8 75 1187 l0 1048 1048 0 c1179 0 1108 -4 1187 75 98 98 98 252 0
                                        350 -79 79 -8 75 -1187 75 l-1048 0 0 1048 c0 1179 4 1108 -75 1187 -69 70
                                        -169 91 -264 58z"/>
                                </g>
                            </svg>

                            <p className='text-btn-adc-produto'>Produto</p>

                        </button>

                    </div>
                </div>

                <div className="div-tabela-produtos">

                    <table className="table table-striped">
                        <thead className="">
                            <tr>
                                <th scope="col" className='cor'>Cód</th>
                                <th scope="col" className='cor'>Produto</th>
                                <th scope="col" className='cor'>Categoria</th>
                                <th scope="col" className='cor'>Preço</th>
                                <th scope="col" className='cor'>Estoque</th>
                                <th scope="col" className='cor'>Entrada</th>
                                <th scope="col" className='cor'>Saída</th>
                                <th scope="col" className='cor'>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {produtos.map((produto) => {
                                return (
                                    <tr key={produto.id}>
                                        <th className='cor'>{produto.id}</th>
                                        <td className='cor'>{produto.nome}</td>
                                        <td className='cor'>{produto.categoria}</td>
                                        <td className='cor'>{produto.preco}</td>
                                        <td className='cor'>{produto.quantidade}</td>
                                        <td className='cor'>{produto.entrada}</td>
                                        <td className='cor'>{produto.saida}</td>
                                        <td className='cor'>{produto.total}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>

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
                                        <div className="col-8 p-0 mt-2">
                                            <div className="span-input">
                                                <span className='px-4'>Nome</span>
                                                <input className='input-form-produto col-8' type="text" />
                                            </div>
                                        </div>
                                        <div className="col-4 p-0 mt-2">
                                            <div className="span-input">
                                                <span className='px-3'>Código Próprio</span>
                                                <input className='input-form-produto col-12' type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row w-100 mb-4">
                                        <div className="col-6 p-0 mt-2">
                                            <div className="span-input mx-2">
                                                <span className='px-3'>Categoria</span>
                                                <div className="span-icon-input d-flex align-items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#605d5d" className="bi bi-tags col-1" viewBox="0 0 16 16">
                                                        <path d="M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z"/>
                                                        <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z"/>
                                                    </svg>
                                                    <input className='input-form-produto col-10 m-0' type="text" />

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6 p-0 mt-2">
                                            <div className="span-input">
                                                <span className='px-3'>Palavras chave</span>
                                                <div className="span-icon-input d-flex align-items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#606d5d" className="bi bi-key col-1" viewBox="0 0 16 16">
                                                        <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"/>
                                                        <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                    <input className='input-form-produto col-11 m-0' type="text" />
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
                                                        <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
                                                    </svg>
                                                    <input className='input-form-produto col-7 m-0' type="text" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4 p-0 mt-2">
                                            <div className="span-input">
                                                <span className='px-3'>Preço de venda</span>
                                                <div className="span-icon-input d-flex align-items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#605d5d" className="bi bi-currency-dollar col-1" viewBox="0 0 16 16">
                                                        <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
                                                    </svg>
                                                    <input className='input-form-produto col-7 m-0' type="text" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4 p-0 mt-2">
                                            <div className="span-input m-0">
                                                <span className=''>Margem de contribuição</span>
                                                <div className="span-icon-input m-0 d-flex align-items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#605d5d" className="bi bi-currency-dollar col-1" viewBox="0 0 16 16">
                                                        <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
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
                                                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                                                    </svg>
                                                    <input className='input-form-produto col-10 m-0' type="text" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6 p-0 mt-2">
                                            <div className="span-input">
                                                <span className='px-4'>Estoque mínimo</span>
                                                    <div className="span-icon-input d-flex align-items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#605d5d" className="bi bi-list col-1" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                                                    </svg>
                                                    <input className='input-form-produto col-10 m-0' type="text" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container d-flex justify-content-end col-10 mt-2">
                                <button className='btn-cadastrar-produto'>Salvar</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}