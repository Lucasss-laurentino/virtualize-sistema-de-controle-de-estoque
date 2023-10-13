import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Page_default } from './components/Page_default';
import { CurrentPageProvider } from './Contexts/CurrentPageContext';
import { ProdutoProvider } from './Contexts/ProdutoContext';

export default function appRoute() {
    
    return(
        <CurrentPageProvider>
            <ProdutoProvider>
                <Router>
                    <Routes>
                        <Route path='/' element={< Page_default />} >

                        </Route>
                    </Routes>
                </Router>
            </ProdutoProvider>
        </CurrentPageProvider>

    );

}