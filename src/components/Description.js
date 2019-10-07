import React from 'react';

const Description = (props) => {

    return (
            <div className="description-container">
                <h2>{props.movie? props.movie.original_title : "Pierwszy człowiek"}</h2>
              <span className="tagline">{props.movie? props.movie.overview : ""}</span>
             
            </div>  
             );  
          
  
}

export default Description;