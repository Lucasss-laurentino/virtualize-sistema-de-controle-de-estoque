import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Page_default } from './components/Page_default';
import { CurrentPageProvider } from './Contexts/CurrentPageContext';
import { ProdutoProvider } from './Contexts/ProdutoContext';
import { CategoriaProvider } from './Contexts/CategoriaContext';
import { ValidarInputCadastroProvider } from './Contexts/ValidarInputCadastroContext';
import { LoginContextProvider } from './Contexts/LoginContext';

export default function appRoute() {
    
    return(
        <CurrentPageProvider>
            <ProdutoProvider>
                <CategoriaProvider>
                    <ValidarInputCadastroProvider>
                        <LoginContextProvider>
                            <ProdutoProvider>
                                <Router>
                                    <Routes>
                                        <Route path='/' element={< Page_default />} >

                                        </Route>
                                    </Routes>
                                </Router>
                            </ProdutoProvider>
                        </LoginContextProvider>
                    </ValidarInputCadastroProvider>
                </CategoriaProvider>
            </ProdutoProvider>
        </CurrentPageProvider>

    );

}