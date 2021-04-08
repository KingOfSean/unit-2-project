import {Link} from "react-router-dom";
import "./SearchResults.css";

export default function SearchResults({ amiibos, searchString}) {
    const audio = new Audio("/Sounds/switch-sound.mp3");
    const start = () => {
    audio.play();
  }
  
  const hover = new Audio("/Sounds/Klick.mp3");
    const startKlick = () => {
    hover.play();
  }

    if (amiibos === undefined) {
        return <h1>No Amiibos Found!</h1>
        
    }
    return(
        <div className="gallery">
            {amiibos.map((amiibo, i) => {
                return (
                    <div>
                        <Link to={`/amiibo/${amiibo.tail}`} onClick={start} onMouseOver={startKlick} > 
                            <img src={amiibo.image} alt={amiibo.image.altText}/>
                        </Link>
                        <p>{amiibo.name}</p>
                    </div>
                )
            })}
        </div>
    )
}