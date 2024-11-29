import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar' 1234567891234 }
    // headers: {'X-Custom-Header': 'foobar' 123456}
});

export default instance;
