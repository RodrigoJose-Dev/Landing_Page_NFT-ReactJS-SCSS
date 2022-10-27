import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

import logo from "../assets/logo.png";

const Footer = () => {
    const links = [
        {
            title: "Sobre",
            data: ["Sobre", "Termos", "Privacidade"],
        },
        {
            title: "NFT",
            data: ["OpenSea", "Criador", "Aprenda Sobre"],
        },
        {
            title: "Contato",
            data: ["E-mail", "Suporte"],
        },
        {
            title: "Redes Sociais",
            data: ["Discord", "Twitter", "Instagram"],
        },
    ];

    const socialLink = [
        <BsFacebook />,
        <BsTwitter />,
        <BsIntagram />,
        <FaTiktok />,
    ];

    return (
        <footer>
            <div className="upper">
                <div className="brand-container">
                    <div className="brand">
                        <img src={logo} alt="logo" />
                    </div>
                </div>
            </div>
            <div className="lower"></div>
        </footer>
    );
};

export default Footer;
