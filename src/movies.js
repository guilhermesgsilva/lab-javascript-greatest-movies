
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const onlyDirectors = movies.map((movie) => {
    return movie.director;
  });
  return onlyDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const onlyDrama = movies.filter((movie) => {
    return movie.director === "Steven Spielberg" && movie.genre.includes("Drama");
  });
  return onlyDrama.length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
   return 0;
  }
  const result = movies.reduce((accumulator, currentValue) => {
    if (typeof currentValue.score !== "number") {
      currentValue.score = 0;
    }
    return accumulator + currentValue.score;
  }, 0);
  return Number((result / movies.length).toFixed(2));
};

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const onlyDrama = movies.filter((movie) => {
    return movie.genre.includes("Drama");
  });
  // if (onlyDrama.length === 0) {
  //   return 0;
  //  }
  // const result = onlyDrama.reduce((accumulator, currentValue) => {
  //   if (typeof currentValue.score !== "number") {
  //     currentValue.score = 0;
  //   }
  //   return accumulator + currentValue.score;
  // }, 0);
  // return Number((result / onlyDrama.length).toFixed(2));
  return scoresAverage(onlyDrama);
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
