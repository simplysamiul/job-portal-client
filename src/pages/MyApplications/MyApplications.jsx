import React, { Suspense } from 'react';
import useAuth from '../../hooks/useAuth';
import Loader from '../custome/Loader';
import ApplicationsList from './ApplicationsList';
import myApplicationsPromise from '../../api/applicationsApi';



const MyApplications = () => {
    const {user} = useAuth();
    return (
        <div>
            <Suspense fallback={<Loader />}>
                <ApplicationsList myApplicationsPromise ={myApplicationsPromise(user.email)} />
            </Suspense>
        </div>
    );
};

export default MyApplications;