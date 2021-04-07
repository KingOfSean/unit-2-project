import {Link} from "react-router-dom";

export default function Details({amiibo}) {
    return(
        <div>
            <header>
                <h1>{amiibo.name}</h1>
            </header>
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
            <div>
                <img src={amiibo.image} alt={amiibo.altText}/>
            </div>
            <Link to="/searchresults">Back To Search</Link>
        </div>
    )
}