import { useContext, useEffect, useState } from 'react';
import { FormCompras } from '../FormCompras';
import './index.css';
import { CategoriaContext } from '../../Contexts/CategoriaContext';
import { FornecedorContext } from '../../Contexts/FornecedorContext';

export const PageEntrada = () => {

    const [classFormCompras, setClassFormCompras] = useState('div-form-compras-none');

    //const { pegar_categorias } = useContext(CategoriaContext);

    useEffect(() => {
       // pegar_categorias()
    },[])


    return (
        <>
            <div className="position-relative">

            <div className="icon-produtos">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="40" height="40" viewBox="0 0 512.000000 512.000000"
                    preserveAspectRatio="xMidYMid meet">

                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                        fill="#757575" stroke="none">
                        <path d="M603 4299 c-17 -5 -41 -21 -52 -35 -20 -26 -21 -38 -21 -443 0 -460
                            -2 -449 64 -476 42 -18 78 -9 113 27 l28 29 3 350 3 349 1220 0 1219 0 0
                            -1240 0 -1240 -444 0 -444 0 -30 -25 c-35 -30 -45 -69 -27 -111 28 -67 -12
                            -64 733 -64 l674 0 29 29 c38 39 40 97 5 138 -24 27 -27 28 -153 33 l-128 5
                            -3 998 -2 997 419 0 419 0 341 -282 341 -282 0 -577 c0 -317 -3 -637 -6 -711
                            l-7 -136 -67 -4 c-76 -6 -114 -26 -129 -69 -15 -43 -3 -85 31 -114 28 -24 35
                            -25 163 -25 146 0 178 8 200 50 19 37 34 1607 16 1662 -10 32 -72 86 -399 358
                            -255 211 -399 324 -422 330 -20 6 -215 10 -467 10 l-433 0 0 195 c0 208 -5
                            232 -49 262 -24 17 -104 18 -1366 20 -801 1 -1353 -2 -1372 -8z"/>
                        <path d="M3644 3322 c-43 -35 -44 -42 -44 -516 l0 -456 29 -32 29 -33 453 -3
                            c321 -2 461 1 481 9 60 25 63 38 66 334 2 149 1 294 -3 324 -8 62 -11 65 -233
                            264 l-144 127 -306 0 c-276 0 -309 -2 -328 -18z m676 -298 l130 -116 0 -209 0
                            -209 -320 0 -320 0 0 325 0 325 190 0 190 0 130 -116z"/>
                        <path d="M473 3230 c-34 -20 -53 -66 -45 -107 7 -37 50 -71 95 -78 23 -3 326
                            -5 672 -3 693 3 659 0 691 66 18 39 7 87 -27 118 -20 18 -52 19 -688 22 -647
                            2 -667 2 -698 -18z"/>
                        <path d="M270 2763 c-23 -12 -39 -30 -48 -55 -13 -33 -12 -41 4 -75 11 -21 29
                            -43 41 -49 16 -7 235 -13 673 -18 583 -6 654 -5 684 9 54 26 75 91 46 144 -25
                            48 -25 48 -715 55 -610 6 -652 5 -685 -11z"/>
                        <path d="M63 2286 c-68 -31 -80 -121 -22 -170 l31 -26 659 0 c467 0 667 3 682
                            11 63 32 76 107 28 161 l-29 33 -659 2 c-546 2 -663 0 -690 -11z"/>
                        <path d="M594 1995 c-62 -26 -64 -36 -64 -288 l0 -229 29 -29 29 -29 191 0
                            c121 0 199 4 215 11 33 15 59 71 51 109 -3 16 -18 40 -32 54 -25 25 -30 26
                            -148 26 l-123 0 -3 160 -4 160 -30 29 c-37 36 -71 44 -111 26z"/>
                        <path d="M1513 1734 c-29 -8 -76 -28 -105 -45 -271 -158 -320 -513 -101 -732
                            93 -94 197 -137 333 -137 358 0 569 368 401 698 -29 56 -120 146 -179 176
                            -110 56 -238 70 -349 40z m221 -208 c51 -21 117 -86 139 -135 26 -59 26 -153
                            0 -212 -57 -129 -209 -187 -338 -130 -65 29 -102 64 -131 126 -63 133 -1 289
                            138 350 43 18 149 19 192 1z"/>
                        <path d="M4048 1731 c-126 -41 -229 -129 -285 -247 -126 -263 10 -562 296
                            -650 59 -18 193 -18 252 0 151 47 271 163 315 306 78 254 -70 529 -321 595
                            -78 20 -186 18 -257 -4z m253 -218 c194 -99 181 -386 -20 -470 -54 -23 -151
                            -20 -204 6 -64 31 -122 98 -141 162 -20 66 -20 82 0 148 44 150 223 225 365
                            154z"/>
                    </g>
                </svg>
                <h2 className="title-produtos">Compras</h2>
            </div>

            <div className="menu-produtos">
                <div className="search">
                    <button className="mesAtual">
                        Mês Atual
                    </button>

                    <button className='btn-search-avan'>
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                            width="20" height="20" viewBox="0 0 512.000000 512.000000"
                            preserveAspectRatio="xMidYMid meet">

                            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                fill="#fff" stroke="none">
                                <path d="M1780 5105 c-444 -56 -864 -263 -1183 -582 -604 -603 -766 -1518
                                    -406 -2281 297 -631 891 -1067 1572 -1157 506 -66 1023 64 1437 361 49 35 93
                                    64 97 64 4 0 339 -331 743 -734 775 -775 776 -775 865 -776 44 0 131 36 157
                                    66 29 33 58 107 58 149 0 89 -1 90 -776 865 -403 404 -734 738 -734 742 0 4
                                    29 48 65 99 248 351 374 742 375 1166 0 548 -210 1055 -597 1440 -306 304
                                    -682 496 -1113 568 -136 23 -418 28 -560 10z m480 -430 c456 -74 845 -320
                                    1092 -692 184 -277 269 -554 270 -883 0 -159 -11 -255 -47 -400 -141 -563
                                    -592 -1014 -1155 -1155 -145 -36 -241 -47 -400 -47 -329 1 -606 86 -883 270
                                    -441 293 -707 790 -707 1325 0 268 55 494 180 736 202 391 562 682 995 807
                                    183 52 466 69 655 39z"
                                />
                            </g>
                        </svg>
                    </button>
                </div>
                <div className="itens-menu-produto">

                    <button className='btn-adc-produto' onClick={() => setClassFormCompras('div-form-compras')}>
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

                        <p className='text-btn-adc-produto'>Compra</p>

                    </button>

                </div>
            </div>

            <div className="div-tabela-produtos">

                <table className="table table-striped">
                    <thead className="">
                        <tr>
                            <th scope="col" className='cor'>Cód</th>
                            <th scope="col" className='cor'>Fornecedor</th>
                            <th scope="col" className='cor'>Nota</th>
                            <th scope="col" className='cor'>Data</th>
                            <th scope="col" className='cor'>Situação</th>
                            <th scope="col" className='cor'>Total</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>

            {
            <FormCompras classFormCompras={classFormCompras} setClassFormCompras={setClassFormCompras} />
            }

            </div>

        </>
    );
}