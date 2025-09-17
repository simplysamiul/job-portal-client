import React, { useEffect, useState } from 'react';
import { FaMoneyBill } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { MdDateRange, MdEmail } from 'react-icons/md';
import { PiBuildingOfficeDuotone, PiSuitcaseSimpleLight } from 'react-icons/pi';
import { useParams } from 'react-router-dom';
import Loader from '../custome/Loader';

const JobDetails = () => {
    const { id } = useParams();

    // get specific data
    const [job, setJob] = useState({});
    const [dataLoading, setDataLoadiong] = useState(false);
    console.log(job)
    const { applicationDeadline, category, company, company_logo, hr_email, jobType, location, requirements, responsibilities, salaryRange, description, title } = job
    useEffect(() => {
        setDataLoadiong(true);
        fetch(`http://localhost:5000/jobs/${id}`)
            .then(res => res.json())
            .then(data => {
                setJob(data)
                setDataLoadiong(false);
            }).catch(err => {
                console.log(err);
            })
    }, [id])
    return (
        <div>
            {/* job details */}
           {dataLoading ? <Loader />
           
           : <div className='my-8 mx-2'>
                {/* job details header */}
                <div className='flex flex-col md:flex-row items-center mb-12'>
                    <img className='w-[80px] mr-4' src={company_logo} alt={`${company}-Img`} />
                    <div>
                        <h3 className='text-second text-4xl font-bold'>{company}</h3>
                        <p className='text-gray-500 mt-4 font-semibold flex items-center'><IoLocationSharp className='mr-2' />{location}</p>
                    </div>
                    {/* <p className='text-gray-500 text-lg font-semibold flex items-center justify-center'><MdDateRange className='mr-2' />{applicationDeadline}</p> */}
                </div>
                {/* job details key info */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center border-1 border-gray-400 px-8 rounded-xl m-2'>

                    <div className=''>
                        {/* salary */}
                        <div className='flex items-center space-x-4 my-16'>
                            <FaMoneyBill className='text-4xl text-second' />
                            <div>
                                <h3 className='font-bold text-gray-500 text-lg'>Salary</h3>
                                <h3 className='text-second text-xl font-semibold'>{salaryRange?.min} - {salaryRange?.max} <span>/ Week</span></h3>
                            </div>
                        </div>
                        {/* job type */}
                        <div className='flex items-center space-x-4 my-16'>
                            <PiBuildingOfficeDuotone className='text-4xl text-second' />
                            <div>
                                <h3 className='font-bold text-gray-500 text-lg'>Job Type</h3>
                                <h3 className='text-second text-xl font-semibold'>{jobType}</h3>
                            </div>
                        </div>
                    </div>

                    <div>
                        {/* hr-email */}
                        <div className='flex items-center space-x-4 my-16'>
                            <MdEmail className='text-4xl text-second' />
                            <div>
                                <h3 className='font-bold text-gray-500 text-lg'>Hr_Email</h3>
                                <h3 className='text-second text-xl font-semibold'>{hr_email}</h3>
                            </div>
                        </div>
                        {/* category */}
                        <div className='flex items-center space-x-4 my-16'>
                            <PiSuitcaseSimpleLight className='text-4xl text-second' />
                            <div>
                                <h3 className='font-bold text-gray-500 text-lg'>Category</h3>
                                <h3 className='text-second text-xl font-semibold'>{category}</h3>
                            </div>
                        </div>
                    </div>

                    <div>
                        {/* location */}
                        <div className='flex items-center space-x-4 my-16'>
                            <IoLocationSharp className='text-4xl text-second' />
                            <div>
                                <h3 className='font-bold text-gray-500 text-lg'>Location</h3>
                                <h3 className='text-second text-xl font-semibold'>{location}</h3>
                            </div>
                        </div>
                        {/* Deadline */}
                        <div className='flex items-center space-x-4 my-16'>
                            <MdDateRange className='text-4xl text-second' />
                            <div>
                                <h3 className='font-bold text-gray-500 text-lg'>Deadline</h3>
                                <h3 className='text-second text-xl font-semibold'>{applicationDeadline}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                {/* jon title */}

                <h2 className='text-second text-4xl font-bold mt-6'>{title}</h2>

                {/* Requirments */}
                <div>
                    <h3 className='mt-8 mb-3 text-xl font-semibold'>Job Requirements :</h3>
                    <div>
                        {
                            requirements?.map((requirement, i) => <span className="badge badge-outline badge-primary m-1" key={i}>{requirement}</span>)
                        }
                    </div>
                </div>
                {/* Responsibilities */}
                <div>
                    <h3 className='mt-8 mb-3 text-xl font-semibold'>Job Responsibilities :</h3>
                    <div>
                        {
                            responsibilities?.map((responsibility, i) => <span className="badge badge-outline badge-primary m-1" key={i}>{responsibility}</span>)
                        }
                    </div>
                </div>
                {/* job details */}
                <div>
                    <h3 className='mt-8 mb-3 text-xl font-semibold'>Description :</h3>
                    <div>
                        <p>{description}</p>
                    </div>
                </div>

            </div>}
        </div>
    );
};

export default JobDetails;

