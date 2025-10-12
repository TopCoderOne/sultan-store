import styles from "./BrandLogoCard.module.scss";
import Image from "next/image";

const BrandLogoCard = ({ width, height, src, alt }: IBrandLogo) => {
    return (
        <div className={styles.brandLogoCard}>
            <Image width={width} height={height} src={src} alt={alt} />
        </div>
    );
}

export default BrandLogoCard;