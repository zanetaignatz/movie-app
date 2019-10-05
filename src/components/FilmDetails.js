import React from 'react';
let backgroundImg;

class FilmDetails extends React.Component {

    render () {
      let data = this.props.data


      let movieType = data.genre,
          movieTypeList = dataFromListToString(movieType),
          poster = 'https://image.tmdb.org/t/p/w500' + data.poster;
          backgroundImg = 'https://image.tmdb.org/t/p/original' + data.backdrop;

      //TODO if, jezeli zwracalby undefined lub nulla -> poster & movieTypeList & data.avg_vote

    return (
        <div className="additional-details">

                <span className="genre-list">{movieTypeList}</span>
                <div className="row release-details">
                  <div className="col-6"> Budget: <span className="meta-data">{data.budget}</span></div>
                  <div className="col-6"> Vote Average: <span className="meta-data">{data.avg_vote}</span></div>
                </div>
                <div className="row release-details">  
                  <div className="col-6"> Original Release: <span className="meta-data">{data.release}</span></div>
                  <div className="col-6"> Running Time: <span className="meta-data">{data.run_time}</span> </div>
                </div>
                <div>
                  <img className='poster' src={poster}/>
                </div>
        </div>
        // przy posterze mozliwe, ze bedzie potrzebne jeszcze id
     
             );  
          
        }
        componentDidUpdate() {
          document.body.style.backgroundImage = 'url(' + backgroundImg + ')';  // Jakby nie dzialalo, mozliwe, ze tutaj bedzie style.background
        }
}
function dataFromListToString(listOfData) {
  let dataList = [],
  resultString;
  if(listOfData !== undefined) {
    listOfData.forEach(function(item) {
      dataList.push(item.name);
    });
  }
  resultString = dataList.join(', ');
  return resultString;
}

export default FilmDetails;