import bannerImg from '../../assets/banner.png'
import { motion } from "motion/react"

const Banner = () => {
    return (
        <div>
            <div className='flex flex-col-reverse lg:flex-row justify-between py-22 gap-4'>
                {/* banner left */}
                <div className='mt-6 mx-12'>
                    <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-second mb-4'>Get The 
                    <motion.span
                    className='ml-4'
                    animate={{
                        color: ['#3c65f5', '#05264E', '#1491ea', '#3a4b9a'],
                        transition: {duration: 3, repeat: Infinity}
                    }}
                    >Right Job</motion.span></h1>
                    <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-second mb-6'>You Deserve</h1>
                    <p className='text-gray-500 text-lg'>Each month, more than 3 million job seekers turn to website in their search for work,
                        making over 140,000 applications every single day</p>
                </div>
                {/* banner right */}
                <div className='w-4/5 mx-auto'>
                    <motion.img
                    animate={{y:[0, -60, 0]}}
                    transition={{duration:10, repeat: Infinity}}
                    src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;