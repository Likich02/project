let incr = 10,
  decr = 10;
let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}
start();
const personalMomieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  geners: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Один из послендних просмотренных фильмов?", ""),
      b = prompt("На сколько оцените его?", "");
    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      personalMomieDB.movies[a] = b;
      console.log("done");
    } else {
      console.log("eror");
      i--;
    }
  }
}
rememberMyFilms();

function detectPersonalLevel() {
  if (personalMomieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMomieDB.count >= 10 && personalMomieDB.count < 30) {
    console.log("Вы классический зритель");
  } else if (personalMomieDB.count >= 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
}

detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMomieDB);
    12;
  }
}
showMyDB();

function writeYouGeners() {
  for (let i = 1; i <= 3; i++) {
    personalMomieDB.geners[i - 1] = promt(`Ваш любимый жанр под номером ${i}`);
  }
}

writeYouGeners();

// console.log(++incr);
// console.log(--decr);

// // c = prompt("Один из послендних просмотренных фильмов?", ""),
// // d = prompt("На сколько оцените его?", "");

// console.log(5 % 3);
// personalMomieDB.movies[a] = b;
// personalMomieDB.movies[c] = d;

// console.log(2 * 4 === "8");

// const isChecked = true,
//   isClose = false;

// console.log(isChecked || isClose);
console.log(personalMomieDB);
