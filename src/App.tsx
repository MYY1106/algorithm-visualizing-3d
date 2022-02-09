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
                <Route path='/algorithm' element={<Algorithm />}>
                    {/* 嵌套路由 */}
                    <Route path='heap' element={<Heap />} />
                    <Route path='stack' element={<Stack />} />
                </Route>
                {/* 重定向到首页 */}
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        </Router>
    );
}

export default App;
