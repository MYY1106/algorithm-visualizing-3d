import { Link, Outlet } from 'react-router-dom';
import styles from './index.module.less';
import { Logo } from 'components';
export default function index() {
    return (
        <div className={styles['their-father']}>
            <header className={styles.header}>
                <Logo />
            </header>
            <main className={styles.main}>
                <nav className={styles.nav}>
                    <Link className={styles.sort} to='/algorithm/heap'>
                        堆
                    </Link>
                    <Link className={styles.sort} to='/algorithm/stack'>
                        栈
                    </Link>
                </nav>
                <div className={styles.line} />
                <Outlet />
            </main>
        </div>
    );
}
