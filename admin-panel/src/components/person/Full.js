import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import request from "../../tools/Request";
import {setPerson} from '../../redux/actions/person'

function Full() {
    // const [item, setItem] = useState({})

    const {id} = useParams()

    const item = useSelector(state => state.person)

    const dispatch = useDispatch()

    useEffect(() => {
        request(`/users/${id}`).then(response => dispatch(setPerson(response.data)))
    }, [])


    return (
        <div>
            <h1>{item.name}</h1>
        </div>
    )
}

export default Full