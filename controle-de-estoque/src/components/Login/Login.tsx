import './index.css';

interface Props {
    toggle: boolean,
 }

export const Login = ({toggle}: Props) => {
    
    return(

        <>
            <div className={toggle ? 'page-login-active' : 'page-login'}>
                
            </div>
        </>

    )

}