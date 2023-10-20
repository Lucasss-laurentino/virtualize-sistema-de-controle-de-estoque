import './index.css';


interface Props {
    toggle: boolean,
    setToggle: React.Dispatch<React.SetStateAction<boolean>>,
}

export const PageLogin = ({toggle, setToggle}: Props) => {

    const closeLogin = () => {

        setToggle(false)

    }

    return (
        <>
        
        <div className={toggle ? 'page-login-components' : 'page-login-components-none' }>
            <div className="container">
                <div className="div-header-login d-flex justify-content-between align-items-end mx-0">
                    <div className="logo-login">
                        <img src="../../../img/logo-login.png" className='img-logo' alt="" />
                    </div>
                    <div className="list-nav-menu pb-2 col-9">
                        <ul className='d-flex w-100 align-items-end lista-config'>
                            <li className='item-lista-nav-login col-4'>
                                <p className="m-0 text-lista-nav-login">Seja representante</p>
                            </li>
                            <li className='item-lista-nav-login col-3'>
                                <p className="m-0 text-lista-nav-login">Funcionalidades</p>
                            </li>
                            <li className='item-lista-nav-login col-3'>
                                <p className="m-0 text-lista-nav-login">Contato</p>
                            </li>
                            <li className='item-lista-nav-login col-2'>
                                <p className="m-0 text-lista-nav-login">Sobre</p>
                            </li>
                        </ul>
                    </div>
                    <div className="close-login pb-2" onClick={() => closeLogin()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                        </svg>
                    </div>
                </div>

                <div className="div-body-login ">  
                    <div className="row justify-content-center">
                        <div className="container">
                            <h5 className='py-3 px-4 title-produtos'>Login</h5>
                            <form action="" className='px-4'>
                                <input type="text" className='input-form-produto m-0 my-2 col-12 py-1' name="" id="" />
                                <input type="text" className='input-form-produto m-0 my-2 col-12 py-1' />
                                <input type="text" className='input-form-produto m-0 my-2 col-12 py-1' name="" id="" />
                                <button className="btn-form-login">Login</button>
                                <div className="d-flex justify-content-center mt-2">
                                    <a href="" className='d-block text-center py-2'>Esqueci minha senha</a>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <a href="" className='py-2'>Criar conta</a>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="div-footer-form-login">
                        
                    </div>
                </div>
            </div>
        </div>
        
        </>
    ) 
}