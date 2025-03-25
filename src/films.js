const movies = require('./data');

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(item => item.director);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  if (!Array.isArray(array) || typeof director !== 'string') return [];
  let result = array.filter(item => item.director.toLowerCase().trim() === director.toLowerCase().trim());
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const arrayDirector = array.filter(item => item.director.toLowerCase().trim() === director.toLowerCase().trim());
  const average = arrayDirector.reduce((acumulador, film) => acumulador + film.score, 0) / arrayDirector.length;
  return Number(average.toFixed(2));
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const arrayCopy = [...array];
  let titles = arrayCopy
    .map(film => film.title)
    .sort();
  return titles.slice(0, 20);
}

function orderByYear(array) {
  const arrayCopy = [...array];
  let titles = arrayCopy.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  });
 
  return titles;
}

function moviesAverageByCategory(array, genre) {
  const formatGenre = genre.toLowerCase().trim();

  const filmsGenre = array.filter(film =>
    film.genre.some(gen => gen.toLowerCase().trim() === formatGenre)
  );

  if (filmsGenre.length === 0) return 0;

  const totalScore = filmsGenre.reduce((sum, film) => sum + film.score, 0);
  const average = totalScore / filmsGenre.length;

  return average.toFixed(2);
}

function hoursToMinutes(array) {
  const regex1 = /(\d+)h/;
  const regex2 = /(\d+)min/;

  const arrayCopy = array.map(film => {
    const hoursMatch = film.duration.match(regex1);
    const minMatch = film.duration.match(regex2);
    const hours = hoursMatch ? hoursMatch[1] : 0;
    const min = minMatch ? minMatch[1] : 0;
    const totalMin = parseInt(hours) * 60 + parseInt(min);

    return { ...film, duration: totalMin };
  })
  return arrayCopy;
}

function bestFilmOfYear(array, year) {
  const bestFilm = array.filter(film => film.year === year);

  if (bestFilm.length === 0) return [];

  const theBest = bestFilm.reduce((max, current) => {
    return current.score > max.score ? current : max;
  })
  return [theBest];
}


if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
