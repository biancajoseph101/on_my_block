import React, { useState, useEffect } from "react";
import axios from "axios";
import UpdateCrime from "./UpdateCrime";

const CrimeDetails = (props) => {

    const [results, setResults] = useState({})

    const getResults = async () => {
        const res = await axios.get(`http://localhost:3001/api/tips/${props.match.params.id}`)
        setResults(res.data.tips)
        // console.log(user)
    }

    useEffect(() => {
        getResults()
        // console.log(results)
    }, [])

    const handleDelete = () => {
        axios.delete(`http://localhost:3001/api/tips/${props.match.params.id}`)
    }

    const updateButton = (results.userId === props.id) ? <button onClick={() => props.history.push(`/crimes/update/${props.match.params.id}`)} >Update</button> : null;

    const deleteButton = (results.userId === props.id) ? <button onClick={handleDelete}>Delete</button> : null;

    return (
        <div>
            <div>
                <h1>{results.title}</h1>
                <p>{results.content}</p>
            </div>
            <br />
            {/* <button onClick={() => props.history.push(`/crimes/update/${props.match.params.id}`)} >Update</button> */}
            {updateButton}
            {/* <button onClick={handleDelete}>Delete</button> */}
            {deleteButton}
        </div>
    )
}

export default CrimeDetails