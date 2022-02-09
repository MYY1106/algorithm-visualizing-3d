import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.less';
import { Home, Stack, Tree } from './views';

function App() {
    const a = '123';
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/linear' element={<Stack />} />
                <Route path='/tree' element={<Tree />} />
            </Routes>
        </Router>
    );
}

export default App;
