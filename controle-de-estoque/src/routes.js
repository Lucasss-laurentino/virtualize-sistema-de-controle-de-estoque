import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Page_default } from './components/Page_default';

export default function appRoute() {
    
    return(
        <Router>
            <Routes>
                <Route path='/' element={< Page_default />} >

                </Route>
            </Routes>
        </Router>
    );

}