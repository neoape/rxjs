import $ from 'jquery';
import Rx from 'rxjs/Rx';

// const source$ = Rx.Observable.interval(1000)
//     .take(5)
//     .map(v => v + 1)

// source$.subscribe(v => console.log(v))

// const source$ = Rx.Observable.from(['roma', 'alina', 'blabla'])
//     .map(v => v.toUpperCase())

// source$.subscribe(v => console.log(v))

// function getUser(username) {
//     return $.ajax({
//         url: 'https://api.github.com/users/'+username,
//         dataType: 'json'
//     }).promise()
// }


// Rx.Observable.fromPromise(getUser('neoape'))
//     .subscribe( data => {
//         console.log(data)
//     })


const users = [
    {
        name: 'Mike', 
        age: 22
    },
    {
        name: 'Pike', 
        age: 24
    },
    {
        name: 'Chack', 
        age: 32
    },
    {
        name: 'Fuck', 
        age: 55
    }
]

const users$ = Rx.Observable.from(users).pluck('name')

users$.subscribe(x => console.log(x))