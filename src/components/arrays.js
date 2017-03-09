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

const postsList = $('#postsList')
const posts = [
    {
        title: "One",
        body: "text one"
    },
    {
        title: "Two",
        body: "text two"
    },
    {
        title: "Three",
        body: "text three"
    },
    {
        title: "Four",
        body: "text four"
    }
]
const postsStream = Rx.Observable.from(posts)
postsStream.subscribe(
    post => {
        postsList.append(`<li><h4>${post.title}</h4><p>${post.body}</p></li>`)
    },
    err => {
        console.log(err)
    },
    res => {
        console.log('completed')
    }
)
