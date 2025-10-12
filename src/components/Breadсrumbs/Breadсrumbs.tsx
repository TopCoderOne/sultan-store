import Link, { LinkProps } from "next/link";
import styles from "./Breadсrumbs.module.scss";

export type BreadсrumbItemProps = Omit<LinkProps, 'href'> & {
    href?: LinkProps['href'];
    title: string;
}

export type BreadсrumbsProps = {
    items: BreadсrumbItemProps[];
}

export const BreadсrumbItem = ({ title, href, ...props }: BreadсrumbItemProps) => {
    return (
        href ? <Link href={href} {...props}>{title}</Link> : <span>{title}</span>
    );
}

export const Breadсrumbs = ({ items }: BreadсrumbsProps) => {
    return (
        <nav className={styles.breadcrumbs}>
            {items.map((item, key) => <BreadсrumbItem key={key} {...item} />)}
        </nav>
    );
}
