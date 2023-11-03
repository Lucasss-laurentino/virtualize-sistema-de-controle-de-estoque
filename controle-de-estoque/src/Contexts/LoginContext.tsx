import { createContext, useState } from "react";
import { http } from "../http/http";

type LoginType = {
    usuarioLogado: boolean,
    criarUsuario: (nome: string, email: string, nomeDaEmpresa: string, senha: string) => void,
    login: (email: string, senha: string) => void,
    logout: () => void,
}

export const LoginContext = createContext<LoginType>(null!);

export const LoginContextProvider = ({children}: {children: JSX.Element}) => {

    const [usuarioLogado, setUsuarioLogado] = useState<boolean>(false);

    const criarUsuario = (nome: string, email: string, nomeDaEmpresa: string, senha: string) => {
        
        http.post('/criar_usuario', {nome, email, nomeDaEmpresa, senha}).then((response) => {
            
            localStorage.setItem('token', response.data.token);

            if(response.data.token){
                setUsuarioLogado(true);
            }
            
        
        }).catch((response) => {
            console.log(response.data)
        })

    }

    const login = (email: string, senha: string) => {

        http.post('/login', {email, senha}).then((response) => {
        
            localStorage.setItem('token', response.data.token);
            setUsuarioLogado(true);
            console.log(response.data.token);
        
        }).catch((response) => {



        })

    }

    const logout = () => {

        localStorage.setItem('token', '');
        setUsuarioLogado(false);

    }

    return (
        <LoginContext.Provider value={{usuarioLogado, criarUsuario, login, logout}}>
            {children}
        </LoginContext.Provider>
    )

}