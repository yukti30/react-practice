import axios, { type AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '7fca3b99f9c8405a8f3e23fe977d8c77'
    }
})


export interface FetchResponse<T>{
    count: number;
    results: T[];
    next : string | null;
}

class APIClient<T> {
    endpoint : string;
    constructor(endpoint: string){
        this.endpoint = endpoint;
    }

    getALL(config : AxiosRequestConfig){
        return axiosInstance
        .get<FetchResponse<T>>(this.endpoint, config)
        .then(res => res.data);
    }
    get = (id : number | string) => {
        return axiosInstance.get<T>(this.endpoint + "/" + id).then(res => res.data)
    }
}

export default APIClient;