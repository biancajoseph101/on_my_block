import React, { useState, useEffect } from "react";
import axios from "axios";
import Comments from "./Comments";
import CreateComment from "./CreateComment";

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
        props.history.push('/')
    }


    const updateButton = (results.userId === props.id) ? <div><h3 className="errortext">If you see an error you may edit or delete this report below</h3> <hr /> <button className="editbutton" onClick={() => props.history.push(`/crimes/update/${props.match.params.id}`)} >EDIT</button></div> : null;

    const deleteButton = (results.userId === props.id) ? <button className="xbutton" onClick={handleDelete}>DELETE REPORT</button> : null;

    return (
        <div>
            <div>
                <img className="alertimage" src="/C132EAB6-3B84-44AE-AD95-DE94BABBF8C7.png" />
                <h1>{results.title}</h1>
                <hr />
                <p>The person or persons who committed the {results.title} allegedly {results.content}. Please be safe out there.</p>
            </div>
            <br />
            {updateButton}
            {deleteButton}
            <br /><br />
            <CreateComment {...props} neighborhoodId={results.neighborhoodId} id={props.id} authenticated={props.authenticated} />
            <br />

            <Comments {...props} id={props.id} />
        </div>
    )
}

export default CrimeDetails
