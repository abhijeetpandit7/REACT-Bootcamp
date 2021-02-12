import axios from 'axios';

const instance = axios.create({
    baseURL: "https://burger-builder-aaf92-default-rtdb.firebaseio.com/"
});

export default instance;