import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../custome/Loader';
import ApplicantDetailsTable from './ApplicantDetailsTable';

const SpecificJobApplicationList = () => {
    const { job_id } = useParams();

    // get specific data
    const [applicantsLists, setApplicantsLists] = useState([]);
    const [dataLoading, setDataLoadiong] = useState(false);
    // specific applicant details
    const [applicantDetails, setApplicantDetails] = useState({});
    const { name, address, cv, description, email, github, linkdin, number, position } = applicantDetails;

    useEffect(() => {
        setDataLoadiong(true);
        fetch(`https://job-portal-server-black-beta.vercel.app/applications/jobs/${job_id}`)
            .then(res => res.json())
            .then(data => {
                setApplicantsLists(data)
                setDataLoadiong(false);
            }).catch(err => {
                console.log(err);
            })
    }, [job_id])
    return (
        <div>
            {dataLoading ? <Loader />
                : <div className='mt-20 mb-28'>
                    <h2 className='text-center text-second text-4xl font-bold mb-10'>Applicant List</h2>
                    <div className="overflow-x-auto">
                        <table className="table table-zebra">
                            {/* head */}
                            <thead>
                                <tr className='border-b-1 border-gray-400'>
                                    <th>#</th>
                                    <th>Applicant Name</th>
                                    <th>Applicant Email</th>
                                    <th>Phone Number</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    applicantsLists.map((applicantsList, index) => <ApplicantDetailsTable
                                        key={applicantsList._id}
                                        applicantsList={applicantsList}
                                        index={index}
                                        setApplicantDetails={setApplicantDetails}
                                    />)
                                }
                            </tbody>
                        </table>
                    </div>
                    {/* details modal */}
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    {/* <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>open modal</button> */}
                    <dialog id="showApplicantDetails" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-red-500 text-white">✕</button>
                            </form>
                            <h3 className="font-bold text-lg">Applicant Details</h3>
                            <div className='my-6'>
                                <h3 className='text-md text-gray-500 font-bold'><span className='text-first font-bold'>Applicant Name: </span>{name}</h3>
                                <p className='text-sm text-gray-500 font-bold mb-2'><span className='text-first font-bold'>Address: </span> {address}</p>
                                <p className='text-sm text-gray-500 font-bold mb-2'><span className='text-first font-bold'>Phone No: </span> {number}</p>
                                <p className='text-sm text-gray-500 font-bold mb-2'><span className='text-first font-bold'>Email: </span>{email}</p>
                                <p className='text-sm text-gray-500 font-bold mb-2'><span className='text-first font-bold'>Position: </span>{position}</p>
                                <p className='text-sm text-gray-500 font-bold mb-2'><span className='text-first font-bold'>CV: </span>{cv}</p>
                                <p className='text-sm text-gray-500 font-bold mb-2'><span className='text-first font-bold'>Github: </span>{github}</p>
                                <p className='text-sm text-gray-500 font-bold mb-6'><span className='text-first font-bold'>Linkedin: </span>{linkdin}</p>
                                <p className='text-sm text-gray-500 font-bold'><span className='text-first font-bold'>Description:</span> {description}</p>
                            </div>
                        </div>
                    </dialog>
                </div>}
        </div>
    );
};

export default SpecificJobApplicationList;

