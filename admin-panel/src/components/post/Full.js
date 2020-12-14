import {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import {getPost} from '../../redux/actions/post'

function Full() {
    const {id} = useParams()

    const dispatch = useDispatch()
    const item = useSelector(state => state.post)

    useEffect(() => { dispatch(getPost(id)) }, [])

    return (
        <div>
            {item.title}
        </div>
    )
}

export default Full