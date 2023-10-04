import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Menu_lateral } from './components/Menu_lateral';

export default function appRoute() {
    
    return(
        <Router>
            <Routes>
                <Route path='/' element={< Menu_lateral />} >

                </Route>
            </Routes>
        </Router>
    );

}