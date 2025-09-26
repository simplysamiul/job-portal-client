import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import '../../style/JobApply.css';
import axios from 'axios';

const JobApply = () => {
    const { id } = useParams();
    const { user } = useAuth();

    // applied job
    const [job, setJob] = useState({});
    const [dataLoading, setDataLoadiong] = useState(false);
    const { company_logo, company, title } = job;
    useEffect(() => {
        setDataLoadiong(true);
        fetch(`https://job-portal-server-black-beta.vercel.app/jobs/${id}`)
            .then(res => res.json())
            .then(data => {
                setJob(data)
                setDataLoadiong(false);
            }).catch(err => {
                console.log(err);
            })
    }, [id]);

    // job apply form
    const handelJobApplyForm = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const position = form.position.value;
        const number = form.number.value;
        const linkdin = form.linkdin.value;
        const github = form.github.value;
        const address = form.address.value;
        const cv = form.cv.value;
        const description = form.description.value;

        const application = {
            jobId: id,
            name,
            email: user.email,
            position,
            number,
            linkdin,
            github,
            address,
            cv,
            description
        };

        // send job application to the databse

        axios.post("https://job-portal-server-black-beta.vercel.app/jobApplication", application)
            .then(function (res) {
                if (res.data.insertedId) {
                    Swal.fire({
                        text: "Application submitted successfully ...!",
                        icon: "success"
                    });
                    form.reset();
                }
            })
            .catch(err => {
                console.log(err);
            });

    }
    return (
        <div>
            {/* job application form */}
            {/* job applied company info */}
            {dataLoading ? <span className="loading loading-bars loading-xl mx-auto text-first"></span>
                : <div className='flex items-center justify-center flex-col mt-4'>
                    <img className='w-[70px]' src={company_logo} alt={`${company}-Img`} />
                    <h1 className='text-3xl text-center text-second font-bold my-4'>{title}</h1>
                </div>}
            <div className='flex items-center justify-center lg:h-[70vh]'>
                <form onSubmit={handelJobApplyForm}>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 w-full">
                        <div className='flex flex-col md:flex-row justify-between w-full gap-4'>
                            <div className='w-full md:w-1/2'>

                                <label className="label">Name <span className='text-red-500'>*</span></label>
                                <input name='name' type="text" className="input w-full mb-4" placeholder="Name" required />


                                <label className="label">Position <span className='text-red-500'>*</span></label>
                                <input name='position' type="text" className="input w-full mb-4" placeholder="Position For" required />

                                <label className="label">Contact Number <span className='text-red-500'>*</span></label>
                                <input name='number' type="number" className="input w-full mb-4" placeholder="Contact Number" required />

                                <label className="label">CV link <span className='text-red-500'>*</span></label>
                                <input name='cv' type="text" className="input w-full mb-4" placeholder="Your CV link" required />

                            </div>

                            <div className='w-full md:w-1/2'>

                                <label className="label">Linkdin Profile<span>( Optional )</span></label>
                                <input name='linkdin' type="text" className="input w-full mb-4" placeholder="Linkdin profile link" />

                                <label className="label">Github Profile<span>( Optional )</span></label>
                                <input name='github' type="text" className="input w-full mb-4" placeholder="Github profile link" />

                                <label className="label">Address <span className='text-red-500'>*</span></label>
                                <input name='address' type="text" className="input w-full mb-4" placeholder="Your address" required />


                            </div>
                        </div>
                        <label className="label">Description</label>
                        <textarea name='description' className="textarea h-24 w-full" placeholder="Your Description"></textarea>


                        <button className="btn btn-neutral mt-4 bg-first border-first">Submit Application</button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default JobApply;