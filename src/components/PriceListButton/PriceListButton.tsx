import { FC } from 'react';
import Download from '../../../public/icons/download.svg';

const PriceListButton: FC<IGlobalStyles> = ({ className }) => {
    return (
        <a className={`${className}`}>
            Прайс-лист
            <Download />
        </a>
    );
}

export default PriceListButton;
