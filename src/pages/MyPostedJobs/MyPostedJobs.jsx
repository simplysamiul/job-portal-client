import React, { Suspense } from 'react';
import useAuth from '../../hooks/useAuth';
import PostedJobLists from './PostedJobLists';
import Loader from '../custome/Loader';
import { jobsCreatedByPromise } from '../../api/jobsApi';
// import useJobApi from '../../api/useJobApi';

const MyPostedJobs = () => {
    const { user } = useAuth();
    // const {jobsCreatedByPromise} = useJobApi();
    return (
        <div className='mt-26 mb-26'>
            <Suspense fallback={<Loader />}>
                <PostedJobLists jobsCreatedByPromise={jobsCreatedByPromise(user.email, user.accessToken)} />
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;