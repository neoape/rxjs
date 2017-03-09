import $ from 'jquery';
import Rx from 'rxjs/Rx';

// const myPromise = new Promise((resolve, reject) => {
//     console.log('creating promise')
//     setTimeout(() => {
//         resolve('settimeout')
//     }, 2000)
// })

// myPromise.then( res => {
//     console.log(res)
// })

// const promiseStream = Rx.Observable.fromPromise(myPromise)

// promiseStream.subscribe(
//     e => {
//         console.log(e)
//     },
//     err => {
//         console.log(err)
//     },
//     res => {
//         console.log('completed')
//     }
// )

function getUser(username) {
    return $.ajax({
        url: 'https://api.github.com/users/'+username,
        dataType: 'json'
    }).promise()
}


const inputStream = Rx.Observable.fromEvent($('#input'), 'keyup')
inputStream.subscribe(
    e => {
        Rx.Observable.fromPromise(getUser(e.target.value))
            .subscribe( data => {
                $('#name').text(data.login)
                $('#blog').text(data.blog)
                $('#repos').text(data.repos_url)
            })
    },
    err => {
        console.log(err)
    },
    res => {
        console.log('completed')
    }
)