const personalMomieDB = {
  count: 0,
  movies: {},
  actors: {},
  geners: [],
  privat: false,
  start: function () {
    personalMomieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    while (
      personalMomieDB.count == "" ||
      personalMomieDB.count == null ||
      isNaN(personalMomieDB.count)
    ) {
      personalMomieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },
  rememberMyFilms: function () {
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
  },
  detectPersonalLevel: function () {
    if (personalMomieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMomieDB.count >= 10 && personalMomieDB.count < 30) {
      console.log("Вы классический зритель");
    } else if (personalMomieDB.count >= 30) {
      console.log("Вы киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMomieDB);
    }
  },

  toggleVisibleMyDB: function () {
    if (personalMomieDB.privat) {
      personalMomieDB.privat = false;
    } else {
      personalMomieDB.privat = true;
    }
  },

  writeYouGeners: function () {
    for (let i = 1; i < 2; i++) {
      // let genre = prompt(`Ваш любимый жанр под номером ${i}`);

      // if (genre === "" || genre == null) {
      //   console.log("Вы ввели некорректные данные");
      //   i--;
      // } else {
      //   personalMomieDB.geners[i - 1] = genre;
      // }
      let genres = prompt(`Введите ваши любимые жанры через запятую ${i}`);

      if (genres === "" || genres == null) {
        console.log("Вы ввели некорректные данные");
        i--;
      } else {
        personalMomieDB.geners = genres.split(", ");
        personalMomieDB.geners.sort();
      }
    }

    personalMomieDB.geners.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item} `);
    });
  },
};
