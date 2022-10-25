import Card from "./Card";

import icon from "../assets/icon.png";
import super1 from "../assets/super1.png";
import release2 from "../assets/release2.png";

const Free = () => {
    return (
        <div className="free">
            <div className="free-container">
                <div className="background">
                    <div className="ellipse pink"></div>
                    <div className="ellipse green"></div>
                </div>
                <div className="content">
                    <div className="image">
                        <img src={icon} alt="icone" />
                    </div>
                    <h2 className="title">
                        NFTs gratuitos para novos usuários
                    </h2>
                    <p className="description">
                        Cadastre-se agora e receba um NFT de graça no lançamento
                    </p>
                </div>
            </div>
            <div className="cards">
                <div className="card1">
                    <Card
                        image={super1}
                        series="Mega Series"
                        title="Homem Roxo"
                        price={5.69}
                        tag={12983}
                        time={2}
                    />
                </div>
                <div className="card2">
                    <Card
                        image={release2}
                        series="Omega Series"
                        title="Homem Supreso"
                        price={1.93}
                        tag={12982}
                        time={1}
                    />
                </div>
            </div>
        </div>
    );
};

export default Free;
