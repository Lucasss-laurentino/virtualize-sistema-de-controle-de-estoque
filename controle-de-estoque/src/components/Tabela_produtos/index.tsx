import './index.css';

export const Tabela_produtos = () => {

    return (

        <>

            <div className="header-row d-md-flex pl-3 d-sm-none">
                <div className="col-3 color-title title-table pad "><p className='p-title w-100 text-center'>Nome do produto</p></div>
                <div className="col-2 color-title title-table justify-content-center"><p className='p-title'>Custo unitário</p></div>
                <div className="col-1 color-title title-table justify-content-center"><p className='p-title'>Quant.</p></div>
                <div className="col-1 color-title title-table justify-content-center"><p className='p-title'>Desconto</p></div>
                <div className="col-2 color-title title-table justify-content-center"><p className='p-title'>Outros custos</p></div>
                <div className="col-1 color-title title-table justify-content-center"><p className='p-title'>Custos externos</p></div>
                <div className="col-1 color-title title-table justify-content-center"><p className='p-title'>Total</p></div>
            </div>
            <div className="body-row d-md-flex pl-3">
                <div className="span-input col-12 col-md-3">
                    <div className="span-icon-input d-md-flex align-items-center">
                        <div className="col-12 color-title title-table justify-content-md-center d-md-none">
                            <p className='txt-compras'>Nome do produto</p>
                        </div>
                        <input className='col-10 col-md-11 input-form-produto mx-1 my-3' type="text" placeholder='' />
                    </div>
                </div>
                <div className="span-input col-12 col-md-2">
                    <div className="span-icon-input d-md-flex align-items-center">
                        <div className="col-12 color-title title-table justify-content-md-center d-md-none">
                            <p className='txt-compras'>Custo unitário</p>
                        </div>
                        <input className='col-10 col-md-10 input-form-produto mx-1 my-3' type="number" placeholder='R$' />
                    </div>
                </div>
                <div className="span-input col-12 col-md-1">
                    <div className="span-icon-input d-md-flex align-items-center">
                        <div className="col-12 color-title title-table justify-content-md-center d-md-none">
                            <p className='txt-compras'>Quantidade</p>
                        </div>
                        <input className='input-form-produto col-10 mx-1 my-3' type="number" placeholder='R$'/>
                    </div>
                </div>
                <div className="span-input col-12 col-md-1">
                    <div className="span-icon-input d-md-flex align-items-center">
                        <div className="col-12 color-title title-table justify-content-md-center d-md-none">
                            <p className='txt-compras'>Desconto</p>
                        </div>
                        <input className='input-form-produto col-10 mx-1 my-3' type="number" placeholder='R$'/>
                    </div>
                </div>
                <div className="span-input col-12 col-md-2">
                    <div className="span-icon-input d-md-flex align-items-center">
                        <div className="col-12 color-title title-table justify-content-md-center d-md-none">
                            <p className='txt-compras'>Outros custos</p>
                        </div>
                        <input className='input-form-produto col-10 mx-1 my-3' type="number" placeholder='R$'/>
                    </div>
                </div>
                <div className="span-input col-12 col-md-1">
                    <div className="span-icon-input d-md-flex align-items-center">
                        <div className="col-12 color-title title-table justify-content-md-center d-md-none">
                            <p className='txt-compras'>Custos externos</p>
                        </div>
                        <input className='input-form-produto col-10 mx-1 my-3' type="number" placeholder='R$'/>
                    </div>
                </div>

                <div className="col-1 color-title title-table pad">
                    <p className='m-0 color-title'>R$ 0.00</p>
                </div>
                <div className="col-1 color-title pad title-table">
                    <button className='btn-trash '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#ffff" className="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                        </svg>
                    </button>
                </div>
            </div>

        </>

    )

}