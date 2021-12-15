    // src/components/contacts.js

    import React from 'react'

    const Contacts = ({ movie }) => {
      return (
        <div>
          {<div class="movie">
              <div class="movie-body">
                <img class="movie-image" src={movie.image} alt={movie.title} width="400" height="600"></img>
                <h3 class="movie-title">{movie.title} ({movie.year})</h3>
                <button class="movie-button" onClick={refreshPage}>Choose a new movie</button>
              </div>
            </div>}
        </div>
      )
    };

    function refreshPage() {
        window.location.reload();
    }

    export default Contacts