import useAxiosSecure from '../hooks/useAxiosSecure';

const useJobApi = () => {
    const axiosSecure = useAxiosSecure();
    const jobsCreatedByPromise = (email) => {
        return axiosSecure.get(`/jobs/applications?email=${email}`).then(res => res.data)
    }
    return {
        jobsCreatedByPromise
    };
};

export default useJobApi;