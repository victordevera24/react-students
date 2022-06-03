import React from "react";
import StudentListItem from './StudentListItem'

function StudentList({students}){
    return(
        <>
            {students.map((s,idx) => (
                <StudentListItem student={s} index={idx}/>
            ))}
        </>
    )
}

export default StudentList;