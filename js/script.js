const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMomieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  geners: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  const a = prompt("Один из послендних просмотренных фильмов?", ""),
    b = prompt("На сколько оцените его?", "");
  if (a != null && b != null && a != "" && b != "" && a.length < 50) {
    personalMomieDB.movies[a] = b;
    console.log("done");
  } else {
    console.log("Error");
    i--;
  }
}

if (personalMomieDB.count < 10) {
  console.log("Просмотренно мало фильмов");
} else if (personalMomieDB.count >= 10 && personalMomieDB.count < 30) {
  console.log("Вы классический зритель");
} else if (personalMomieDB.count >= 30) {
  console.log("Вы киноман");
} else {
  console.log("Ошибка");
}

console.log(personalMomieDB);
