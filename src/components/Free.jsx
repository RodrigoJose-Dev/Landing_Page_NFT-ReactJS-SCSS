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
                <div className="card1"></div>
                <div className="card2"></div>
            </div>
        </div>
    );
};

export default Free;
