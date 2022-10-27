import signup from "../assets/signup.png";

const Signup = () => {
    return (
        <div className="signup">
            <div className="signup-container">
                <div className="content">
                    <p className="sub-title">Lançamento em Breve</p>
                    <h1 className="title">Um NFT como nenhum outro</h1>
                    <p className="description">
                        Não perca o lançamento do nosso novo NFT. Se inscreva
                        para não perder nossas atualizações em live.
                    </p>
                    <button>Cadastrar-se</button>
                </div>
                <div className="image-container">
                    <div className="image">
                        <img src={signup} alt="cadastrar_se" />
                    </div>
                    <div className="ellipse-container">
                        <div className="ellipse pink"></div>
                        <div className="ellipse orange"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
