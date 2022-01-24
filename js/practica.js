'use strict';

const numberOfffiles = +prompt ("Сколько фильмов вы уже смотрели?", "");

const personalMovie08 = {
count: numberOfffiles,
movies: {},
actors: {},
genres: [],
privat: false
};

const a = prompt("Один из последних просмотренных фильмов", ""),
b = prompt("На сколько оцените его?", ""),
z = prompt("Один из последних просмотренных фильмов", ""),
d = prompt("На сколько оцените его?", "");

personalMovie08.movies[a] = b;
personalMovie08.movies[z] = d;

console.log(personalMovie08);