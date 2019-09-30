import React from 'react';
import tmdbLogo from '../powered-by-blue.svg';

class SearchBar extends React.Component {

    render () {

var imgStyle = {
    height: '50px'
}

    return (
        <div className="App-header row container-fluid align-items-center"> 
            <div className="logo-container col-12 col-sm-6 col-md-7 col-lg-6 row px-0 px-md-auto">
                <img src={tmdbLogo} className="logo col-3 col-sm-3 col-md-6 mx-auto mx-sm-0" alt="TMDB logo"
                style={imgStyle} />
                <h1 className="App-title col-12 col-sm-3 px-5 mb-0 text-center">MovieApp</h1>
            </div>
            <div className="input-container col-10 col-sm-8 col-md-5 col-lg-6 mx-auto pt-md-4 align-items-center">
              <div className="dropdown active-green-3 active-green-4 mb-4 col-md-10 col-lg-7">               
                <input id="dropdownMenuInput" className="form-control dropdown-toggle" type="text"
                 placeholder="Search..." aria-label="Search" data-toggle="dropdown"
                 aria-haspopup="true" aria-expanded="true"/>
                 <div className="dropdown-menu" aria-labelledby="dropdownMenuInput">
                    <a className="dropdown-item" href="#">Forrest Gump</a>
                    <a className="dropdown-item" href="#">Ojciec Chrzestny</a>
                    <a className="dropdown-item" href="#">Pulp Fiction</a>
                </div>
              </div>
            </div>

        </div>
     
             );  
          
        }
}

export default SearchBar;