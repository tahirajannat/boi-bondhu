import React, { Fragment, useEffect, useState } from "react";

const movieData = [
  {
    title: "movie 1",
    genre: ["action", "thriller"],
  },
  {
    title: "movie 2",
    genre: ["comedy", "drama"],
  },
  {
    title: "movie 3",
    genre: ["comedy", "action"],
  },
  { title: "movie 4", genre: "thriller" },
  {
    title: "movie 5",
    genre: "comedy",
  },
  {
    title: "movie 6",
    genre: "action",
  },
  {
    title: "movie 7",
    genre: "drama",
  },
];

const movie = [
  { genre: "thriller" },
  { genre: "comedy" },
  { genre: "action" },
  { genre: "drama" },
];

const FilterMethod01 = () => {
  const [genre, setGenre] = useState([]);
  const [filteredGenre, setFilteredGenre] = useState([]);

  const handleChange = (e) => {
    if (e.target.checked) {
      setGenre([...genre, e.target.value]);
    } else {
      setGenre(genre.filter((id) => id !== e.target.value));
    }
  };

  useEffect(() => {
    if (genre.length === 0) {
      setFilteredGenre(movieData);
    } else {
      setFilteredGenre(
        movieData.filter((movie) =>
          genre.some((category) => [movie.genre].flat().includes(category))
        )
      );
    }
  }, [genre]);

  return (
    <Fragment>
      <input value={genre} fullWidth onChange={handleChange} />

      {movie.map((movie) => (
        <div class="flex items-center">
          <input
            id="filter-mobile-color-0"
            name="color[]"
            value={movie.genre}
            type="checkbox"
            onChange={handleChange}
            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
          <label class="ml-3 min-w-0 flex-1 text-gray-500">{movie.genre}</label>
        </div>
      ))}

      {filteredGenre.map((movie, index) => (
        <div style={{ background: "lightgreen", marginBottom: "5px" }}>
          <h2 gutterBottom variant="h6" noWrap>
            title: {movie.title}
          </h2>
          <h4 gutterBottom variant="h6" noWrap>
            genre: {movie.genre}
          </h4>
        </div>
      ))}
    </Fragment>
  );
};

export default FilterMethod01;
