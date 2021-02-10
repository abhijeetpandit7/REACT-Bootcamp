import axios from 'axios'

const instance = axios.create({
    baseURL: "http://jsonplaceholder.typicode.com"
})

instance.defaults.headers.common['Authorization'] = "AUTH TOKEN INSTANCE";

instance.interceptors.request.use(request => {
    console.log(request)
    // Edit request config here
    return request
}, error => {
    console.log(error);
    return Promise.reject(error)
})

export default instance;