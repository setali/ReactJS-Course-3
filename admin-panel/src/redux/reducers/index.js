import {combineReducers} from 'redux'
import {persons} from './person'
import {posts} from './post'

export default combineReducers({
    persons,
    posts
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