import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { submitInfo } from '../../actions/actions';
import './CoverPageInfo.css'

const CoverPageInfo = ({setShowTemplate}) => {
    const [departmentName,setDepartmentName] = useState(null)
    const dispatch = useDispatch()
    const date = new Date().toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'short',
        day: 'numeric'

    });

    const handleSubmitInfo = event => {
        event.preventDefault();
        const form = event.target;
        const studentName = form.studentName.value
        const department = form.department.value
        const session = form.session.value
        const studentId = form.studentId.value
        const year = form.year.value
        const semester = form.semester.value
        const teacherName = form.teacherName.value
        const designation = form.designation.value
        const teacherDepartment = form.teacherDepartment.value
        const course = form.course.value
        const coursecode = form.coursecode.value
        const assignment = form.assignment.value
        const date = form.date.value


        const info = {
            studentName,
            department,
            session,
            studentId,
            year,
            semester,
            teacherName,
            designation,
            teacherDepartment,
            course,
            coursecode,
            assignment,
            date
        }
        dispatch(submitInfo(info))
        Swal.fire(
            'Good job!',
            'You Submitted all the informations',
            'success'
          )
        form.reset();
        setShowTemplate(true)
    }


    return (
        <div className=''>
            <h1 className='text-center text-3xl font-bold mb-12'>Fill this form</h1>
            <div>
                <form onSubmit={handleSubmitInfo} className='grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-y-8'>
                    <div className="form-control">
                        <label htmlFor="department">Department</label>
                        <input required onChange={(e)=>setDepartmentName(e.target.value)} type="text" name='department' />
                    </div>
                    <div className="form-control">
                        <label htmlFor="studentName">Name of the Student</label>
                        <input required type="text" name='studentName' />
                    </div>
                    <div className="form-control">
                        <label htmlFor="session">Session</label>
                        <input required type="text" name='session' />
                    </div>

                    <div className="form-control">
                        <label htmlFor="studentId" >Student Id</label>
                        <input required type="text" name='studentId' />
                    </div>


                    <div className="form-control">
                        <label htmlFor="year">Year</label>
                        <select name="year" id="year" className='bg-[#7337ffa2]'>
                            <option value="1st">1st</option>
                            <option value="2nd">2nd</option>
                            <option value="3rd">3rd</option>
                            <option value="4th">4th</option>
                            <option value="5th">5th</option>
                        </select>
                    </div>


                    <div className="form-control">
                        <label htmlFor="semester">Semester</label>
                        <select name="semester" id="semester" className='bg-[#7337ffa2] hover:bg-[#7a41ff]'  >
                            <option value="1st"  >1st</option>
                            <option value="2nd"  >2nd</option>
                        </select>
                    </div>


                    <div className="form-control">
                        <label htmlFor="teacherName">Name of the Teacher</label>
                        <input required type="text" name='teacherName' />
                    </div>
                    <div className="form-control">
                        <label htmlFor="designation">Designation of the Teacher</label>
                        <input required type="text" name='designation' />
                    </div>

                    <div className="form-control">
                        <label htmlFor="teacherDepartment">Department of the Teacher</label>
                        <input required defaultValue={departmentName} type="text" name='teacherDepartment' />
                    </div>
                    <div className="form-control">
                        <label htmlFor="course">Course Title</label>
                        <input required type="text" name='course' />
                    </div>
                    <div className="form-control">
                        <label htmlFor="coursecode">Course Code</label>
                        <input required type="text" name='coursecode' />
                    </div>
                    <div className="form-control">
                        <label htmlFor="assignment">Assignment on</label>
                        <input required type="text" name='assignment' />
                    </div>


                    <div className="form-control">
                        <label htmlFor="date">Submission date</label>
                        <input required type="date" id="date" name="date" className='bg-[#7337ffa2]'

                            min={date}></input>
                    </div>

                    <div className="form-control">
                        <button type="submit" className='submit-btnn bg-[#7337ff] py-2 px-6 my-6  hover:rounded-t-3xl hover:rounded-br-3xl text-white  hover:bg-gradient-to-r from-[#7337ffb4] to-slate-900 transition-all  duration-100'>Submit Information</button>
                    </div>
                    
                </form>
            </div>

        </div>
    );
};

export default CoverPageInfo;