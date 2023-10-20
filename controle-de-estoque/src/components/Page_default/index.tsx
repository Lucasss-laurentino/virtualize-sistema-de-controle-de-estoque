import { useState } from 'react';
import { Login } from '../Login/Login';
import { Menu_lateral } from '../Menu_lateral';
import { NavBar } from '../NavBar';
import './index.css';
import { PageLogin } from '../PageLogin';

export const Page_default = () => {

    const [toggle, setToggle] = useState(false);

    return(
        <>

            <NavBar toggle={toggle} setToggle={setToggle}/>
            <Menu_lateral />
            <Login toggle={toggle} />

            <PageLogin toggle={toggle} setToggle={setToggle} />

        </>
    );

}