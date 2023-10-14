import './index.css';
import { FormVendas } from '../formVendas';
import { useState } from 'react';

export const PageVendas = () => {

    const [classFormVendas, setClassFormVendas] = useState('div-form-vendas-none');

    const openFormVendas = () => {
        setClassFormVendas('div-form-vendas');
    }

    return (
        <>
            <div className="position-relative">

                <div className="icon-produtos">

                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="40" height="40" viewBox="0 0 512.000000 512.000000"
                        preserveAspectRatio="xMidYMid meet">

                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                            fill="#757575" stroke="none">
                            <path d="M310 4823 c-55 -38 -72 -91 -46 -145 29 -60 39 -62 281 -68 l219 -5
                                63 -260 c34 -143 62 -266 63 -272 0 -10 -81 -13 -371 -13 l-371 0 -34 -34
                                c-39 -39 -45 -86 -19 -136 32 -63 -8 -60 915 -60 933 0 887 3 916 -65 18 -44
                                18 -69 -1 -105 -31 -60 -33 -60 -495 -60 -476 0 -432 10 -405 -90 22 -83 25
                                -80 -70 -80 -103 0 -140 -15 -162 -67 -20 -48 -10 -92 28 -129 l30 -29 567 -5
                                c435 -4 572 -8 589 -18 48 -27 66 -98 38 -152 -31 -60 -35 -60 -480 -60 -459
                                0 -417 10 -390 -90 8 -30 15 -61 15 -67 0 -10 -98 -13 -457 -13 -272 0 -472
                                -4 -494 -10 -50 -14 -80 -50 -86 -103 -5 -41 -2 -48 30 -83 l35 -39 970 -5
                                c1054 -5 987 -1 1018 -61 18 -36 18 -73 -1 -109 -31 -60 -34 -60 -485 -60
                                -321 0 -410 -3 -410 -12 0 -7 9 -47 20 -88 10 -41 17 -76 15 -78 -2 -2 -22 -8
                                -46 -13 -75 -17 -152 -61 -212 -120 -178 -178 -178 -456 -1 -633 72 -72 155
                                -113 261 -128 l82 -12 -49 -28 c-62 -35 -142 -117 -179 -182 -90 -159 -85
                                -372 13 -521 182 -274 556 -315 784 -85 231 234 182 628 -99 789 l-54 31 1104
                                0 1104 0 -59 -38 c-274 -177 -314 -552 -84 -782 200 -200 513 -200 710 -1 230
                                233 190 606 -84 783 l-59 38 82 0 c127 0 181 33 181 112 0 48 -16 83 -49 105
                                -25 17 -122 18 -1698 23 l-1671 5 -43 30 c-112 79 -121 252 -18 340 18 15 44
                                32 58 38 19 9 424 13 1521 17 l1495 5 67 32 c82 39 155 108 191 183 30 61 447
                                1758 447 1817 0 26 -8 43 -34 69 l-34 34 -1916 0 -1916 0 -9 23 c-5 12 -43
                                168 -86 347 -42 178 -83 337 -91 352 -28 55 -48 58 -346 58 -241 0 -276 -2
                                -298 -17z m1446 -3791 c103 -53 154 -133 154 -241 -1 -119 -50 -200 -148 -248
                                -137 -67 -303 -11 -368 125 -41 84 -27 211 31 287 74 96 225 131 331 77z
                                m2594 12 c103 -30 190 -149 190 -259 0 -96 -69 -203 -158 -246 -66 -32 -168
                                -32 -234 0 -89 43 -158 150 -158 246 0 142 128 272 271 274 19 1 59 -6 89 -15z"/>
                        </g>
                    </svg>
                    <h2 className="title-produtos">Vendas</h2>

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
                                        183 52 466 69 655 39z"/>
                                </g>
                            </svg>
                        </button>
                    </div>
                    <div className="itens-menu-produto">

                        <button className='btn-adc-produto' onClick={openFormVendas}>
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

                            <p className='text-btn-adc-produto'>Venda</p>

                        </button>

                    </div>
                </div>

                <div className="div-tabela-produtos">

                        <table className="table table-striped">
                            <thead className="">
                                <tr>
                                    <th scope="col" className='cor'>Cód</th>
                                    <th scope="col" className='cor'>Cliente</th>
                                    <th scope="col" className='cor'>Vendedor</th>
                                    <th scope="col" className='cor'>Data</th>
                                    <th scope="col" className='cor'>Tipo</th>
                                    <th scope="col" className='cor'>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                </div>

                <FormVendas classFormVendas={classFormVendas} setClassFormVendas={setClassFormVendas}/>

            </div>

        </>
    );
}