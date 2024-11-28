import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar' 123456789123 }
});

export default instance;
