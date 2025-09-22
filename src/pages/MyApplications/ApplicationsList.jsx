import React, { use } from 'react';
import JobApplicationRow from './JobApplicationRow';

const ApplicationsList = ({ myApplicationsPromise }) => {
    const applications = use(myApplicationsPromise);
    return (
        <div>
            {applications.length > 0 ? <div className="overflow-x-auto">
                <h2 className='text-center text-second text-4xl font-bold mb-32'>Application List</h2>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Company</th>
                            <th>Position</th>
                            <th>Title</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            applications.map((application, index) => <JobApplicationRow key={application._id} index={index} application={application} />)
                        }

                    </tbody>
                </table>
            </div>
                : <h2 className='text-center text-second font-bold text-3xl'>No Application Applied</h2>}
        </div>
    );
};

export default ApplicationsList;