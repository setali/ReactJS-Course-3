import axios from 'axios'
import {BASE_URL} from './Constants'

axios.defaults.baseURL = BASE_URL
axios.defaults.headers.common.Accept = 'application/json'
axios.defaults.headers.common['Content-type'] = 'application/json'

const request = axios.create()

export default request
