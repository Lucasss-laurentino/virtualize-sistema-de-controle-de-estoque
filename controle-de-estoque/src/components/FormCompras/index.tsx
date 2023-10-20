import './index.css';

interface Props {
    classFormCompras: string,
    setClassFormCompras: React.Dispatch<React.SetStateAction<string>>,
}

export const FormCompras = ({ classFormCompras, setClassFormCompras }: Props) => {

    const closeFormVendas = () => {
        setClassFormCompras('div-form-compras-none');
    }

    return (

        <>
            <div className={classFormCompras}>

                <div className="head-form-vendas d-flex justify-content-between align-items-center py-3">
                    <h6 className='titulo-form-vendas px-4 text-white'>Nova Compra</h6>

                    <svg xmlns="http://www.w3.org/2000/svg" onClick={closeFormVendas} width="20" height="20" fill="#ffff" className="bi bi-x-lg mx-4" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                    </svg>

                </div>

                <form action="">
                    <div className="div-form-body mt-4 container d-flex justify-content-center align-items-center">
                        <div className="col-11 bloco d-flex py-4">
                            <div className="span-input col-10">
                                <span className='px-3'>Nome do Fornecedor</span>
                                <div className="span-icon-input d-flex align-items-center m-0 px-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#605d5d" className="bi bi-person-fill " viewBox="0 0 16 16">
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                    </svg>
                                    <input className='input-form-produto col-11 m-0 mx-2' type="text" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="comprasDados d-flex justify-content-center align-items-center div-form-body mt-4 container">
                        <div className="col-11 d-flex py-4">
                            <div className="col-6 bloco">
                                <h6 className='color-title px-4 pt-3'>Dados da Compra</h6>
                                <div className="input-icon-form">
                                    <div className="span-input mx-2 my-2">
                                        <span className='px-3'>Data</span>
                                        <div className="span-icon-input d-flex align-items-center m-0 px-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#605d5d" className="bi bi-calendar4-week" viewBox="0 0 16 16">
                                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z" />
                                                <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-2 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
                                            </svg>
                                            <input className='input-form-produto col-10 m-0 mx-2 color-title' type="date" />
                                        </div>
                                    </div>
                                </div>
                                <div className="input-icon-form">
                                    <div className="span-input mx-2 my-2">
                                        <span className='px-3'>Número da nota</span>
                                        <div className="span-icon-input d-flex align-items-center m-0 px-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="#605d5d" className="bi bi-list" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                            </svg>
                                            <input className='input-form-produto col-10 m-0 mx-2' type="text" />
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
                                            <input className='input-form-produto col-10 m-0 mx-2' type="text" />
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
                            <div className="header-row d-flex pl-3">
                                <div className="col-3 color-title title-table pad "><p className='p-title'>Nome do produto</p></div>
                                <div className="col-1 color-title title-table justify-content-center"><p className='p-title'>Custo unitário</p></div>
                                <div className="col-1 color-title title-table justify-content-center"><p className='p-title'>Quant.</p></div>
                                <div className="col-1 color-title title-table justify-content-center"><p className='p-title'>Desconto</p></div>
                                <div className="col-1 color-title title-table justify-content-center"><p className='p-title'>Outros custos</p></div>
                                <div className="col-1 color-title title-table justify-content-center"><p className='p-title'>Custos externos</p></div>
                                <div className="col-1 color-title title-table justify-content-center"><p className='p-title'>IPI</p></div>
                                <div className="col-1 color-title title-table justify-content-center"><p className='p-title'>Subst. Trib.</p></div>
                                <div className="col-1 color-title title-table justify-content-center"><p className='p-title'>Total</p></div>
                            </div>
                            <div className="body-row d-flex pl-3">
                                <div className="span-input col-3">
                                    <div className="span-icon-input d-flex align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box" viewBox="0 0 16 16">
                                            <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
                                        </svg>
                                        <input className='input-form-produto col-10 mx-1 my-3' type="text" placeholder='' />
                                    </div>
                                </div>
                                <div className="col-1 color-title title-table">
                                    <input className='input-form-produto col-10 mx-1 my-3' type="number" placeholder='R$' />
                                </div>
                                <div className="col-1 color-title title-table">
                                    <input className='input-form-produto col-10 mx-1 my-3' type="number" />
                                </div>
                                <div className="col-1 color-title title-table">
                                    <input className='input-form-produto col-10 mx-1 my-3' type="number"  placeholder='R$'/>
                                </div>
                                <div className="col-1 color-title title-table">
                                    <input className='input-form-produto col-10 mx-1 my-3' type="number" placeholder='R$' />
                                </div>
                                <div className="col-1 color-title title-table">
                                    <input className='input-form-produto col-10 mx-1 my-3' type="number" placeholder='R$' />
                                </div>
                                <div className="col-1 color-title title-table">
                                    <input className='input-form-produto col-10 mx-1 my-3' type="number" placeholder='R$' />
                                </div>
                                <div className="col-1 color-title title-table">
                                    <input className='input-form-produto col-10 mx-1 my-3' type="number" placeholder='R$' />
                                </div>
                                <div className="col-1 color-title title-table pad">
                                    <p className='m-0 color-title'>R$ 0.00</p>
                                </div>
                                <div className="col-1 color-title pad title-table">
                                    <button className='btn-trash '>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#ffff" className="bi bi-trash" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
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