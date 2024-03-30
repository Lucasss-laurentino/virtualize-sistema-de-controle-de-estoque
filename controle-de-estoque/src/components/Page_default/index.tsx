import { useContext, useEffect, useState } from 'react';
import { Login } from '../Login/Login';
import { Menu_lateral } from '../Menu_lateral';
import { NavBar } from '../NavBar';
import './index.css';
import { PageLogin } from '../PageLogin';
import { Outlet } from 'react-router-dom';
import { UserContext } from '../../Contexts/UserContext';

export const Page_default = () => {

    const [toggle, setToggle] = useState(false);
    const { validarToken, usuario } = useContext(UserContext);


    useEffect(() => {
        validarToken();
    });

    return(
        <>
            <div className="container-fluid p-0 envelop-all">
                <NavBar toggle={toggle} setToggle={setToggle}/>
                <Menu_lateral />

                <div className="paginas">
                    <Outlet/>
                </div>

                <Login toggle={toggle} />

                <PageLogin toggle={toggle} setToggle={setToggle} />
                
            </div>

        </>
    );

}