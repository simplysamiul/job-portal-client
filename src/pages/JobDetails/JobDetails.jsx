import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loader from '../custome/Loader';
import ShowJobDetails from '../shared/ShowJobDetails';

const JobDetails = () => {
    const { id } = useParams();

    // get specific data
    const [job, setJob] = useState({});
    const [dataLoading, setDataLoadiong] = useState(false);

    useEffect(() => {
        setDataLoadiong(true);
        fetch(`https://job-portal-server-black-beta.vercel.app/jobs/${id}`)
            .then(res => res.json())
            .then(data => {
                setJob(data)
                setDataLoadiong(false);
            }).catch(err => {
                console.log(err);
            })
    }, [id])
    return (
        <div>
            {/* job details */}
            {dataLoading ? <Loader />

                : <ShowJobDetails job={job} />}
        </div>
    );
};

export default JobDetails;

