"use client"
import { useMediaQuery } from "react-responsive";
import HeaderDesktop from "./HeaderDesktop/HeaderDesktop";
import HeaderMobile from "./HeaderMobile/HeaderMobile";

const Header = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 700px)' });
    const HeaderBody = isMobile ? <HeaderMobile /> : <HeaderDesktop />;
    return (
        <header>
            {HeaderBody}
        </header>
    );
};

export default Header;