export type NavLinkProps = {
    id: number;
    /** 路由 */
    to: string;
    /** 展示名 */
    algoName: string;
    /** 子排序个数 */
    childrenLength: number;
    /** 子排序 */
    children?: Array<string>;
    level: number;
};
