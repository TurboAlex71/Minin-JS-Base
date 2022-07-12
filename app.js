//1 Переменные
// // variable
// // camelCase
// var name = 'Frolov'
// const firstName = 'Alex'
// //const lastName = 'Frolov' // string
// //const age = 30 // number
// const isProgrammer = true // boolean
//
// console.log(isProgrammer)
//
// const _ = 'private'
// const $ = 'some value'
//
// // const if = 'mkef' // err
// const withNum5 = '5'
// //const 5withNum = '5' // err
//
// // 2 Мутирование
// //console.log('Имя человека: ' + firstName + ', а возраст человека: ' + age)//
// //console.log(age.toString())//
// //alert('Имя человека: ' + firstName + ', а возраст человека: ' + age)
// //const lastName = prompt('Ведите фамилию')
// //alert(firstName +' ' + lastName)
//
// // 3 Операторы
// let currentYear = 2022
// const birthYear = 1992
//
// //const age = currentYear - birthYear
// //console.log(age)
//
// const a = 10
// const b = 5
//
// let c = 32
// // //c = c + a
// // c +=a
// // c -=a
// // c *=a
// // c /=a
// //
// // console.log(a + b)
// // console.log(a - b)
// // console.log(a * b)
// // console.log(a / b)
// // //console.log(currentYear++)//
// // console.log(++currentYear)
// // //console.log(currentYear)//
// // console.log(--currentYear)
// // console.log(c)

// 4 Типы данных
// const isProgrammet = true
// const name = 'Alex'
// const age = 30
// let x
// console.log(typeof isProgrammet)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(null)
//
// 5 Приоритет оператора
// const fullAge = 26
// const birthYear = 1992
// const currentYear = 2022
//
// // > < >= <= //
// const isFullAge = currentYear - birthYear >= fullAge // 30>31 => true
// console.log(isFullAge)

// 6 Условные операторы
// const courseStatus = 'pending'// ready, fail, pendi
//
// if (courseStatus === 'ready') {
//     console.log('Курс уже готов и его можно проходить')
// } else if (courseStatus === 'pending') {
//     console.log('Курс находится в процессе разработки')
// } else {
//     console.log('Курс не получился')
// }

//
// const isReady = true
//
// // if (isReady) {
// //     console.log('Всё готово')
// // } else {
// //     console.log('Всё не готово')
// // }
//
// // Тернарное выражение
// isReady ? console.log('Всё готово') : console.log('Всё не готово')
//
// // const num1 = 42 // number
// const num2 = '42' // string
//
// console.log(num1 === num2)

// 7 Булевая логика

// 8 Функции
//
// function calculateAge(year) {
// return 2022 - year
// }
//
// // const  myAge = calculateAge(1998)
// // console.log(myAge)
//
// // console.log(calculateAge(1993))
// // console.log(calculateAge(1995))
// // console.log(calculateAge(2004))
//
// function logInfoAbout(name, year) {
// const age = calculateAge(year)
//
//     if (age > 0) {
//         console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age)
//     } else {
//         console.log('Вообще-то это уже будущее!')
//     }}
//
// //     // console.log(name,age)
// // console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age)
// // }
//
// logInfoAbout('Елена',1982)
// logInfoAbout('Алексей',2023)

// 9 Массивы
// const cars = ['Мазда', 'Мерседес', 'Форд']
// // console.log(cars)
// // const cars = new Array('Мазда', 'Мерседес', 'Форд')
// console.log(cars.length)
// console.log(cars[0])
// console.log(cars[1])
// console.log(cars[3])
//
// cars[0] = 'Porsche'
// cars[cars.length] = 'Мазда'
// // cars[3] = 'Мазда'
// console.log(cars)

// 10 Циклы
// const cars= ['Мазда', 'Мерседес', 'Форд', 'Porsche']
//
// // for (let i = 0; i < cars.length; i++) {
// //     // console.log(i)
// // const car = cars[i]
// //     console.log(car)
// // }
//
// for (let car of cars) {
//     console.log(car)
// }

// 11 Объекты
const person = {
    firstName:'Alex',
    lastName:'Frolov',
    year:'1992',
    languages:['Ru','En'],
    hasWife: true,
    greet: function () {
        console.log('greet from person')
    }

}

console.log(person.firstName)
console.log(person['lastName'])
// const key = 'languages'
const key = 'year'
console.log(person[key])
person.hasWife = true
console.log(person)
person.isProgrammer = true
person.greet()