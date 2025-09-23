import { use } from "react";
import PostedJobDetails from "./PostedJobDetails";


const PostedJobLists = ({ jobsCreatedByPromise }) => {
    const jobs = use(jobsCreatedByPromise);
    return (
        <div>
            {jobs.length > 0 ? <div className="overflow-x-auto">
            <h2 className='text-3xl text-second text-center font-bold mb-10'>Posted Job List</h2>
            <table className="table">
                {/* head */}
                <thead>
                    <tr className="border-b-1 border-gray-400">
                        <th>#</th>
                        <th>Title</th>
                        <th>Applicant Apply</th>
                        <th>Category</th>
                        <th>Deadline</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        jobs.map((job, index) => <PostedJobDetails key={job._id} job={job} index={index} />)
                    }

                </tbody>
            </table>
        </div> 
        :   <h2 className='text-3xl text-second text-center font-bold mb-10'>No Job Posted Yet</h2>
        }
        </div >
    );
};

export default PostedJobLists;