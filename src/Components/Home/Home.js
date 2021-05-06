import {Link} from "react-router-dom";
import "./Home.css";


export default function Home() {
    const audio = new Audio("/Sounds/sm64_mario_lets_go.wav");
    const start = () => {
        audio.play();
  }

  const hover = new Audio("/Sounds/Klick.mp3");
    const startKlick = () => {
        hover.play();
    }

    return(
        <div className="homescreen" >
            <h1>Amiibo Searcher</h1>
            <div className="screen-logo" >
                <img id="amiibo-logo" src="./Images/logo.png" />
                <img id="mario" src="./Images/mario.png"/>
            </div>
            <Link to="/searchresults">
                <button onClick={start} onMouseOver={startKlick} >Enter</button>
            </Link>
        </div>

    )
}