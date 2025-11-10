import Link from 'next/link';
import styles from './MobileBackButton.module.scss';
import BackButtonIcon from '../../../public/icons/arrow-blue.svg';
import { TypeBreadсrumbItemProps } from '../Breadсrumbs/Breadсrumbs';

export const MobileBackButton = ({ title, href, ...props }: TypeBreadсrumbItemProps) => {
    return (
        href ? (
            <nav className={styles.mobileBackButton}>
                <Link href={href} {...props}>
                    <BackButtonIcon />
                </Link>
                <span>{title}</span>
            </nav>
        ) : null
    );
}