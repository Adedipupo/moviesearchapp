import React from 'react';

const Movie = ({movie}) => {
return(
  <div className="Movie">
     <h2>{movie.Title}</h2>
     <img 
       width="200"
       alt={`The movie tilted: ${movie.Title} `}
       src={poster}
     />
  </div>
)
}

export default Movie;