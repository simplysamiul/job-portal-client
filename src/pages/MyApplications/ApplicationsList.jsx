import React, { use } from 'react';
import JobApplicationRow from './JobApplicationRow';

const ApplicationsList = ({ myApplicationsPromise }) => {
    const applications = use(myApplicationsPromise);
    return (
        <div >
            <div className="overflow-x-auto">
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
                            applications.map((application, index) => <JobApplicationRow key={application._id} index={index} application={application}/>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ApplicationsList;