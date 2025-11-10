import Link, { LinkProps } from 'next/link';
import styles from './Breadсrumbs.module.scss';

export type TypeBreadсrumbItemProps = Omit<LinkProps, 'href'> & {
    href?: LinkProps['href'];
    title: string;
}

export type TypeBreadсrumbsProps = {
    items: TypeBreadсrumbItemProps[];
}

const BreadсrumbItem = ({ title, href, ...props }: TypeBreadсrumbItemProps) => {
    return (
        href ? <Link href={href} {...props}>{title}</Link> : <span>{title}</span>
    );
}

export const Breadсrumbs = ({ items }: TypeBreadсrumbsProps) => {
    return (
        <nav className={styles.breadcrumbs}>
            {items.map((item, key) => <BreadсrumbItem key={key} {...item} />)}
        </nav>
    );
}