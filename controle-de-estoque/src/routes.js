import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Page_default } from './components/Page_default';
import { CurrentPageProvider } from './Contexts/CurrentPageContext';
import { ProdutoProvider } from './Contexts/ProdutoContext';
import { CategoriaProvider } from './Contexts/CategoriaContext';
import { ValidarInputCadastroProvider } from './Contexts/ValidarInputCadastroContext';
import { LoginContextProvider } from './Contexts/LoginContext';
import { PaginaProdutos } from './components/PageProdutos';
import { PaginaInicial } from './components/PaginaInicial';
import { PageVendas } from './components/PageVendas';
import { PageEntrada } from './components/PageEntrada';
import { UserProvider } from './Contexts/UserContext';
import { FornecedorProvider } from './Contexts/FornecedorContext';

export default function appRoute() {
    
    return(
        <CurrentPageProvider>
            <UserProvider>
            <ProdutoProvider>
                <CategoriaProvider>
                    <ValidarInputCadastroProvider>
                        <LoginContextProvider>
                            <ProdutoProvider>
                                <FornecedorProvider>
                                <Router>
                                    <Routes>
                                        <Route path='/' element={< Page_default />} >
                                            <Route path='/produtos' element={<PaginaProdutos />} />
                                            <Route path='/' element={<PaginaInicial />} />
                                            <Route path='/vendas' element={<PageVendas />} />
                                            <Route path='/compras' element={<PageEntrada />} />
                                        </Route>
                                    </Routes>
                                </Router>
                                </FornecedorProvider>
                            </ProdutoProvider>
                        </LoginContextProvider>
                    </ValidarInputCadastroProvider>
                </CategoriaProvider>
            </ProdutoProvider>
            </UserProvider>
        </CurrentPageProvider>

    );

}