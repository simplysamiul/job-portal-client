import Job from "./Job";

const Jobs = ({jobs}) => {
    return (
        <div>
            <div className="grid grid-cols-3 gap-6">
                {
                    jobs.map(job => <Job key={job._id} job={job} />)
                }
            </div>
        </div>
    );
};

export default Jobs;