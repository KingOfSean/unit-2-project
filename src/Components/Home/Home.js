import {Link} from "react-router-dom";


export default function Home() {
    return(
        <div>
            <h1>Amiibo Searcher</h1>
            <Link to="/searchresults">
                <button>Enter</button>
            </Link>
        </div>

    )
}