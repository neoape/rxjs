import $ from 'jquery';
import Rx from 'rxjs/Rx';

// Rx.Observable.interval(1000)
//     .merge(Rx.Observable.interval(500))
//     .take(25)
//     .subscribe(x => console.log(x))

// const source1$ = Rx.Observable.interval(2000)
//     .map(v => 'Merge1: '+v)

// const source2$ = Rx.Observable.interval(500)
//     .map(v => 'Merge2: '+v)

// Rx.Observable.merge(source1$, source2$)
//     .take(25)
//     .subscribe(x => console.log(x))

// Rx.Observable.of('Hello')
//     .mergeMap(x => {
//         return Rx.Observable.of(x+' World')
//     })
//     .subscribe(x => console.log(x))

function getUser(username) {
    return $.ajax({
        url: 'https://api.github.com/users/'+username,
        dataType: 'json'
    }).promise()
}


// const inputStream = Rx.Observable.fromEvent($('#input'), 'keyup')
// inputStream.subscribe(
//     e => {
//         Rx.Observable.fromPromise(getUser(e.target.value))
//             .subscribe( data => {
//                 $('#name').text(data.login)
//                 $('#blog').text(data.blog)
//                 $('#repos').text(data.repos_url)
//             })
//     }
// )

const inputStream = Rx.Observable.fromEvent($('#input'), 'keyup')
    .map(e => e.target.value)
    .switchMap(v => {
       return Rx.Observable.fromPromise(getUser(v))
    })

inputStream.subscribe( data => {
                $('#name').text(data.login)
                $('#blog').text(data.blog)
                $('#repos').text(data.repos_url)
            })