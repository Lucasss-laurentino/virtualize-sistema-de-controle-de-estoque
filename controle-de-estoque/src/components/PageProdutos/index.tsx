import { useContext, useEffect, useState } from 'react';
import './index.css';
import { ProdutoContext } from '../../Contexts/ProdutoContext';
import { ModalCreateProduct } from '../ModalCreateProduct';
import { CategoriaContext } from '../../Contexts/CategoriaContext';
import Categoria from '../../types/Categoria';
import { FormProduto } from '../FormProdutos';

export const PaginaProdutos = () => {

    const { produtos } = useContext(ProdutoContext);

    const [classFormProduto, setClassFormProduto] = useState('div-form-produtos-none');

    const openForm = () => {
        setClassFormProduto('div-form-produtos');
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

                <FormProduto classFormProduto={classFormProduto} setClassFormProduto={setClassFormProduto}/>

            </div>
        </>
    )
}