import { Link, Outlet } from 'react-router-dom';
export default function index() {
    return (
        <div>
            <nav style={{ margin: 10 }}>
                <Link to='/algorithm'>Linear</Link>
                <Link to='/algorithm/tree'>Tree</Link>
            </nav>
            <Outlet />
        </div>
    );
}
