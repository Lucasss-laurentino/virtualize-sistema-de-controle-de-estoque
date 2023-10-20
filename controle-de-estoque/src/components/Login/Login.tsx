import './index.css';

interface Props {
    toggle: boolean,
 }

export const Login = ({toggle}: Props) => {
    
    return(

        <>
            <div className={toggle ? 'page-login-active' : 'page-login'}>
                <div className="container div-logo-login">
                    <div className="img">
                    <img src="../../../img/logo.png" className='img-logo' alt="" />
                    </div>
                </div>
            </div>
        </>

    )

}