import axios from "axios";
import React, { useState, useEffect } from "react";

const Comments = (props) => {

    const [results, setResults] = useState([])

    const getComments = async () => {
        const res = await axios.get(`http://localhost:3001/api/comments/`)
        setResults(res.data.comments)
    }

    useEffect(() => {
        getComments()
    }, [])

    return (
        <div>
            {
                results.map((element) => {
                    if (element.crimeId === parseInt(props.match.params.id)) {
                        return (
                            <div key={element.id} style={{ display: 'flex', justifyContent: 'center' }}>
                                <p>{element.content}</p>
                                {
                                    element.userId === props.id && (
                                        <>
                                            <button>Update</button>
                                            <button onClick={async () => {
                                                await axios.delete(`http://localhost:3001/api/comments/${element.id}`)
                                                window.location.reload()
                                            }}>Delete</button>
                                        </>
                                    )
                                }
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}

export default Comments