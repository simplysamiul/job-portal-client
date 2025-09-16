import Job from "./Job";

const Jobs = ({jobs}) => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-4 lg:m-1">
                {
                    jobs.map(job => <Job key={job._id} job={job} />)
                }
            </div>
        </div>
    );
};

export default Jobs;