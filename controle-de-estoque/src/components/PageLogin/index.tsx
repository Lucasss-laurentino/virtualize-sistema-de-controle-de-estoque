import { useContext, useEffect, useState } from 'react';
import './index.css';
import { ValidarInputCadastroContext } from '../../Contexts/ValidarInputCadastroContext';
import { LoginContext } from '../../Contexts/LoginContext';


interface Props {
    toggle: boolean,
    setToggle: React.Dispatch<React.SetStateAction<boolean>>,
}

export const PageLogin = ({toggle, setToggle}: Props) => {

    const [nome, setNome] = useState('');

    const [email, setEmail] = useState('');

    const [nomeDaEmpresa, setNomeDaEmpresa] = useState('');

    const [senha, setSenha] = useState('');

    const [confirmarSenha, setConfirmarSenha] = useState('');

    const [emailLogin, setEmailLogin] = useState('');
    const [senhaLogin, setSenhaLogin] = useState('');


    const { validarNome, nomeErro, validarNomeDaEmpresa, nomeDaEmpresaErro, validarEmail, emailErro, validarSenha, senhaErro } = useContext(ValidarInputCadastroContext);

    const {  usuarioLogado, criarUsuario, login } = useContext(LoginContext) ;

    const closeLogin = () => {

        setToggle(false);
        setFormCadastro(false);

    }

    useEffect(() => {
    
        if(localStorage.getItem('token')){
            closeLogin()
        }

    }, [usuarioLogado])

    useEffect(() => {

        verificarInputs()

    }, [nome, email, nomeDaEmpresa, senha, confirmarSenha])


    const [formCadastro, setFormCadastro] = useState(false);

    const abrirFormCadastro = () => {
        setFormCadastro(true);
    }

    const fecharFormCadastro = () => {
        setFormCadastro(false);
    }

    const verificarInputs = () => {

        validarNome(nome);
        validarEmail(email);
        validarNomeDaEmpresa(nomeDaEmpresa);
        validarSenha(senha);

    }

    const confirmarCriarUsuario = () => {
        
        if(nomeErro == '' && emailErro == '' && nomeDaEmpresaErro == '' && senhaErro == ''){

            criarUsuario(nome, email, nomeDaEmpresa, senha);
    
        }

        setNome('');
        setEmail('');
        setNomeDaEmpresa('');
        setSenha('');
    
    }

    const limparElogar = () => {

        login(emailLogin, senhaLogin);

        setEmailLogin('');
        setSenhaLogin('');

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

                <div className={!formCadastro ? 'div-body-login-ativado' : ' div-body-login-desativado'}>  
                    <div className="row justify-content-center">
                        <div className="container">
                            <h5 className='py-3 px-4 title-produtos'>Login</h5>
                            <form action="" className='px-4'>
                                <input type="email" className='input-form-login m-0 my-2 col-12 py-1' placeholder='Email' name={emailLogin} onChange={(valor) => setEmailLogin(valor.target.value)}/>
                                <input type="text" className='input-form-login m-0 my-2 col-12 py-1' name={senhaLogin} onChange={(valor) => setSenhaLogin(valor.target.value)} placeholder='Senha' />
                                <button className="btn-form-login" type='button' onClick={() => limparElogar()}>Login</button>
                                <div className="d-flex justify-content-center mt-2">
                                    <a href="" className='d-block text-center py-2 link-form-login'>Esqueci minha senha</a>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <a href="#" className='py-2 link-form-login' onClick={() => abrirFormCadastro()}>Criar conta</a>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                    <div className="div-footer-form-login">
                        <div className="row w-100 justify-content-center align-items-center">
                            <div className="col-6 p-0">
                                <p className="m-0 text-center mt-2 text-header-footer">Faça login com: </p>
                            </div>
                        </div>
                        <div className="row w-100 justify-content-center align-items-center mt-2 pb-4">
                            <div className="google d-flex col-5">
                                <div className="icon-google w-100">
                                    <button className="btn-redes">
                                        <img src="../../../img/google.png" className='img-redes' alt="" />
                                        <p className='m-0 w-100 cor'>Google</p>
                                    </button>
                                </div>
                            </div>
                            <div className="facebook d-flex col-5">
                                <div className="icon-facebook w-100">
                                    <button className="btn-redes">
                                        <img src="../../../img/facebook.png" className='img-redes' alt="" />
                                        <p className='m-0 w-100 cor'>Facebook</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={ formCadastro ? "div-body-cadastro div-body-cadastro-ativado" : "div-body-cadastro d-none"}>  
                    <div className="row justify-content-center">
                        <div className="container">
                            <div className="top d-flex justify-content-between align-items-center">
                                <h5 className='py-3 px-4 title-produtos'>Cadastro</h5>

                                <div className="icon-fechar-form-cadastro" onClick={() => fecharFormCadastro()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg mx-4" viewBox="0 0 16 16">
                                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                                    </svg>
                                </div>
                            </div>
                            <form action="" className='px-4'>
                                <input type="text" className='input-form-login m-0 my-2 col-12 py-1' name={nome} onChange={(value) => setNome(value.target.value)} id="" placeholder='Nome' />
                                <p className="m-0 text-danger mt-1 texto-erro-cadastro">{nomeErro}</p>
                                <input type="email" className='input-form-login m-0 my-2 col-12 py-1' name={email} onChange={(value) => setEmail(value.target.value)}  placeholder='Email' />
                                <p className="m-0 text-danger mt-1 texto-erro-cadastro">{emailErro}</p>
                                <input type="text" className='input-form-login m-0 my-2 col-12 py-1' name={nomeDaEmpresa} onChange={(value) => setNomeDaEmpresa(value.target.value)} placeholder='Nome da sua empresa' />
                                <p className="m-0 text-danger mt-1 texto-erro-cadastro">{nomeDaEmpresaErro}</p>                                
                                <input type="password" className='input-form-login m-0 my-2 col-12 py-1' name={senha} onChange={(value) => setSenha(value.target.value)} placeholder='Senha' />
                                <p className="m-0 text-danger mt-1 texto-erro-cadastro">{senhaErro}</p>                                
                                <button className="btn-form-login mt-3" type='button' onClick={confirmarCriarUsuario}>Cadastrar</button>
                                <div className="d-flex justify-content-center my-3">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    ) 
}