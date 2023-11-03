import { createContext, useState } from "react";

type ValidarType = {

    nomeErro: string,
    validarNome: (nome: string) => void,
    validarNomeDaEmpresa: (nomeDaEmpresa: string) => void,
    nomeDaEmpresaErro: string,
    validarEmail: (email: string) => void,
    emailErro: string,
    validarSenha: (senha: string) => void,
    senhaErro: string,
    senha: string,
}

export const ValidarInputCadastroContext = createContext<ValidarType>(null!);

export const ValidarInputCadastroProvider = ({children}: {children: JSX.Element}) => {

     /* erros */

     const [nomeErro, setNomeErro] = useState('');
     const [emailErro, setEmailErro] = useState('');
     const [nomeDaEmpresaErro, setNomeDaEmpresaErro] = useState('');
     const [senhaErro, setSenhaErro] = useState('');
     const [senha, setSenha] = useState('')

    const validarNome = (nome: string) => {
        
        if(nome.length <= 2) {
            setNomeErro('* Preencha o campo nome')
        } else {
            setNomeErro('')
        }

    }

    const validarEmail = (email: string) => {
                
        if(email.length <= 1) {
            setEmailErro('* Preencha o campo email')
        } else {
            setEmailErro('');
        }
    
    }

    const validarNomeDaEmpresa = (nomeDaEmpresa: string) => {
                
        if(nomeDaEmpresa.length <= 1) {
            setNomeDaEmpresaErro('* Preencha o campo nome da empresa')
        } else {
            setNomeDaEmpresaErro('');
        }
    
    }

    const validarSenha = (senha: string) => {
                
        if(senha.length <= 1) {
            setSenhaErro('* Preencha o campo senha')
        } else {
            setSenhaErro('');
            setSenha(senha)
        }
    
    }

    return (
        <ValidarInputCadastroContext.Provider value={{validarNome, nomeErro, validarNomeDaEmpresa, nomeDaEmpresaErro, validarEmail, emailErro, validarSenha, senhaErro, senha}}>
            {children}
        </ValidarInputCadastroContext.Provider>
    )    


}

