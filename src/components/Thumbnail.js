import React from 'react';

class Thumbnail extends React.Component {

    render () {

    return (
        <div className="poster-container col-11 col-md-5 col-lg-5 ">
              <img className='poster' alt="film poster" src="https://image.tmdb.org/t/p/w1280/i91mfvFcPPlaegcbOyjGgiWfZzh.jpg"/>
        </div>
     
             );  
          
        }
}

export default Thumbnail;