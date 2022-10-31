import { useState, useEffect } from "react";

import scrollReveal from "scrollreveal";

import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Free from "./components/Free";
import Clients from "./components/Clients";
import SuperRare from "./components/SuperRare";
import Release from "./components/Release";
import Like from "./components/Like";
import Signup from "./components/Signup";
import Footer from "./components/Footer";

import "./styles/index.scss";

function App() {
    useEffect(() => {
        registerAnimations();
    }, []);

    //animacoes na pagina
    const registerAnimations = () => {
        const sr = scrollReveal({
            origin: "bottom",
            distance: "80px",
            duration: 2000,
            reset: false,
        });
        sr.reveal(
            `
            nav, .home, .free, .clients, .super-rare, .releases, .like, .signup, footer
        `,
            { interval: 500 }
        );
    };

    window.setTimeout(() => {
        const home = document.getElementsByClassName("home");
        home[0].style.transform = "none";

        const nav = document.getElementsByName("nav");
        nav[0].style.transform = "none";
    }, 1500);

    return (
        <div className="App-container">
            <ScrollToTop />
            <Navbar />
            <Home />
            <Free />
            <Clients />
            <SuperRare />
            <Release />
            <Like />
            <Signup />
            <Footer />
        </div>
    );
}

export default App;
