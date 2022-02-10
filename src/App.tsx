import {
    HashRouter as Router,
    Route,
    Routes,
    Navigate,
} from 'react-router-dom';
import './App.less';
import { Home, Algorithm, Stack, Heap } from './views';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/algorithm/*' element={<Algorithm />}></Route>
                {/* 重定向到首页 */}
                {/* <Route path='*' element={<Navigate to='/' />} /> */}
            </Routes>
        </Router>
    );
}

export default App;
