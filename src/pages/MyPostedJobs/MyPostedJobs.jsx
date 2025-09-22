import React, { Suspense } from 'react';
import useAuth from '../../hooks/useAuth';
import PostedJobLists from './PostedJobLists';
import { jobsCreatedByPromise } from '../../api/jobsApi';
import Loader from '../custome/Loader';

const MyPostedJobs = () => {
    const { user } = useAuth();
    return (
        <div className='mt-26 mb-26'>
            <Suspense fallback={<Loader />}>
                <PostedJobLists jobsCreatedByPromise={jobsCreatedByPromise(user.email)} />
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;