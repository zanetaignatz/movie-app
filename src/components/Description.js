import React from 'react';

class Description extends React.Component {

    render () {
      let data = this.props.data

    return (
            <div className="description-container">
                <h2>{data.title}</h2>
              <span className="tagline">{data.tagline}</span>
              <p>{data.movie_description}</p>
            </div>  
             );  
          
        }
}

export default Description;