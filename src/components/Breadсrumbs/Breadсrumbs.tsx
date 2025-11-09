import Link, { LinkProps } from 'next/link';
import styles from './Breadсrumbs.module.scss';
import BackButtonIcon from '../../../public/icons/arrow-blue.svg';
// import { useMediaQuery } from 'react-responsive';

export type TypeBreadсrumbItemProps = Omit<LinkProps, 'href'> & {
    href?: LinkProps['href'];
    title: string;
}

export type TypeBreadсrumbsProps = {
    items: TypeBreadсrumbItemProps[];
}

export const MobileBackButton = ({ title, href, ...props }: TypeBreadсrumbItemProps) => {
    return (
        href ? <>
            <Link href={href} {...props}><BackButtonIcon /></Link> <span>{title}</span>
        </> : null
    );
};

export const BreadсrumbItem = ({ title, href, ...props }: TypeBreadсrumbItemProps) => {
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


// export const Breadсrumbs = ({ items }: TypeBreadсrumbsProps) => {
//     const matches = useMediaQuery({ query: '(max-width: 1024px)' });

//     return (
//         <nav className={styles.breadcrumbs}>
//             {
//                 matches ? items.map((item, key) => <BreadсrumbItem key={key} {...item} />) : <MobileBackButton href={'/'} title={'Назад'} />
//             }
//         </nav>
//     );
// }