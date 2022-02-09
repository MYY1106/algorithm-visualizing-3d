import { Link, Outlet } from 'react-router-dom';
export default function index() {
    return (
        <div>
            <nav style={{ margin: 10 }}>
                <Link to='/algorithm/heap'>Heap</Link>
                <Link to='/algorithm/stack'>stack</Link>
            </nav>
            <Outlet />
        </div>
    );
}
