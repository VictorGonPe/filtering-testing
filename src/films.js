import { movies } from "./data.js";

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map(item => item.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter(item => item.director.toLowerCase().trim() === director.toLowerCase().trim());
  console.log("EXERCICE 2 ->", result.map(item => item.title));
  return result.map(item => item.title);
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const arrayDirector = array.filter(item => item.director.toLowerCase().trim() === director.toLowerCase().trim());
  let average = arrayDirector.reduce((acumulador, film) => acumulador + film.score, 0) / arrayDirector.length;
  console.log("EXERCICE 3 ->", average.toFixed(2))
  return average.toFixed(2);
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const arrayCopy = [...array];
  let titles = arrayCopy
    .map(film => film.title)
    .sort();  
  console.log("EXERCICE 4 ->", titles.slice(0,20));
  return titles.slice(0,20);
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const arrayCopy = [...array];
  let titles = arrayCopy.sort((a,b) => {
    if(a.year !== b.year){
      return a.year - b.year;
    }else{
      return a.title.localeCompare(b.title);
    }
  }); 
    console.log("EXERCICE 5 ->", titles);
}
// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  const formatGenre = genre.toLowerCase().trim();

  const filmsGenre = array.filter(film =>
    film.genre.some(gen => gen.toLowerCase().trim() === formatGenre)
  );
  
  if (filmsGenre.lenght === 0) return 0;
  
  const totalScore = filmsGenre.reduce((sum, film) => sum + film.score, 0);
  const average = totalScore / filmsGenre.length;

  return average.toFixed(2); 
}

console.log("EXERCICE 6 -> ",moviesAverageByCategory(movies,'crime'));


// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
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
