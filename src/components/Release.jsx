import { BsArrowRight } from "react-icons/bs";

import Card from "./Card";

import release1 from "../assets/release1.png";
import release2 from "../assets/release2.png";

const Release = () => {
    return (
        <div className="releases">
            <div className="release orange">
                <div className="content">
                    <h2 className="title">Lançamento em 4/11</h2>
                    <p className="description">
                        Lançamento de 4 edições limitadas via{" "}
                        <a href="#">Discord.</a>
                    </p>
                    <p className="description">
                        Não perca essas 4 edições únicas, exclusivas e
                        limitadas!
                    </p>
                    <p className="description">
                        50% de desconto na primeira aquisição!!
                    </p>
                    <a href="#" className="link">
                        Confira aqui <BsArrowRight />
                    </a>
                </div>
                <div className="image">
                    <img src={release1} alt="lancamento" />
                    <div className="ellipse pink"></div>
                </div>
            </div>
            <div className="release green">
                <div className="card-container">
                    <Card
                        image={release2}
                        series="Omega Series"
                        title="Homem Surpreso"
                        price={1.93}
                        tag={12982}
                        time={1}
                    />
                    <div className="ellipse orange"></div>
                </div>
                <div className="content">
                    <h2 className="title">Lançamento em 4/11</h2>
                    <p className="description">
                        Lançamento de 4 edições limitadas via{" "}
                        <a href="#">Discord.</a>
                    </p>
                    <p className="description">
                        Não perca essas 4 edições únicas, exclusivas e
                        limitadas!
                    </p>
                    <p className="description">
                        50% de desconto na primeira aquisição!!
                    </p>
                    <a href="#" className="link">
                        Confira aqui <BsArrowRight />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Release;
