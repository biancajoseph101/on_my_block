import axios from "axios";
import React, { useState, useEffect } from "react";
import { BaseURL } from "../globals";

const Comments = (props) => {

    const [results, setResults] = useState([])

    const getComments = async () => {
        const res = await axios.get(`${BaseURL}/comments/`)
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
                            <div key={element.id} style={{ display: 'flex', justifyContent: 'center' }} >
                                <p className="allcomments">{element.content}</p>
                                {
                                    element.userId === props.id && (
                                        <>
                                            <button onClick={async () => {
                                                await axios.delete(`${BaseURL}/comments/${element.id}`)
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