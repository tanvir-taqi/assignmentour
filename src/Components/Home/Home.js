import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='w-full h-[100vh] p-4 flex flex-col justify-center items-center'>
            <h1 className='text-3xl font-bold'>Welcome to <span className='font-extrabold font-mono'>Assignmentour</span></h1>
            <p className='text-lg font-medium'>An application to made your life easier</p>
            <p className='text-base font-medium '>Build your own cover page for your assignment</p>
            <Link to='/template' className='bg-[#7337ff] py-2 px-6 my-6  hover:rounded-b-3xl hover:rounded-tl-3xl text-white  hover:bg-gradient-to-r from-[#7337ffb4] to-slate-900 transition-all  duration-100'>Choose Template</Link>
        </div>
    );
};

export default Home;