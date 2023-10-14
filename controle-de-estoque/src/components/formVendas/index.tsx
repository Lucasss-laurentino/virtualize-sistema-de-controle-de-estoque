import { useState } from 'react';
import './index.css';

interface Props {
    classFormVendas: string,
    setClassFormVendas: React.Dispatch<React.SetStateAction<string>>,
}

export const FormVendas = ({classFormVendas, setClassFormVendas}: Props) => {

    const closeFormVendas = () => {
        setClassFormVendas('div-form-vendas-none');
    }

    return(
        <>

        <div className={classFormVendas}>

            <div className="head-form-vendas d-flex justify-content-between align-items-center py-3">
                <h6 className='titulo-form-vendas px-4 text-white'>Nova Venda</h6>

                <svg xmlns="http://www.w3.org/2000/svg" onClick={closeFormVendas} width="20" height="20" fill="#ffff" className="bi bi-x-lg mx-4" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>

            </div>

            <div className="div-form-body mt-4 container d-flex justify-content-center align-items-center">
                <div className="col-11 bloco d-flex">
                    <div className="item-form col-4 text-center my-3">
                        <span className='span-vendas'>Nome do cliente</span>
                        <input type="text" className='input-form-produto m-0'/>
                    </div>
                    <div className="item-form col-4 text-center my-3">
                        <span className='span-vendas'>Venda ou orçamento</span>
                        <input type="text" className='input-form-produto m-0'/>
                    </div>
                    <div className="item-form col-4 text-center my-3">
                        <span className='span-vendas'>Data</span>
                        <input type="date" className='input-form-produto m-0 input-data-vendas'/>
                    </div>
                </div>
            </div>

            <h6 className='mt-4 mb-3 d-flex justify-content-center'>Carrinho</h6>

            <div className="div-form-body mt-3 container d-flex justify-content-center align-items-center">
                <div className="col-11 bloco d-flex">
                    <div className="item-form col-4 text-center my-3">
                        <span className='span-vendas'>Produto</span>
                        <input type="text" className='input-form-produto m-0'/>
                    </div>
                    <div className="item-form col-2 text-center my-3">
                        <span className='span-vendas'>Preço da venda</span>
                        <input type="text" className='input-form-produto m-0'/>
                    </div>
                    <div className="item-form col-2 text-center my-3">
                        <span className='span-vendas'>Quantidade</span>
                        <input type="text" className='input-form-produto m-0'/>
                    </div>
                    <div className="item-form col-2 text-center my-3">
                        <span className='span-vendas'>Desconto</span>
                        <p className='span-vendas py-2'>R$ 0.00</p>
                    </div>
                    <div className="item-form col-2 text-center my-3">
                        <span className='span-vendas'>Total</span>
                        <p className='span-vendas py-2'>R$ 0.00</p>
                    </div>
                </div>
            </div>

            <div className="container d-flex justify-content-end col-11 mt-2">
                <button className='btn-cadastrar-produto'>Salvar</button>
            </div>

        </div>
        </>
    );
}