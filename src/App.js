import React, { Component } from 'react';
import './styles/App.css';
import SearchBar from './components/SearchBar';
import Thumbnail from './components/Thumbnail';
import Description from './components/Description';
import FilmDetails from './components/FilmDetails';

class App extends Component {
      state = {
      selectedMovie: null
  }
  

  onMovieSelect = (value) => {
    console.log(value);
    
    this.setState({
      selectedMovie: value
    });
  }

  render() {
    return (
      <div className="App container-fluid" >
{/* SEARCHBAR -------------------- */} 
        <SearchBar 
          onSelected={this.onMovieSelect} 
 
          />
        <div className ="MovieCard col-12 col-md-12">
          <div className="meta-data-container row col-12 col-md-10 col-lg-9">
{/* THUMBNAIL ------------------- */}
            <Thumbnail movie={this.state.selectedMovie}/>
            <div className="info-container col">
{/* DESCRIPTION ------------------- */}
            <Description 
            movie={this.state.selectedMovie} 
            />
{/* FILM DETAILS ------------------- */}
              <FilmDetails movie={this.state.selectedMovie}/>
            </div>
          </div>   
        </div>
      </div>
    );
  }
}
export default App;

