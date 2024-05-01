import { SetStateAction, createContext, useState } from "react";
import Usuario from "../types/Usuario";
import { http } from "../http/http";
import { jwtDecode } from "jwt-decode";

type UserType = {

    usuario: Usuario | null,
    setUsuario: React.Dispatch<SetStateAction<Usuario | null>>,
    validarToken: () => void,
}

export const UserContext = createContext<UserType>(null!);

export const UserProvider = ({children}: {children: JSX.Element}) => {

    const [usuario, setUsuario] = useState<Usuario | null>(null);

    const validarToken = () => {

        http.post('/validar_token').then((response) => {
            setUsuario(response.data.usuario);
        }).catch((response) => {
            setUsuario(null);
        })
    
    }

    return (

        <UserContext.Provider value={{usuario, setUsuario, validarToken}}>
            {children}
        </UserContext.Provider>

    );

}
