import { useState } from 'react';
import './index.css';

interface Props {
    toggle: boolean,
    setToggle: React.Dispatch<React.SetStateAction<boolean>>,
}

export const NavBar = ({ toggle, setToggle}: Props) => {

    const [classIcon, setClassIcon] = useState('icon-user');
    
    const openLogin = () => {

        setToggle(true)

    }

    return(
  
        <>

            <div className="navBar">
                <div className="div-logo">
                    <img src="../../../img/logo.png" className='img-logo' alt="" />
                </div>
                <div className="menu-user">
                    <div className='icon-user' onClick={() => openLogin()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill='#9b9898' className="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                        </svg>
                    </div>
                </div>
            </div>

        </>
    
    )
};