import {Link} from "react-router-dom";
import "../Details/Details.css";

export default function Details({amiibo}) {
    // if (amiibo.release === undefined) {
    //     return <h2>N/A</h2>
    // }
    return(
        <div className="details">
            <header>
                <h1>{amiibo.name}</h1>
            </header>
            <div className="content">  
            <section>
                <div>
                    <h2>Amiibo Series</h2>
                    <p>{amiibo.amiiboSeries}</p>
                </div>
                <div>
                    <h2>Game Series</h2>
                    <p>{amiibo.gameSeries}</p>
                </div>
                <div>
                    <h2>Year Released</h2>
                    <ul>
                        <li>Australia: {amiibo.release.au}</li>
                        <li>Europe: {amiibo.release.eu}</li>
                        <li>Japan: {amiibo.release.jp}</li>
                        <li>North America: {amiibo.release.na}</li>
                    </ul>
                </div>
                <div>
                    <h2>Type</h2>
                    <p>{amiibo.type}</p>
                </div>
            </section>
            <div className="amiibo-image">
                <img src={amiibo.image} alt={amiibo.altText}/>
            </div>
        </div>
            <div className="return-search">
                <Link to="/searchresults">
                    <img src="/Logo/mario-with-shell.png" height="110px" />
                <p>Back to Search</p>
                </Link>
            </div>
            </div>
    )
}