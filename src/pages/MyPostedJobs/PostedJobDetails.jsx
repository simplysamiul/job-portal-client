import React from 'react';
import { FaEye } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { TbFileCv } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const PostedJobDetails = ({ job, index }) => {
    const { title, category, applicationDeadline, _id, application_count } = job;
    return (
        <tr className='boder-b-1 border-gray-400'>
            <th>{index + 1}</th>
            <td>{title}</td>
            <td>{application_count}</td>
            <td>{category}</td>
            <td>{applicationDeadline}</td>
            <td className='flex items-center space-x-4'>
                <Link to={`/postedJobDetails/${_id}`}><span className='btn bg-first p-2 text-white text-lg'><FaEye /></span></Link>
                <Link to={`/applications/jobs/${_id}`}><span className='btn bg-second p-2 text-white text-lg'><TbFileCv /></span></Link>
                <span className='btn bg-red-600 p-2 text-white text-lg'><MdDelete /></span>
            </td>
        </tr>
    );
};

export default PostedJobDetails;