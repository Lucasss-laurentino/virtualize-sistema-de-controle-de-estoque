import { useContext, useEffect, useState } from 'react';
import './index.css';
import { LoginContext } from '../../Contexts/LoginContext';
import { UserContext } from '../../Contexts/UserContext';

interface Props {
    toggle: boolean,
    setToggle: React.Dispatch<React.SetStateAction<boolean>>,
}

export const NavBar = ({ toggle, setToggle}: Props) => {
    
    const { logout } = useContext(LoginContext);
    const { usuario } = useContext(UserContext);
    const [menuUsuarioAtivado, setMenuUsuarioAtivado] = useState(false);

    const openLogin = () => {
        setToggle(true)
    }

    const fecharMenuEsair = () => {
        setMenuUsuarioAtivado(!menuUsuarioAtivado);
        logout();
    }

    useEffect(() => {

        if(usuario != null) {

            setToggle(false);

        }

    }, [usuario])

    return(
  
        <>

            <div className="navBar">
                <div className="div-logo">
                    <img src="../../../img/logo.png" className='img-logo' alt="" />
                </div>
                {usuario === null ?
                <div className="menu-user">                                    
                    <div className='icon-user' onClick={() => openLogin()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill='#9b9898' className="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                        </svg>
                    </div>
                </div>
                :
                <div className="menu-user">                                    
                    <div className='icon-user' onClick={() => console.log('teste')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#ffffff" className="bi bi-list" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                        </svg>
                    </div>
                </div>

                }
            </div>
            
        </>
    
    )
};