import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '7fca3b99f9c8405a8f3e23fe977d8c77'
    }
})