import React from 'react'
import { useParams } from 'react-router-dom'

function UserId() {
    let { usertestId, testId } = useParams();
    console.log(6, usertestId, testId);
    return (
        <div>
            <h1>UserId</h1>

        </div>
    )
}

export default UserId