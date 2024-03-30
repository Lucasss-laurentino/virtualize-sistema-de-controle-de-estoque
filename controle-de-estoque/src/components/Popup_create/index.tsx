import { useContext, useEffect, useState } from 'react';
import Categoria from '../../types/Categoria';
import IFornecedor from '../../types/Fornecedor';
import './index.css';
import { FornecedorContext } from '../../Contexts/FornecedorContext';

interface Props {
    renderPopup: boolean,
    itens: Categoria[] | IFornecedor[],
    itemDigitado: string,
    n_form: number,
}

export const Popup_create = ({renderPopup, itens, itemDigitado, n_form}: Props) => {

    const [itensPopup, setItensPopup] = useState<IFornecedor[] | Categoria[]>([]);

    const { criar_fornecedor } = useContext(FornecedorContext);

    useEffect(() => {

        const arrayItens: Categoria[] | IFornecedor[] = []

        itens?.filter(item => {
    
            if(item.nome.indexOf(itemDigitado) != -1 && item.nome.indexOf(itemDigitado) === 0){
                arrayItens.push(item);
            }

        })

        setItensPopup(arrayItens)

    }, [itemDigitado])

    return(

        <>

            {renderPopup &&
            
                <div className="container position-absolute p-0 hover-block" onMouseEnter={() => {

                }}>
                    <ul className="lista-item-digitado">
                        {itensPopup?.map((item) => {
                            return (

                                <li key={item.id} className='item-lista-categoria'>{item.nome}</li>

                            )
                        })}
                    </ul>
                    {itensPopup.length < 1 &&

                    <>
                        <div className="criar-item px-3 pt-2">
                            <div className="d-flex justify-content-start align-items-center hov" onClick={() => {

                                if(n_form === 1){ // de acordo com o numero de n_form, o sistema faz uma requisição pra cadastrar um item

                                    criar_fornecedor(itemDigitado)

                                }

                            }}>
                                <div className="svg px-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#605d5d" className="bi bi-plus-square" viewBox="0 0 16 16">
                                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                    </svg>
                                </div>
                                <div className="cadastrar-p m-0 px-1">Cadastrar</div>
                            </div>
                            <p className="m-0 px-2 py-1 texto-pequeno">toque para cadastrar '{itemDigitado}'</p>
                        </div>
                    </>
                    
                    
                    }
                </div>
            
            }

        </>

    )
}