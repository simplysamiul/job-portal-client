import React, { Suspense } from 'react';
import useAuth from '../../hooks/useAuth';
import Loader from '../custome/Loader';
import ApplicationsList from './ApplicationsList';
// import myApplicationsPromise from '../../api/applicationsApi';
import useApplicationApi from '../../api/useApplicationApi';



const MyApplications = () => {
    const {user} = useAuth();
    const {myApplicationsPromise} = useApplicationApi()
    
    return (
        <div className='mt-15 mb-26'>
            <Suspense fallback={<Loader />}>
                <ApplicationsList myApplicationsPromise ={myApplicationsPromise(user.email, user.accessToken)} />
            </Suspense>
        </div>
    );
};

export default MyApplications;