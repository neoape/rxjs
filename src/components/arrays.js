import $ from 'jquery';
import Rx from 'rxjs/Rx';

const numbers = [1,2,3,4,5]

const numbersStream = Rx.Observable.from(numbers)

numbersStream.subscribe(
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