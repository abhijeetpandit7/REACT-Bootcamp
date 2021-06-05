import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

axios.defaults.baseURL = "http://jsonplaceholder.typicode.com";
axios.defaults.headers.common['Authorization'] = "MY AUTH TOKEN";
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

axios.interceptors.request.use(request => {
    console.log(request)
    // Edit request config here
    return request
}, error => {
    console.log(error);
    return Promise.reject(error)
})

axios.interceptors.response.use(response => {
    console.log(response)
    // Edit response config here
    return response
}, error => {
    console.log(error);
    return Promise.reject(error)
})

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();