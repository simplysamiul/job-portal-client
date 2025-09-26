import axios from 'axios';
import { FaEye } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';

const ApplicantDetailsTable = ({ applicantsList: applicant, index, setApplicantDetails }) => {
    const { name, email, number, status, _id } = applicant;
    const handelShowApplicantDetails = () => {
        document.getElementById('showApplicantDetails').showModal();
        setApplicantDetails(applicant);
    };

    const handleStatusChange = (e, applicantId) => {
        const status = e.target.value;

        axios.patch(`https://job-portal-server-black-beta.vercel.app/applications/${applicantId}`, { status })
            .then(res => {
                if (res.data.modifiedCount) {
                    Swal.fire({
                        text: "Application Update Successfully....!",
                        icon: "success"
                    });
                }
            }).catch(err => {
                Swal.fire({
                    text: `${err.message}`,
                    icon: "error"
                });
            })
    }
    return (
        <>
            <tr className='border-b-1 border-gray-300'>

                <th>{index + 1}</th>
                <td>{name}</td>
                <td>{email}</td>
                <td>{number}</td>
                <td>
                    <select defaultValue={status} onChange={e => handleStatusChange(e, _id)}
                        disabled={status === "Hired" ? true : status === "Rejected" ? true : false}
                        className="select">
                        <option disabled={true}>Update Status</option>
                        <option>Under Review</option>
                        <option>Interview</option>
                        <option>Hired</option>
                        <option>Rejected</option>
                    </select>
                </td>
                <td className='flex items-center space-x-4'>
                    <span onClick={handelShowApplicantDetails} className='btn bg-first p-2 text-white text-lg'><FaEye /></span>
                    <span className='btn bg-red-600 p-2 text-white text-lg'><MdDelete /></span>
                </td>
            </tr>
        </>
    );
};

export default ApplicantDetailsTable;