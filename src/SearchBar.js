import React from 'react';
import ReactDOM from 'react-dom';
import tmdbLogo from './PoweredBy.svg';

class SearchBar extends React.Component {

    render () {

var imgStyle = {
    height: '50px'
}

    return (
        <div className="App-header row container-fluid align-items-center"> 
            <div className="logo-container col-6 col-md-7 col-lg-6 row px-0 px-md-auto ">
                <img src={tmdbLogo} className="logo col-3 col-sm-3 col-md-6" alt="TMDB logo"
                style={imgStyle} />
                <h1 className="App-title col-xs-10 col-sm-3 ">MovieApp</h1>
            </div>
            <div className="input-container col-10 col-sm-8 col-md-5 col-lg-6 mx-auto pt-md-4 align-items-center">
              <div class="mdb-autocomplete active-green-3 active-green-4 mb-4 col-md-7">               
                <input id="form-autocomplete" class="form-control" type="text"
                 placeholder="Search..." aria-label="Search"/>
              </div>
            </div>
        </div>
     
             );  
          
        }
}

export default SearchBar;