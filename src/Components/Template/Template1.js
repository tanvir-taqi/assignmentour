import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CoverPageInfo from '../CoverPageInfo/CoverPageInfo';
import Pdf from "react-to-pdf";

const ref1 = React.createRef();
const Template1 = () => {
  const temp1Info = useSelector(state => state.infoCollection)
  const [showTemplate,setShowTemplate] = useState(false)



  return (
    <div className='py-12 md:mx-20 mx-2 '>
      <div className='py-16'>
        <h1 onClick={() => window.history.go(-1)} className='cursor-pointer  shadow-lg  mx-12 text-4xl font-extrabold text-white'>&lt;</h1>
      </div>
      <CoverPageInfo
      setShowTemplate={setShowTemplate}
      ></CoverPageInfo>

      <div className={`${showTemplate ? 'block': 'hidden'}`}>
        <div className=" flex justify-center md:py-16 py-8">

          <Pdf targetRef={ref1} filename={`cover-page-${temp1Info?.coursecode}.pdf`}>
            {({ toPdf }) => <button onClick={toPdf} className='bg-[#7337ff] py-2 px-6 my-6  hover:rounded-t-3xl hover:rounded-br-3xl text-white  hover:bg-gradient-to-r from-[#7337ffb4] to-slate-900 transition-all  duration-100'>Download Pdf</button>}
          </Pdf>
        </div>
        <div>
          <div ref={ref1} className=' h-full w-[800px] bg-white  flex flex-col items-center '>

            <h1 className='text-3xl my-16 tracking-wide font-serif font-semibold'>Pabna University of Science & Technology</h1>

            <img src="uni-logo.png" alt="" className='w-56 h-48' />

            <h3 className=" text-3xl my-8 font-semibold font-serif text-emerald-600"> Department of {temp1Info?.department}</h3>

            <div className='mx-12 my-8 border-4 border-solid  border-teal-500 '>
              <div className='p-6'>
                <h1 className='text-2xl font-bold text-center text-cyan-600'>Course Title : {temp1Info?.course}</h1>
                <h1 className='text-2xl font-bold text-center text-cyan-700'>Course Code : {temp1Info?.coursecode}</h1>
                <h1 className='text-2xl font-bold text-center text-red-900 '>Assignment On : {temp1Info?.assignment}</h1>
              </div>
            </div>

            <div className='grid grid-cols-2 gap-10 mx-16 my-12 text-base font-sans font-medium text-black'>
              <div className='flex flex-col items-start p-3 border border-black  bg-gradient-to-b from-gray-100 to-gray-400 '>
                <h1 className='font-bold'>Submitted by -</h1>
                <h1>{temp1Info?.studentName}</h1>
                <h1>Roll: {temp1Info?.studentId}</h1>
                <h1>Session: {temp1Info?.session}</h1>

                <h1>{temp1Info?.year} Year {temp1Info?.semester} Semester</h1>
                <h1>Department of {temp1Info?.department}</h1>
                <h1>Pabna University of Science & Technology</h1>
              </div>
              <div className='flex flex-col items-start p-3 border border-black  bg-gradient-to-b from-gray-100 to-gray-400 '>
                <h1 className='font-bold'>Submitted to -</h1>
                <h1>{temp1Info?.teacherName}</h1>
                <h1>{temp1Info?.designation}</h1>
                <h1>Department of {temp1Info?.teacherDepartment}</h1>
                <h1>Pabna University of Science & Technology</h1>
              </div>
            </div>

            <div>
              <h1 className='my-6 font-medium'>Submission Date: <strong>{temp1Info?.date}</strong></h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template1;