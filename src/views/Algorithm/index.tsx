import styles from './index.module.less';
import { Logo, NavLink } from 'components';
import { algorithmData } from '@/data';

export default function index() {
    return (
        <div className={styles['their-father']}>
            <header className={styles.header}>
                <Logo />
            </header>
            <main className={styles.main}>
                <nav className={styles.nav}>
                    {algorithmData.map((algo) => (
                        <NavLink
                            {...{ ...algo, to: `/algorithm/${algo.to}` }}
                            level={1}
                            key={algo.id}
                        />
                    ))}
                </nav>
                <div className={styles.line} />
            </main>
        </div>
    );
}
