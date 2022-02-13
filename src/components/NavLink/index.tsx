import { Link } from 'react-router-dom';
import styles from './index.module.less';
import '@/assets/style/font.less';
import { NavLinkProps } from '../types';

const NavLink: React.FC<NavLinkProps> = (props) => {
    const style = {
        '--childrenLength': props.childrenLength,
    } as React.CSSProperties;

    return (
        <div className={styles['link-container']} style={style}>
            <Link
                className={
                    props.level === 1 ? styles['sort'] : styles['children-sort']
                }
                to={props.to}
            >
                {props.algoName}
            </Link>
            {props.children && (
                <ul className={styles['children-list']}>
                    {/* 因为此处的index是不会变的，所以可以用于设置key */}
                    {props.children.map((algo, index) => (
                        <li>
                            <NavLink
                                id={index}
                                to={props.to + '/' + index}
                                algoName={algo}
                                childrenLength={0}
                                level={2}
                            />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default NavLink;
