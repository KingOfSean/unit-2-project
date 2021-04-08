import {Link} from "react-router-dom";
import "./Home.css";
import logo from "../Images/logo.png";
import mario from "../Images/mario.png";

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
                <img src={logo} />
                <img src={mario}/>
            </div>
            <Link to="/searchresults">
                <button onClick={start} onMouseOver={startKlick} >Enter</button>
            </Link>
        </div>

    )
}