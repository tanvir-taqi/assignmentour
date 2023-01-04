import React from 'react';
import { Link } from 'react-router-dom';

const Template = () => {
    return (
        <div className='mx-12 py-12'>
            <div className='py-16'>
                <h1 onClick={()=>window.history.go(-1)} className='cursor-pointer  mx-12 text-4xl font-extrabold text-white shadow-lg'>&lt;</h1>
            </div>
            <div className=''>
            <h1 className='text-center text-3xl font-bold my-12'>Choose Your Template for cover page of your assignment.</h1>
            <div className='md:mx-16  grid grid-cols-1  md:grid-cols-3 gap-20'>
            <Link to='/template1' className='hover:text-white hover:bg-gradient-to-tr from-[#7337ffb4] to-slate-900 hover:rounded-b-full hover:rounded-tl-full  border border-gray-700 h-56 w-56 flex items-center justify-center'>
                <p className='font-extrabold'>Tempate 1</p>
            </Link>
            <Link className='hover:text-white hover:bg-gradient-to-tr from-[#7337ffb4] to-slate-900 hover:rounded-b-full hover:rounded-tl-full  border border-gray-700 h-56 w-56 flex items-center justify-center'>
            <p>Coming soon!!</p>
            </Link>
            <Link className='hover:text-white hover:bg-gradient-to-tr from-[#7337ffb4] to-slate-900 hover:rounded-b-full hover:rounded-tl-full border border-gray-700 h-56 w-56 flex items-center justify-center'>
                <p>Coming soon!!</p>
            </Link>
            </div>
            </div>
             
        </div>
    );
};

export default Template;