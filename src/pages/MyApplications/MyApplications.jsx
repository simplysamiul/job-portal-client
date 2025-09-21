import React, { Suspense } from 'react';
import useAuth from '../../hooks/useAuth';
import Loader from '../custome/Loader';
import ApplicationsList from './ApplicationsList';
import myApplicationsPromise from '../../api/applicationsApi';



const MyApplications = () => {
    const {user} = useAuth();
    return (
        <div className='mt-15 mb-26'>
            <h2 className='text-center text-second text-4xl font-bold mb-12'>Application List</h2>
            <Suspense fallback={<Loader />}>
                <ApplicationsList myApplicationsPromise ={myApplicationsPromise(user.email)} />
            </Suspense>
        </div>
    );
};

export default MyApplications;