import { Link, Route, Routes } from 'react-router-dom';
import { Heap, Stack, Code } from '../index';

export default function index() {
    return (
        <div>
            <nav style={{ margin: 10 }}>
                <Link to='/algorithm/heap'>Heap</Link>
                <Link to='/algorithm/stack'>stack</Link>
            </nav>
            <Routes>
                <Route path='heap' element={<Heap />} />
                <Route path='stack' element={<Stack />} />
            </Routes>
            <Routes>
                <Route path='heap' element={<Code />} />
                <Route path='stack' element={<Code />} />
            </Routes>
        </div>
    );
}
