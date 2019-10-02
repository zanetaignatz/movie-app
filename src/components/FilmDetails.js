import React from 'react';

class FilmDetails extends React.Component {

    render () {

    return (
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
     
             );  
          
        }
}

export default FilmDetails;