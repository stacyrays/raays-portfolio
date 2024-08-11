// api top connection layer
import axios from 'axios';

// set default base for backend url
const axiosParams = {
    baseURL: 
        process.env.NODE_ENV === "development" ? "http://localhost:9090" : "/",
};

// create instance
const axiosInstance = axios.create(axiosParams);

// setup axios http methods
const api = axios => {
    return {
        get: (url, config = {}) => axios.get(url, config),
        delete: (url, config = {}) => axios.delete(url, config),
        post: (url, body, config = {}) => axios.post(url, body, config),
        patch: (url, body, config = {}) => axios.patch(url, body, config),
        put: (url, body, config = {}) => axios.put(url, body, config),
    };
};

export default api(axiosInstance);