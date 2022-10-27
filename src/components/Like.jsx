import eth1 from "../assets/eth1.png";
import eth2 from "../assets/eth2.png";

const Like = () => {
    return (
        <div className="like">
            <div className="like-container">
                <div className="content">
                    <div className="image">
                        <img src={eth1} alt="eth" />
                    </div>
                    <h2 className="title">Um NFT como nenhum outro</h2>
                    <p className="description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Temporibus, explicabo veritatis. Ipsa impedit a
                        reprehenderit. Et voluptatibus quam nobis. Adipisci
                        veniam nobis debitis placeat fugiat natus aspernatur
                        velit eius hic!
                    </p>
                    <p className="description">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Voluptate similique cum omnis unde repellat veniam
                        maiores accusantium! Consectetur ullam, excepturi atque
                        expedita quas beatae laudantium maiores delectus autem
                        fugit suscipit.
                    </p>
                </div>
                <div className="content">
                    <div className="image">
                        <img src={eth2} alt="eth" />
                    </div>
                    <h2 className="title">Um NFT como nenhum outro</h2>
                    <p className="description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Temporibus, explicabo veritatis. Ipsa impedit a
                        reprehenderit. Et voluptatibus quam nobis. Adipisci
                        veniam nobis debitis placeat fugiat natus aspernatur
                        velit eius hic!
                    </p>
                    <p className="description">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Voluptate similique cum omnis unde repellat veniam
                        maiores accusantium! Consectetur ullam, excepturi atque
                        expedita quas beatae laudantium maiores delectus autem
                        fugit suscipit.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Like;
