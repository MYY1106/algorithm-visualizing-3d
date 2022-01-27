import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.less';
import { Home, Linear, Tree } from './views';

function App() {
    const a = '123';
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                                                            <Route path='/linear' element={<Linear />} />
                <Route path='/tree' element={<Tree />} />
            </Routes>
        </Router>
    );
}

export default App;
