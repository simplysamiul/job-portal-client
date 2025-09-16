import { IoLocationSharp } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import { PiBuildingOfficeLight } from "react-icons/pi";

const Job = ({ job }) => {
    console.log(job)
    const { company_logo, company, description, jobType, location, title, salaryRange, applicationDeadline, requirements } = job;
    return (
        <div className="shadow-sm shadow-second rounded-xl m-2 flex flex-col justify-between">
            {/* card body */}
            <div className="  py-4 px-3 flex flex-col justify-between">
                <div className="flex items-center gap-4 mb-6">
                    <img className="w-[50px]" src={company_logo} alt="" />
                    <div>
                        <h4 className="text-second text-2xl font-semibold">{company}</h4>
                        <p className="text-gray-500 flex items-center text-sm"><IoLocationSharp />{location}</p>
                    </div>
                </div>
                <div>
                    <h4 className="text-second text-xl font-bold">{title}</h4>
                    <div className="flex justify-between">
                        <p className="flex items-center text-gray-500 font-semibold gap-1 text-sm"><PiBuildingOfficeLight />{jobType}</p>
                        <p className="flex items-center text-gray-500 font-semibold gap-1 text-sm"><MdDateRange />{applicationDeadline}</p>
                    </div>
                    {/* jopb description */}
                    <p className="mt-4 mb-8 text-[15px] text-gray-500 text-justify">{description}</p>

                    {/* job requirments */}
                    <div className="mb-4">
                        <h3 className="text-first font-semibold mb-2">Requirments :</h3>
                        {
                            requirements.map((requirement, i) => <span className="badge badge-outline badge-primary m-1" key={i}>{requirement}</span>)
                        }
                    </div>
                </div>
            </div>
            {/* card footer */}
            <div className="bg-second p-4 rounded-bl-xl rounded-br-xl flex justify-between items-center">
                <p><span className="text-2xl font-bold text-first">{salaryRange.max} <span className="text-white text-lg">/ Week</span></span></p>
                <button className="btn bg-first text-white font-semibold border-none">Details</button>
            </div>
        </div>
    );
};

export default Job;