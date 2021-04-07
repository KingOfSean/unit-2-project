import './App.css';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Home from './Components/Home/Home';
import Details from "./Components/Details/Details";
import SearchResults from "./Components/Search/SearchResults";
import { useState, useEffect, Fragment } from "react";
import Search from './Components/Search/Search';

// Save the Component, key and path in an array of objects for each Route
// You could write all routes by hand but I'm lazy annd this lets me use
// the map method to just loop over them and make my routes
// SWITCH is used so that it only ever matches one route at a time
// If you don't want to use react router just rewrite the app component to not use it



export default function App () {
  const [amiibos, setAmiibos] = useState([]);
  const [searchString, setSearchString] = useState("mario");
  const [lastSearch, setLastSearch] = useState("");

  const searchOptions = {
    name: searchString,
    api: "https://www.amiiboapi.com/api/amiibo/",
    character: searchString
  };

  

  const getAmiibos = async (searchString) => {
    const url = `${searchOptions.api}?character=${searchOptions.character}`
    try{
      const res = await fetch(url);
      const data = await res.json();
      setAmiibos(data.amiibo); // i have the amiibo array
      setLastSearch(searchString);
      setSearchString("");
    } catch (err) {
      console.log(err);
    }
  };
  


  function handleChange(event) {
    setSearchString(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getAmiibos(searchString);
  }


  useEffect(() => {
    getAmiibos(searchString);
  }, [])
  
  console.log(amiibos);

  return (
    <div>
      <nav>
        <Link to="/">
          <h1>Amiibo Searcher</h1>
        </Link>
      </nav>
      <main>
        <Route path="/" exact component={Home} />
        <Route path="/searchresults" render={() => 
        <Fragment>
          <Search handleChange={handleChange} handleSubmit={handleSubmit} searchString={searchString}/> 
          <SearchResults amiibos={amiibos} /> 
        </Fragment> }/>

        <Route path="/amiibo/:tail" render={routerProps => {
          console.log(routerProps);
          const amiibo = [...amiibos].filter(
            (a) => a.tail === routerProps.match.params.tail
          );
          return <Details {...routerProps} amiibo={amiibo[0]} />
        }} />
      </main>
    </div>
  )
}
