import { SVGProps } from "react";
import Image from "next/image";
import styles from "./input.module.scss";
import global from "../../styles/global.module.scss";
import ma from "../../../public/icons/magnifying-glass.svg";

interface InputProps {
    id?: string;
    type?: string;
    name?: string;
    placeholder?: string;
    className?: string;
    inputBackground?: string;
    buttonType?: "button" | "reset" | "submit";
    buttonTitle?: string;
    buttonIcon?: SVGProps<SVGSVGElement>;
}

const Input = ({
    id = "",
    type,
    name = "",
    placeholder = "",
    className = "",
    inputBackground,
    buttonType,
    buttonTitle,
    buttonIcon: ButtonIcon }: InputProps) => {
    return (
        <div className={`${className} ${styles.input} ${inputBackground}`}>
            <input id={id} type={type} name={name} placeholder={placeholder} />
            <button type={buttonType} title={buttonTitle}>
                {/* <Image src={ } alt="" /> */}
            </button>
        </div>
    );
};

export default Input;