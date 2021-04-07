import {Link} from "react-router-dom";

export default function SearchResults({ amiibos, searchString}) {
    // if (amiibos.character) {
    //     return <h2>No Amiibos Found</h2>
    // }
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