import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SpecificJobApplicationList = () => {
    const { job_id } = useParams();

    // get specific data
    const [applicantsList, setApplicantsList] = useState([]);
    const [dataLoading, setDataLoadiong] = useState(false);

    useEffect(() => {
        setDataLoadiong(true);
        fetch(`http://localhost:5000/applications/jobs/${job_id}`)
            .then(res => res.json())
            .then(data => {
                setApplicantsList(data)
                setDataLoadiong(false);
            }).catch(err => {
                console.log(err);
            })
    }, [job_id])

    console.log(applicantsList)
    return (
        <div>
            <h2>{job_id}</h2>
        </div>
    );
};

export default SpecificJobApplicationList;