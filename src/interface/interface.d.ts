interface IProducts {
    popular: boolean;
    image: string;
    quantity: string;
    unit: string;
    name: string;
    barcode?: string;
    manufacturer?: string;
    brand?: string;
    price: string;
    currency: string;
}

interface IBrandLogo {
    width: number;
    height: number;
    src: string;
    alt: string;
}

interface IGlobalStyles {
    className: string;
}