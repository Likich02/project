const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMomieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  geners: [],
  privat: false,
};

const a = prompt("Один из послендних просмотренных фильмов?", ""),
  b = prompt("На сколько оцените его?", ""),
  c = prompt("Один из послендних просмотренных фильмов?", ""),
  d = prompt("На сколько оцените его?", "");

personalMomieDB.movies[a] = b;
personalMomieDB.movies[c] = d;

console.log(personalMomieDB);
