import {  useState } from 'react';
import { Login } from '../Login/Login';
import { Menu_lateral } from '../Menu_lateral';
import { NavBar } from '../NavBar';
import './index.css';
import { PageLogin } from '../PageLogin';
import { Outlet } from 'react-router-dom';

export const Page_default = () => {

    const [toggle, setToggle] = useState(false);

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