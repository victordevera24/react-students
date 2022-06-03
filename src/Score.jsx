import React from 'react';

function StudentScore({score, index}){
    return(
        <li>date:{score.date} score: {score.score}</li>
    )
}

export default StudentScore