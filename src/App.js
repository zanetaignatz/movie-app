import React, { Component } from 'react';
import './styles/App.css';
import tmdbLogo from './PoweredBy.svg';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid" >
        <div className="App-header row container-fluid">
          <div className="logo-container col-6 row"> 
            <img src={tmdbLogo} className="logo col-6" alt="TMDB logo" height="50"/>
            <h1 className="App-title col-4">MovieApp</h1>
          </div>
          <div className="input-container col-6">
            
          </div>
        </div>
        <div className ="MovieCard col-12 col-md-12">

          <div className="meta-data-container row col-12 col-md-10 col-lg-9">
            <div className="poster-container col-11 col-md-5 col-lg-5 ">
              <img className='poster' alt="film poster" src="https://image.tmdb.org/t/p/w1280/i91mfvFcPPlaegcbOyjGgiWfZzh.jpg"/>
            </div>
            <div className="info-container col">
              <h2>First Man</h2>
              <span className="tagline">"Pierwszy człowiek" to fascynująca historia pierwszego załogowego lotu na Księżyc.</span>
              <p>Opowiada o Neilu Armstrongu , który jako pierwszy postawił stopę na Księżycu. Jesteśmy świadkami wyczerpujących przygotowań do misji , małych osiągnięć, porażających klęsk - wszystkiego co doprowadziło do ostatecznego sukcesu. A my widzowie, siedzący przed telewizorami będziemy musieli odpowiedzieć sobie na pytanie - czy ten sukces wart był ceny jaką trzeba było zapłacić...</p>
              <div className="additional-details">
                <span className="genre-list">Historyczny, Dramat</span>
                <div className="row release-details">
                  <div className="col-6"> Director: <span className="meta-data">Damien Chazelle</span></div>
                  <div className="col-6"> Vote Average: <span className="meta-data">7,1 / 10</span></div>
                </div>
                <div className="row release-details">  
                  <div className="col-6"> Original Release: <span className="meta-data">12-10-2018</span></div>
                  <div className="col-6"> Running Time: <span className="meta-data">144 min</span> </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}
export default App;
