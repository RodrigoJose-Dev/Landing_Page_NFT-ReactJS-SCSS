import Card from "./Card";

import super1 from "../assets/super1.png";
import super2 from "../assets/super2.png";
import super3 from "../assets/super3.png";
import super4 from "../assets/super4.png";

const SuperRare = () => {
    const data = [
        {
            image: super1,
            series: "Mega Series",
            title: "Homem Roxo",
            price: 5.69,
            tag: 12983,
            time: 2,
        },
        {
            image: super2,
            series: "Gloop Series",
            title: "Beige",
            price: 2.99,
            tag: 12984,
            time: 2,
        },
        {
            image: super3,
            series: "Gloop Series",
            title: "Homem Vermelho",
            price: 5.87,
            tag: 12985,
            time: 6,
        },
        {
            image: super4,
            series: "Gloop Series",
            title: "Verde",
            price: 4.41,
            tag: 12986,
            time: 1,
        },
    ];

    return (
        <div className="super-rare">
            <div className="title-container">
                <h2 className="title">LE Super Raro</h2>
                <p className="description">
                    Lançamento de 4 edições limitadas via{" "}
                    <a href="#">Discord.</a>
                </p>
            </div>
            <div className="cards">
                {data.map(
                    ({ image, series, title, price, tag, time }, index) => (
                        <Card
                            image={image}
                            series={series}
                            title={title}
                            price={price}
                            tag={tag}
                            time={time}
                            key={index}
                        />
                    )
                )}
            </div>
        </div>
    );
};

export default SuperRare;
