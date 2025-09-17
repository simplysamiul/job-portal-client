import React, { use } from 'react';

const ApplicationsList = ({myApplicationsPromise}) => {
    const applications = use(myApplicationsPromise);
    return (
        <div>
            {applications.length}
        </div>
    );
};

export default ApplicationsList;