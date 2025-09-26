import axios from "axios";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const AddJob = () => {

    const { user } = useAuth();

    const handelAddJob = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // process salary range data
        const { min, max, currency, ...newJob } = data;
        newJob.salaryRange = { min, max, currency }


        // process requirments
        newJob.requirements = newJob.requirements.split(";").map(req => req.trim());

        // process of job responsibilites
        newJob.responsibilities = newJob.responsibilities.split(";").map(res => res.trim())

        newJob.status = "Active";

        axios.post("https://job-portal-server-black-beta.vercel.app/jobs", newJob)
            .then(res => {
                console.log(res)
                if (res.data.insertedId) {
                    Swal.fire({
                        text: "Job added successfully ...!",
                        icon: "success"
                    });
                    form.reset();
                }
            }).catch(err => {
                console.log(err)
            })
    }
    return (
        <div className='my-12'>
            <div className='flex items-center justify-center lg:w-4/5 mx-auto'>
                <form onSubmit={handelAddJob} className="mx-auto">
                    <fieldset className="fieldset border-base-300 rounded-box w-full border p-4">
                        <legend className="fieldset-legend">Basic Info</legend>

                        <label className="label">Job Title</label>
                        <input name='title' type="text" className="input w-full" placeholder="Job Title" />

                        <label className="label">Company</label>
                        <input name='company' type="text" className="input w-full" placeholder="Company Name" />

                        <label className="label">Location</label>
                        <input name='location' type="text" className="input w-full" placeholder="Company Location" />

                        <label className="label">Company Logo</label>
                        <input name='company_logo' type="text" className="input w-full" placeholder="Company Logo URL" />
                    </fieldset>

                    {/* Job type  */}

                    <fieldset className="fieldset border-base-300 rounded-box w-full border p-4">
                        <legend className="fieldset-legend">Job Type</legend>

                        <div className="filter">
                            <input className="btn filter-reset" type="radio" name="jobType" aria-label="All" />
                            <input className="btn" type="radio" name="jobType" aria-label="On-Site" value="On-Site" />
                            <input className="btn" type="radio" name="jobType" aria-label="Remote" value="Remote" />
                            <input className="btn" type="radio" name="jobType" aria-label="Hybrid" value="Hybrid" />
                        </div>
                    </fieldset>

                    {/* Job Category */}

                    <fieldset className="fieldset border-base-300 rounded-box w-full border p-4">
                        <legend className="fieldset-legend">Job Category</legend>
                        <select defaultValue="Job Category" name='category' className="select w-full">
                            <option disabled={true}>Job Category</option>
                            <option>Engineering</option>
                            <option>Marketing</option>
                            <option>Customer Service</option>
                            <option>Human Resources</option>
                            <option>Design</option>
                            <option>Banking</option>
                            <option>Healthcare</option>
                            <option>Sales</option>
                            <option>Content</option>
                            <option>Teaching</option>
                        </select>
                    </fieldset>

                    {/* Application Deadline */}

                    <fieldset className="fieldset border-base-300 rounded-box w-full border p-4">
                        <legend className="fieldset-legend">Application Deadline</legend>
                        <input name='applicationDeadline' type="date" className="input w-full" />
                    </fieldset>

                    {/* salaryRange */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <legend className="fieldset-legend">Salary Range</legend>

                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                            <div>
                                <label className="label">Minimum Salary</label>
                                <input name='min' type="text" className="input w-full" placeholder="Min Salary" />
                            </div>

                            <div>
                                <label className="label">Maximum Salary</label>
                                <input name='max' type="text" className="input w-full" placeholder="Max Salary" />
                            </div>

                            <div>
                                <label className="label">Currency</label>
                                <select defaultValue="currency" name='currency' className="select w-full">
                                    <option disabled={true}>Currency</option>
                                    <option>usdt</option>
                                    <option>bdt</option>
                                    <option>Omr</option>
                                    <option>Eur</option>
                                </select>
                            </div>
                        </div>
                    </fieldset>

                    {/* description */}
                    <fieldset className="fieldset border-base-300 rounded-box w-full border p-4">
                        <legend className="fieldset-legend">Description</legend>
                        <textarea name='description' className="textarea w-full" placeholder="Job Description"></textarea>

                    </fieldset>

                    {/* Job Requirments */}
                    <fieldset className="fieldset border-base-300 rounded-box w-full border p-4">
                        <legend className="fieldset-legend">Job Requirments</legend>
                        <textarea name='requirements' className="textarea w-full" placeholder="Job Requirments (separate by ;)"></textarea>

                    </fieldset>

                    {/* Job responsibilities */}
                    <fieldset className="fieldset border-base-300 rounded-box w-full border p-4">
                        <legend className="fieldset-legend">Job Responsibilities</legend>
                        <textarea name='responsibilities' className="textarea w-full" placeholder="Job Responsibilities (separate by ;)"></textarea>

                    </fieldset>



                    {/* HR Related Info */}
                    <fieldset className="fieldset border-base-300 rounded-box w-full border p-4">
                        <legend className="fieldset-legend">HR Related Info</legend>

                        <label className="label">HR Name</label>
                        <input name='hr_name' type="text" className="input w-full" placeholder="HR Name" />

                        <label className="label">HR Email</label>
                        <input defaultValue={user.email} name='hr_email' type="email" className="input w-full" placeholder="HR Email" />
                    </fieldset>
                    <input type="submit" value="Add Job" className='w-full bg-first text-white font-bold btn' />
                </form>
            </div>
        </div>
    );
};

export default AddJob;