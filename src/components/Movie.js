import React from 'react';

const Movie = ({movie}) => {
    const poster =
        movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
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