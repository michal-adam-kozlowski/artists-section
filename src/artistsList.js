import React, {Component} from "react";
import Artist from "./artist.js";
import "./artistsList.scss";

var artistsArr = [
        {
            name: "Łąki Łan",
            description: "Nietuzinkowe połącznie funku, rocka i elektro, okraszone łąkowym outfitem i energią peterdy na scenie.",
            video: "https://www.youtube.com/embed/vIOxazUZVXE",
            photo: "./img/artysta-01.png"
        },
        {
            name: "Już wkrótce",
            description: "Wraz ze zbliżaniem się terminu festiwalu będziemy ogłaszać kolejnych artystów",
            video: "https://www.youtube.com/embed/YsTfydKBOXU",
            photo: "./img/artysta-02.png"
        },
        {
            name: "Już wkrótce",
            description: "Wraz ze zbliżaniem się terminu festiwalu będziemy ogłaszać kolejnych artystów",
            video: "https://www.youtube.com/embed/YsTfydKBOXU",
            photo: "./img/artysta-03.png"
        },
        {
            name: "Już wkrótce",
            description: "Wraz ze zbliżaniem się terminu festiwalu będziemy ogłaszać kolejnych artystów",
            video: "https://www.youtube.com/embed/YsTfydKBOXU",
            photo: "./img/artysta-04.png"
        }
    ];


class ArtistsList extends Component {
    render() {
        return (
            <div className="workspace">
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