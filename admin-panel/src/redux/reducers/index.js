import {combineReducers} from 'redux'
import {persons, person} from './person'
import {posts, post} from './post'

export default combineReducers({
    person,
    persons,
    posts,
    post
})


// export default function reducer(state = [], action) {
//     switch (action.type) {
//         case 'PERSONS':
//             return action.payload
//
//         case 'POSTS':
//             return action.payload
//
//         default:
//             return state
//     }
// }