import { FaEye } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';

const JobApplicationRow = ({ application, index }) => {
    const { company_logo, company, position, email, title, _id, jobId } = application;
    console.log(application)
    return (
        <tr>
            <th>
                <label>
                    {index + 1}
                </label>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={company_logo}
                                alt={`${company}-Img`} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{company}</div>
                    </div>
                </div>
            </td>
            <td>
                <span className="badge badge-ghost badge-sm">{position}</span>
            </td>
            <td>
                <span className="badge badge-ghost badge-sm">{title}</span>
            </td>
            <td>{email}</td>
            <td className='flex items-center space-x-4'>
                <Link to={`/jobs/${jobId}`}><span className='btn bg-first p-2 text-white text-lg'><FaEye /></span></Link>
                <span className='btn bg-red-600 p-2 text-white text-lg'><MdDelete /></span>
            </td>
        </tr>
    );
};

export default JobApplicationRow;