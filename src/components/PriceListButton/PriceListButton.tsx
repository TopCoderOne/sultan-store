import DownloadIcon from '../../../public/icons/download.svg';

const PriceListButton = ({ className }: IGlobalStyles) => {
    return (
        <a className={`${className}`}>
            Прайс-лист
            <DownloadIcon />
        </a>
    );
}

export default PriceListButton;
