import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import 'assets/style/App.less';
import { Home, Algorithm } from './views';

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
