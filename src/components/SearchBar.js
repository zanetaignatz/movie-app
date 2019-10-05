import React from 'react';
import tmdbLogo from '../powered-by-blue.svg';
import MovieAPI from '../handlers/api';

class SearchBar extends React.Component {

    constructor(props) {
        super(props)
        this.api = new MovieAPI();
        this.state = {
            value: '',
            movies: []
        };
        //this.movies = [];
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({
            value: this.search.value,
          },callback => {
            this.loadMovies(this.state.value);
          });
          
    }
    
    async loadMovies(query) {
        let loadedMovies = await this.api.searchMovies(query);

        this.setState(
            {
                movies : loadedMovies ? loadedMovies : []
            }
        );
        
        //this.state.movies = movies;
    }

    componentDidMount() {
        //this.loadMovies();
    }

    componentDidUpdate(){
        
    }

    render () {
        
        const gotMovies = this.state.movies.length > 0;

            
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
                    aria-haspopup="true" aria-expanded="true"
                    value={this.state.value}
                    ref={input => this.search = input} 
                    onChange={this.handleChange}

                    />
                   
                    <div className="dropdown-menu"
                    aria-labelledby="dropdownMenuInput">
                        {this.state.movies.map(movie => {
                                return (<a className="dropdown-item" href="#">{movie.title}</a>)
                            })
                        }
                    </div>
                   
                </div>
                </div>

            </div>
     
             );  
          
        }
}

export default SearchBar;