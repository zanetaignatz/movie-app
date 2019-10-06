import React from 'react';

const Description = (props) => {

    return (
            <div className="description-container">
                <h2>{props.movie || "Pierwszy człowiek"}</h2>
              <span className="tagline">"Pierwszy człowiek" to fascynująca historia pierwszego załogowego lotu na Księżyc.</span>
              <p>Opowiada o Neilu Armstrongu, który jako pierwszy postawił stopę na Księżycu. Jesteśmy świadkami wyczerpujących przygotowań do misji , małych osiągnięć, porażających klęsk - wszystkiego co doprowadziło do ostatecznego sukcesu. A my widzowie, siedzący przed telewizorami będziemy musieli odpowiedzieć sobie na pytanie - czy ten sukces wart był ceny jaką trzeba było zapłacić...</p>
            </div>  
             );  
          
  
}

export default Description;