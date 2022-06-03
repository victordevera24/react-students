import React from "react";
import Score from './Score'

function StudentListItem({student, index}){
    return(
        <>
            <h3>{student.name}</h3>
            <p>{student.bio}</p>
            {student.scores.map((s, idx) => (
                <Score score={s} index={idx}/>
            ))}
            <hr />
        </>
        
    )
}

export default StudentListItem