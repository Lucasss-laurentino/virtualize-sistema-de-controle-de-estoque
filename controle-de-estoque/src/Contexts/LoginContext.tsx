import { createContext, useContext, useState } from "react";
import { http } from "../http/http";
import { UserContext } from "./UserContext";
import { jwtDecode } from "jwt-decode";

type LoginType = {
    usuarioLogado: boolean,
    criarUsuario: (data: any) => void,
    login: (email: string, senha: string) => void,
    logout: () => void,
}

export const LoginContext = createContext<LoginType>(null!);

export const LoginContextProvider = ({children}: {children: JSX.Element}) => {

    const [usuarioLogado, setUsuarioLogado] = useState<boolean>(false);
    const { setUsuario } = useContext(UserContext);

    const criarUsuario = (data: any) => {
        
        http.post('/cadastrar_usuario', {data}).then((response) => {
                        
            const token = response.data.token;

            setUsuario(jwtDecode(token));

            setUsuarioLogado(true);

            localStorage.setItem('token', token);
            
        }).catch((response) => {

            console.log(response);

        })

    }

    const login = (email: string, senha: string) => {

        http.post('/login', {email, senha}).then((response) => {
        
            localStorage.setItem('token', response.data.token);
            
            setUsuarioLogado(true);

            console.log(response.data);
        
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