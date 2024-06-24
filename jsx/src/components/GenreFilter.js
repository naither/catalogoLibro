import React from 'react';

const genres = ['All', 'Ficcion', 'Non-Ficcion', 'Fantasia', 'Siencia Ficcion', 'Misterio'];

const GenreFilter = ({ setFilter }) => {
  return (
    <div className="genre-filter">
      {genres.map(genre => (
        <button key={genre} onClick={() => setFilter(genre)}>
          {genre}
        </button>
      ))}
    </div>
  );
};

export default GenreFilter;
