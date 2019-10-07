import React from 'react';

class FilmDetails extends React.Component {

    render () {

    return (
        <div className="additional-details">
  
                <span className="genre-list">
                {this.props.movie?this.props.movie.genres.map(genre => {
                                    return genre.name;
                                }).join(" ")
                            :""}</span>
                <div className="row release-details">
                  <div className="col-6"> Director: <span className="meta-data">Damien Chazelle</span></div>
                  <div className="col-6"> Vote Average: <span className="meta-data">{this.props.movie?this.props.movie.vote_average : "?"}</span></div>
                </div>
                <div className="row release-details">  
                  <div className="col-6"> Original Release: <span className="meta-data">{this.props.movie?this.props.movie.release_date : "?"}</span></div>
                  <div className="col-6"> Running Time: <span className="meta-data">{this.props.movie?this.props.movie.runtime+" min" : "?"}</span> </div>
                </div>
        </div>
     
             );  
          
        }
}

export default FilmDetails;