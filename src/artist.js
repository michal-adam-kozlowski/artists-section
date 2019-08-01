import React, {Component} from "react";
import "./artist.scss";



class Artist extends Component {

    state = {
        artistHover: false
    };

    artistDescription = () => {
        return (
            <p className="single-artist-description">
                {this.props.description}
            </p>
        )
    };

    render() {
        return (
            <div className="single-artist-wrapper">
                <div className="single-artist-img-wrapper"
                     onMouseEnter={() => this.setState({ artistHover: true })}
                     onMouseLeave={() => this.setState({ artistHover: false })}
                >
                    { this.state.artistHover ? this.artistDescription() : null }
                    <a className="single-artist-href" href={this.props.video} target="blank">
                        <img className="single-artist-img" src={require(`${this.props.photo}`)}/>
                    </a>
                </div>
                <h3 className="single-artist-name">{this.props.name}</h3>

            </div>
        )
    }
}



export default Artist;