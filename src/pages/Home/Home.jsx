import { useEffect, useState } from 'react';
import Banner from './Banner';
import Jobs from './Jobs';
import Loader from '../custome/Loader';

const Home = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLoading, setDataLoading] = useState(false);
    useEffect(() => {
        setDataLoading(true);
        fetch("http://localhost:5000/jobs")
            .then(res => res.json())
            .then(data => {
                setJobs(data);
                setDataLoading(false);
            }).catch(err => {
                console.log(err);
            })
    }, [])
    return (
        <div>
            <Banner />
            {/* all jobs */}
            {dataLoading ? <Loader />
            :<div className='my-8'>
                {/* jobs section header */}
                <div className='text-center'>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-second'>Jobs of the day</h2>
                    <p className='text-gray-600 text-lg mt-4 mb-8'>Search and connect with the right candidates faster.</p>

                    {/*  */}
                </div>
                
                {/* all jobs */}
                <Jobs jobs={jobs} />
            </div>}
        </div>
    );
};

export default Home;