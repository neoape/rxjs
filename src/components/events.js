import $ from 'jquery';
import Rx from 'rxjs/Rx';

const btn = $('#btn')
const input = $('#input')
const output = $('#output')

const btnStream = Rx.Observable.fromEvent(btn, 'click')

btnStream.subscribe(
    (e) => {
        console.log('clicked', btnStream)
    },
    (err) => {
        console.log('error', err)
    },
    (res) => {
        console.log('success', res)
    }
)

const inputStream = Rx.Observable.fromEvent(input, 'keyup')

inputStream.subscribe(
    (e) => {
        output.html(e.target.value)
    },
    (err) => {
        console.log('error', err)
    },
    (res) => {
        console.log('success', res)
    }
)

const moveStream = Rx.Observable.fromEvent(document, 'mousemove')

moveStream.subscribe(
    (e) => {
        output.html('X: '+e.clientX + 'Y: '+e.clientY)
    },
    (err) => {
        console.log('error', err)
    },
    (res) => {
        console.log('success', res)
    }
)