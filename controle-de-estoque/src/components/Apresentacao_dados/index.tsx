import './index.css';

import Chart from 'react-apexcharts';

export const Apresentacao_dados = () => {

    const OptionsChartLine = {
        colors: ['#f46b10'],
        subtitle: {
            text: "Entradas e saídas ultimos 10 dias",
            offsetY: 0,
            offsetX: 8
        }
    }

    const SeriesChartLine = [{
        name: 'primeiro',
        data: [10,2,20,4,3,60,7,88,9, 1, 100]
    }]

    return (

        <>

            <div className='current_page'>
                <div className='title-current-page'>
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="40" height="40" viewBox="0 0 512.000000 512.000000"
                        preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                            fill="#000000" stroke="none">
                            <path d="M3624 5110 c-32 -13 -64 -59 -64 -91 0 -18 11 -41 29 -61 l29 -33
                                208 -5 209 -5 -134 -150 c-271 -304 -464 -487 -702 -664 -534 -400 -1152 -653
                                -1819 -745 -95 -13 -318 -31 -493 -39 -58 -3 -71 -7 -95 -30 -37 -38 -37 -96
                                0 -134 35 -35 92 -39 315 -24 653 45 1251 224 1793 536 423 243 751 517 1124
                                938 l131 148 5 -185 c5 -183 5 -186 31 -211 14 -14 41 -28 61 -31 30 -5 41 -1
                                69 24 l34 30 0 341 0 341 -28 27 -27 28 -328 2 c-180 1 -337 -2 -348 -7z"
                            />
                            <path d="M4024 3910 c-12 -4 -31 -21 -43 -36 l-21 -27 0 -1823 0 -1824 -200 0
                                -200 0 -2 1431 -3 1431 -33 29 -33 30 -335 -3 -336 -3 -29 -33 -29 -32 0
                                -1425 0 -1425 -200 0 -200 0 -2 1131 -3 1131 -33 29 -33 30 -335 -3 -336 -3
                                -29 -33 -29 -32 0 -1125 0 -1125 -200 0 -200 0 0 826 0 826 -34 34 -35 35
                                -335 -3 -336 -3 -27 -28 -28 -27 -3 -829 -2 -829 -71 -4 c-65 -3 -74 -6 -100
                                -36 -38 -42 -38 -82 0 -124 l29 -33 2336 -3 2336 -2 32 29 c27 24 33 36 33 71
                                0 35 -6 47 -33 71 -29 26 -40 29 -97 29 l-65 0 -2 1831 -3 1831 -33 29 -32 29
                                -323 -1 c-177 0 -332 -4 -343 -9z m536 -1950 l0 -1760 -200 0 -200 0 0 1760 0
                                1760 200 0 200 0 0 -1760z m-1200 -400 l0 -1360 -200 0 -200 0 0 1360 0 1360
                                200 0 200 0 0 -1360z m-1200 -300 l0 -1060 -200 0 -200 0 0 1060 0 1060 200 0
                                200 0 0 -1060z m-1200 -300 l0 -760 -200 0 -200 0 0 760 0 760 200 0 200 0 0
                                -760z"
                            />
                        </g>
                    </svg>
                    <p className='name-current-page'>Página Inicial</p>
                </div>
                <p className='deleted-text'>Visão geral do controle de estoque</p>

                <div className='div-grafico'>
                    <Chart id="teste" options={OptionsChartLine} series={SeriesChartLine} />                    
                </div>
            </div>
            
        </>

    );

}