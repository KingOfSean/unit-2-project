import {Link} from "react-router-dom";

export default function SearchResults({ amiibos, searchString}) {
    if (amiibos === undefined) {
        return <h1>No Amiibos Found!</h1>
    }
    return(
        <div>
            {amiibos.map((amiibo, i) => {
                return (
                    <div>
                        <Link to={`/amiibo/${amiibo.tail}`}>
                            <img src={amiibo.image} alt={amiibo.image.altText}/>
                            <div>{amiibo.name}</div>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}