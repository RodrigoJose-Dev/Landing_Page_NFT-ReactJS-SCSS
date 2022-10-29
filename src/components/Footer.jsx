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
        <BsInstagram />,
        <FaTiktok />,
    ];

    return (
        <footer>
            <div className="upper">
                <div className="brand-container">
                    <div className="brand">
                        <img src={logo} alt="logo" />
                    </div>
                    <p>Coleção Exclusiva!</p>
                    <ul>
                        {socialLink.map((link, index) => (
                            <li key={index}>{link}</li>
                        ))}
                    </ul>
                </div>
                <div className="links">
                    {links.map(({ title, data }, index) => {
                        return (
                            <div className="link" key={index}>
                                <h4>{title}</h4>
                                <ul>
                                    {data.map((link, index2) => (
                                        <li key={index2}>{link}</li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="lower">
                <span>&copy; Copyright 2022</span>
                <span>Lançamento em Julho 2077</span>
            </div>
        </footer>
    );
};

export default Footer;
