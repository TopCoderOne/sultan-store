import { ComponentType, SVGProps } from "react";
import styles from "./Input.module.scss";

interface InputProps {
    id?: string;
    type?: "text" | "search" | "email";
    name?: string;
    placeholder?: string;
    className?: string;
    buttonType?: "button" | "reset" | "submit";
    buttonTitle?: string;
    buttonIcon?: ComponentType<SVGProps<SVGSVGElement>>;
    handleFunction?: () => void;
}

const Input = ({
    id,
    type,
    name,
    placeholder,
    className,
    buttonType,
    buttonTitle,
    buttonIcon: ButtonIcon }: InputProps) => {
    return (
        <div className={`${styles.input} ${className}`}>
            <input id={id} type={type} name={name} placeholder={placeholder} />
            <button type={buttonType} title={buttonTitle}>
                {ButtonIcon && <ButtonIcon />}
            </button>
        </div>
    );
};

export default Input;