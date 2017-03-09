import $ from 'jquery';
import Rx from 'rxjs/Rx';

// const interval = Rx.Observable.interval(100).take(5)

// interval.subscribe(
//         e => {
//             console.log(e)
//         },
//         err => {
//             console.log(err)
//         },
//         res => {
//             console.log('completed')
//         }
//     )

// const interval = Rx.Observable.interval(5000, 2000).take(5)

// interval.subscribe(
//         e => {
//             console.log(e)
//         },
//         err => {
//             console.log(err)
//         },
//         res => {
//             console.log('completed')
//         }
//     )

const interval = Rx.Observable.range(10, 5).take(5)

interval.subscribe(
        e => {
            console.log(e)
        },
        err => {
            console.log(err)
        },
        res => {
            console.log('completed')
        }
    )