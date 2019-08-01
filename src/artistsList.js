import React, {Component} from "react";
import Artist from "./artist.js";
import "./artistsList.scss";

var artistsArr = [
        {
            name: "Eminem",
            description: "Jeden z najbardziej popularnych raperów w USA. W karierze pomogło mu bycie białym, co sprawiało, że był lepiej widoczny na wystepach",
            video: "https://www.youtube.com/embed/YVkUvmDQ3HY",
            photo: "./img/eminem.png"
        },
        {
            name: "Rihanna",
            description: "Urodzona altruistka, zawsze gotowa wziąć kogoś pod swoją parasolkę",
            video: "https://www.youtube.com/embed/sEhy-RXkNo0",
            photo: "./img/rihanna.png"
        },
        {
            name: "U2",
            description: "Bezpieczny wybór na imprezę. Jak ich słuchasz to pewnie lubisz pracę w młodym dynamicznym zespole, podróże i sport. Możesz powiedzieć o nich zarówno mamie jak i koledze z pracy. Taki schabowy z ziemniaczkami i mizerią w muzyce",
            video: "https://www.youtube.com/embed/XC3ahd6Di3M",
            photo: "./img/u2.png"
        },
        {
            name: "Zenek Martyniuk",
            description: "Gwiazda przez duże G! Autor przebojów znanych w całym kraju, jak również dzięki polonii poza jego granicami. Obowiązkowo puść w samochodzie jak wieziesz Karynę na wixę w dyskotece pod Grójcem.",
            video: "https://www.youtube.com/embed/cxtnot8lY4U",
            photo: "./img/zenek.png"
        }
    ];


class ArtistsList extends Component {
    render() {
        return (
            <div className="workspace">
                <div className="block"></div>
            <div className="artists-wrapper">
                    {artistsArr.map((el) =>
                        <Artist name={el.name} description={el.description} video={el.video} photo={el.photo}/>
                    )}
            </div>
            </div>
        )
    }
}




export default ArtistsList;