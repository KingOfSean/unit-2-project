import {Link} from "react-router-dom";
import "./SearchResults.css";

export default function SearchResults({ amiibos, searchString}) {
    if (amiibos === undefined) {
        return <h1>No Amiibos Found!</h1>
    }
    return(
        <div className="gallery">
            {amiibos.map((amiibo, i) => {
                return (
                    <div>
                        <Link to={`/amiibo/${amiibo.tail}`}>
                            <img src={amiibo.image} alt={amiibo.image.altText}/>
                        </Link>
                        <p>{amiibo.name}</p>
                    </div>
                )
            })}
        </div>
    )
}