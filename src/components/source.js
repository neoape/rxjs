import $ from 'jquery';
import Rx from 'rxjs/Rx';

const sourceStream = new Rx.Observable( observer => {
    console.log('first rx')

    observer.next('second rx')
    observer.next('third rx')

    observer.error(new Error('error'))

    setTimeout(() => {
        observer.next('fourth rx')   
         observer.complete()
    }, 1500)
})

sourceStream
    .catch(err => Rx.Observable.of(err))
    .subscribe(
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