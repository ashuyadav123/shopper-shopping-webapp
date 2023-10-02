import { useState } from "react";
const DataBinding=()=>{

    const[username,setUsername]=useState({name:'Ashu',roll_no:0,course:''})

    function handleNameChange(e){
        setUsername({
            name:e.target.value,
            roll_no:username.roll_no,
            course:username.course
        })
    }
    function handleroll_noChange(e){
        setUsername({
            name:username.name,
            roll_no:e.target.value,
            course:username.course
        })
    }
    function handleCourseChange(e){
        setUsername({
            name:username.name,
            roll_no:username.roll_no,
            course:e.target.value
        })
    }
    return(
        <div className="conatiner">
         <h1>Student Data</h1>
         {
            <dl>
                <dt>Student Name</dt>
                <dd><input type="text" onChange={handleNameChange} value={username.name}/></dd>
                <dt>Student Roll-nob</dt>
                <dd><input type="number" onChange={handleroll_noChange} /></dd>
                <dt>Course</dt>
                <dd><input type="text" onChange={handleCourseChange} /></dd>
            </dl>
         }
         <h1>student data present dynamically</h1>
         <dl>
                <dt>Student Name</dt>
                <dd><input type="text" value={username.name}/></dd>
                <dt>Student Roll-nob</dt>
                <dd><input type="number" value={username.roll_no} /></dd>
                <dt>Course</dt>
                <dd><input type="text" value={username.course}/></dd>
            </dl>
        </div>
    )
}
export default DataBinding;