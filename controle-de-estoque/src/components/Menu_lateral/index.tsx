import { useContext } from 'react';
import './index.css';
import { CurrentPageContext } from '../../Contexts/CurrentPageContext';
import { useNavigate } from 'react-router-dom';

export const Menu_lateral = () => {

    const { changePage } = useContext(CurrentPageContext);

    const navigate = useNavigate();

    return (
        <>
                <div className='menu-lateral'>
                    <div className="div-list-items-menu">
                        <ul className="list-menu">

                            <li className="items-menu" onClick={() => navigate('/')}>Página Inicial</li>

                            <li className='item-destacado'>Gerenciamento</li>

                            <li className='items-menu' onClick={() => navigate('/produtos')}>
                                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                    width="16" height="16" viewBox="0 0 512.000000 512.000000"
                                    preserveAspectRatio="xMidYMid meet">
                                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                        fill="#9b9898" stroke="none">
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
                                            370 -153 799 -332z"
                                        />
                                        <path d="M4420 1910 c-14 -6 -150 -135 -302 -288 l-278 -276 -122 121 c-132
                                            130 -156 143 -235 128 -49 -9 -109 -69 -118 -118 -16 -85 -9 -97 203 -309 167
                                            -167 203 -198 234 -203 91 -17 84 -22 465 358 251 250 356 361 364 385 22 68
                                            -2 140 -63 185 -31 23 -111 32 -148 17z"
                                        />
                                    </g>
                                </svg>
                                <p className='text-items-menu'>Produtos</p>
                            </li>

                            <li className='items-menu' onClick={() => changePage('2')}>
                                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                    width="20" height="20" viewBox="0 0 512.000000 512.000000"
                                    preserveAspectRatio="xMidYMid meet">
                                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                        fill="#9b9898" stroke="none">
                                        <path d="M4203 4785 c-127 -35 -253 -136 -307 -247 l-28 -57 -203 -3 c-223 -3
                                            -229 -5 -279 -72 -21 -27 -21 -37 -24 -857 l-2 -829 -160 0 -160 0 0 -160 0
                                            -160 160 0 160 0 2 -829 c3 -820 3 -830 24 -857 50 -67 56 -69 279 -72 l203
                                            -3 28 -57 c34 -71 132 -171 202 -206 194 -98 418 -62 565 93 186 195 180 491
                                            -12 674 -153 146 -364 177 -553 81 -70 -35 -168 -135 -202 -206 l-28 -58 -94
                                            0 -94 0 0 720 0 720 94 0 94 0 28 -57 c34 -72 132 -172 202 -207 195 -99 418
                                            -62 567 95 177 186 177 472 0 658 -149 157 -372 194 -567 95 -70 -35 -168
                                            -135 -202 -206 l-28 -58 -94 0 -94 0 0 720 0 720 94 0 94 0 28 -57 c34 -72
                                            132 -172 202 -207 28 -14 77 -33 109 -41 268 -70 546 120 586 401 48 330 -270
                                            615 -590 529z"
                                        />
                                        <path d="M1020 3605 c-300 -129 -561 -242 -579 -251 l-35 -16 598 -265 597
                                            -266 594 264 c327 145 591 267 587 271 -4 4 -259 115 -567 248 -375 162 -575
                                            244 -605 246 -41 4 -95 -17 -590 -231z"
                                        />
                                        <path d="M320 2545 c0 -704 -1 -695 51 -741 19 -18 351 -169 1097 -500 l52
                                            -24 -2 696 -3 695 -595 265 c-327 145 -596 264 -597 264 -2 0 -3 -295 -3 -655z"/>
                                        <path d="M2278 2933 l-598 -265 0 -694 0 -693 43 18 c377 162 1088 489 1110
                                            509 15 14 32 42 38 62 6 23 9 262 7 682 l-3 647 -597 -266z"
                                        />
                                    </g>
                                </svg>
                                <p className='text-items-menu'>Categorias</p>
                            </li>

                            <li className='item-destacado'>Movimentação</li>
                            <li className='items-menu' onClick={() => navigate('/compras')}>

                                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                    width="20" height="20" viewBox="0 0 512.000000 512.000000"
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
                                <p className='text-items-menu'>Compras</p>
                            </li>
                            <li className="items-menu" onClick={() => navigate('/vendas')}>

                                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                    width="16" height="16" viewBox="0 0 512.000000 512.000000"
                                    preserveAspectRatio="xMidYMid meet">

                                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                        fill="#9b9898" stroke="none">
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
                                <p className="text-items-menu">Vendas</p>

                            </li>
                            <li className='item-destacado'>Administração</li>
                            <li className='items-menu' onClick={() => changePage('5')}>

                                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                    width="16" height="16" viewBox="0 0 512.000000 512.000000"
                                    preserveAspectRatio="xMidYMid meet">

                                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                        fill="#9b9898" stroke="none">
                                        <path d="M2335 5105 c-273 -42 -517 -172 -708 -375 -210 -223 -319 -481 -334
                                            -790 -21 -432 191 -845 557 -1084 180 -118 353 -178 563 -195 389 -30 721 92
                                            989 365 262 267 379 596 347 974 -28 324 -171 603 -419 817 -196 168 -376 252
                                            -625 288 -120 17 -260 18 -370 0z m426 -314 c157 -40 275 -109 407 -236 172
                                            -163 259 -343 282 -576 27 -276 -58 -528 -245 -728 -116 -124 -287 -229 -432
                                            -266 -215 -54 -471 -31 -655 60 -251 124 -437 356 -505 630 -26 105 -23 342 6
                                            450 77 290 329 559 609 650 152 49 379 56 533 16z"
                                        />
                                        <path d="M1427 2639 c-153 -16 -311 -74 -436 -158 -312 -212 -514 -686 -561
                                            -1316 -26 -354 -5 -529 86 -712 50 -102 145 -214 242 -286 74 -54 198 -110
                                            307 -138 l90 -24 1400 0 1400 0 90 23 c316 83 537 296 616 597 41 155 36 525
                                            -12 817 -105 650 -371 1040 -792 1162 -96 28 -268 49 -319 39 -49 -9 -117 -45
                                            -271 -144 -166 -107 -192 -121 -316 -166 -146 -53 -255 -74 -390 -74 -140 0
                                            -248 20 -390 70 -134 48 -140 51 -350 184 -110 70 -192 115 -224 124 -56 14
                                            -56 14 -170 2z m260 -395 c188 -121 267 -160 432 -214 430 -141 869 -73 1283
                                            198 187 123 183 121 262 111 363 -46 590 -351 686 -924 39 -236 51 -565 25
                                            -690 -42 -201 -178 -343 -386 -402 -60 -17 -139 -18 -1434 -18 -1298 0 -1373
                                            1 -1435 18 -149 42 -278 144 -338 267 -52 106 -65 195 -57 410 7 217 17 318
                                            52 495 26 138 87 334 130 419 129 256 304 396 531 425 37 5 71 9 75 10 4 0 82
                                            -47 174 -105z"
                                        />
                                    </g>
                                </svg>

                                <p className='text-items-menu'>Usuários</p>

                            </li>
                            <li className='items-menu' onClick={() => changePage('6')}>

                                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                    width="16" height="16" viewBox="0 0 512.000000 512.000000"
                                    preserveAspectRatio="xMidYMid meet">

                                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                        fill="#9b9898" stroke="none">
                                        <path d="M1114 5111 c-97 -24 -186 -100 -232 -199 l-27 -57 -3 -1232 -2 -1233
                                            -271 0 c-204 0 -278 -3 -302 -14 -43 -17 -95 -78 -102 -118 -3 -18 -5 -393 -3
                                            -834 l3 -801 29 -37 c54 -71 76 -76 377 -76 l266 0 5 -123 c4 -105 9 -132 30
                                            -179 35 -75 94 -138 165 -174 l58 -29 1795 0 1795 0 47 22 c66 30 143 105 175
                                            172 l28 56 0 2005 0 2005 -28 51 c-38 68 -713 742 -777 775 l-45 24 -1475 2
                                            c-811 0 -1489 -2 -1506 -6z m2898 -383 c4 -202 6 -228 26 -278 45 -112 130
                                            -197 242 -242 50 -20 77 -22 278 -26 l222 -4 -2 -1948 -3 -1948 -31 -39 c-17
                                            -21 -46 -46 -65 -55 -32 -17 -137 -18 -1774 -18 -1667 0 -1742 1 -1780 19 -79
                                            36 -104 90 -105 228 l0 93 1053 2 1053 3 37 25 c20 13 45 41 56 61 21 36 21
                                            48 21 850 l0 814 -23 39 c-14 25 -39 48 -66 63 l-44 23 -1044 0 -1043 0 0
                                            1203 c1 1275 0 1247 47 1299 10 11 36 29 58 39 38 18 104 19 1462 19 l1421 0
                                            4 -222z m411 -140 l228 -233 -122 -3 c-155 -3 -210 11 -272 72 -62 60 -77 114
                                            -77 273 0 68 3 123 7 123 4 0 110 -105 236 -232z m-1353 -3138 l0 -770 -1365
                                            0 -1365 0 0 770 0 770 1365 0 1365 0 0 -770z"
                                        />
                                        <path d="M1396 4499 c-26 -21 -35 -65 -20 -104 18 -46 -2 -45 1099 -45 1101 0
                                            1081 -1 1099 45 13 35 6 76 -19 100 l-24 25 -1054 0 c-1051 0 -1054 0 -1081
                                            -21z"
                                        />
                                        <path d="M1430 4093 c-60 -22 -81 -100 -37 -141 l23 -22 1060 0 1061 0 21 23
                                            c31 33 29 87 -4 118 l-26 24 -1041 2 c-573 1 -1049 -1 -1057 -4z"
                                        />
                                        <path d="M1395 3645 c-17 -16 -25 -35 -25 -60 0 -25 8 -44 25 -60 l24 -25
                                            1480 0 1480 0 27 24 c39 33 39 89 0 122 l-27 24 -1480 0 -1480 0 -24 -25z"
                                        />
                                        <path d="M1396 3219 c-50 -39 -28 -128 36 -144 13 -3 683 -4 1490 -3 1453 3
                                            1468 3 1487 23 35 34 37 77 6 113 l-27 32 -1483 0 -1482 0 -27 -21z"
                                        />
                                        <path d="M1430 2813 c-60 -22 -81 -100 -37 -141 l23 -22 1483 0 c930 0 1489 4
                                            1500 10 31 16 46 65 30 101 -25 62 60 59 -1531 58 -799 0 -1460 -3 -1468 -6z"
                                        />
                                        <path d="M3545 2378 c-51 -29 -61 -93 -20 -133 l24 -25 415 0 415 0 27 24 c39
                                            33 39 89 0 122 l-27 24 -407 0 c-287 -1 -413 -4 -427 -12z"
                                        />
                                        <path d="M3525 1935 c-35 -34 -33 -78 5 -116 l29 -30 415 3 c400 3 416 4 435
                                            23 35 34 37 77 6 113 l-27 32 -419 0 -420 0 -24 -25z"
                                        />
                                        <path d="M3554 1530 c-55 -22 -70 -95 -29 -135 l24 -25 416 0 c247 0 424 4
                                            434 10 31 16 46 65 30 101 -23 57 -37 59 -466 58 -213 0 -398 -4 -409 -9z"
                                        />
                                        <path d="M3545 1098 c-51 -29 -61 -93 -20 -133 l24 -25 415 0 415 0 27 24 c39
                                            33 39 89 0 122 l-27 24 -407 0 c-287 -1 -413 -4 -427 -12z"
                                        />
                                        <path d="M3525 655 c-35 -34 -33 -78 5 -116 l29 -30 415 3 c400 3 416 4 435
                                            23 35 34 37 77 6 113 l-27 32 -419 0 -420 0 -24 -25z"
                                        />
                                        <path d="M624 1935 l-25 -25 3 -432 3 -433 23 -33 c47 -65 76 -72 307 -72 205
                                            0 206 0 230 25 31 30 33 83 6 116 -19 23 -23 24 -210 27 l-191 3 0 390 c0 399
                                            -2 417 -39 446 -28 21 -79 15 -107 -12z"
                                        />
                                        <path d="M1518 1947 c-101 -38 -167 -98 -211 -194 -21 -46 -22 -60 -22 -303 0
                                            -254 0 -255 26 -310 33 -70 99 -136 169 -169 46 -22 69 -26 145 -26 84 0 95 2
                                            153 34 70 38 119 89 154 160 22 45 23 54 23 311 0 256 -1 267 -23 312 -35 70
                                            -96 134 -159 164 -67 33 -194 43 -255 21z m205 -190 c62 -47 67 -70 67 -306 0
                                            -193 -2 -215 -20 -252 -48 -94 -176 -117 -257 -46 -59 52 -63 72 -63 299 0
                                            235 9 268 83 313 57 35 138 32 190 -8z"
                                        />
                                        <path d="M2353 1939 c-75 -29 -153 -104 -189 -181 l-29 -63 0 -245 0 -245 29
                                            -62 c33 -73 104 -144 174 -176 37 -17 66 -22 137 -22 78 0 97 4 146 28 102 50
                                            169 142 190 261 17 98 8 164 -25 193 -25 21 -36 23 -141 23 -104 0 -116 -2
                                            -139 -22 -38 -35 -39 -86 -1 -123 20 -21 34 -25 83 -25 l60 0 -7 -33 c-17 -74
                                            -73 -126 -145 -134 -86 -10 -162 41 -185 124 -13 46 -14 363 -1 417 17 76 73
                                            126 147 133 82 8 123 -17 186 -117 19 -30 29 -35 65 -38 34 -3 47 2 67 22 14
                                            14 25 37 25 51 0 75 -107 198 -206 234 -72 27 -170 27 -241 0z"
                                        />
                                    </g>
                                </svg>

                                <p className='text-items-menu'>Logs</p>

                            </li>
                        </ul>
                    </div>
                </div>

        </>
    );
}