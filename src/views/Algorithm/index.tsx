import { Link, Outlet } from 'react-router-dom';
import styles from './index.module.less';
import { Logo } from "../../components";
export default function index() {
    return (
        <div>
            <header className={styles.header}>
                <Logo />
            </header>
            <nav className={styles.nav}>
                <Link to='/algorithm/heap'>Heap</Link>
                <Link to='/algorithm/stack'>stack</Link>
            </nav>
            <Outlet />
        </div>
    );
}
