import axios from 'axios';
import useAuth from './useAuth';



const axiosInstance = axios.create({
    baseURL: "https://job-portal-server-black-beta.vercel.app"
});


const useAxiosSecure = () => {

    const { user, logOut } = useAuth();

    // request interceptor
    axiosInstance.interceptors.request.use((config) => {
        config.headers.authorization = `Bearer ${user.accessToken}`;
        return config;
    })

    // response intereptor
    axiosInstance.interceptors.response.use((response) => {
        return response;
    }, (error) => {
        if (error.status === 401) {
            console.log("log out for 401")
            logOut();
        }
        return Promise.reject(error)
    })

    return axiosInstance;
};

export default useAxiosSecure;