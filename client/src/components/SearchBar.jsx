import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchBar = (props) => {

    // search and dropdown option data
    const [search, setSearch] = useState('')
    const [click, setClick] = useState(false)
    const [results, setResults] = useState([])

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await axios.get(`http://localhost:3001/api/tips/search?zipcode=${search}`)
        setResults(res.data.item)
        setClick(true)
        setSearch('')
    }

    // Neighborhood Data
    const [zips, setZips] = useState([])

    const getNeighborhoods = async (e) => {
        const res = await axios.get(`http://localhost:3001/api/neighborhoods/`)
        setZips(res.data.neighborhoods)
    }

    useEffect(() => {
        getNeighborhoods()
    }, [])

    return (
        <div>

            {
                (props.authenticated) ? <h1>Welcome back {props.username}!</h1> : null
            }
            <h1>Whats the Talk of the Town?</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Zipcode: </label>
                <select name="search" id="search" onChange={handleChange}>
                    <option value="">Choose...</option>
                    {
                        zips.map((element) => {
                            return (
                                <React.Fragment key={element.id}>
                                    <option value={element.zipcode}>{element.zipcode}</option>
                                </React.Fragment>
                            )
                        })
                    }
                </select>

                <button>Submit</button>
            </form>

            <form onSubmit={handleSubmit}>
                <input type="text" id="search" value={search} onChange={handleChange} />
                <button>Submit</button>
            </form>

            {
                (click) ? results.map((element) => {
                    return (
                        <div key={element.id} onClick={() => props.history.push(`/crimes/${element.id}`)}>
                            <h3>{element.title}</h3>
                            <br />
                        </div>
                    )
                }) : null
            }

        </div>
    )
}

export default SearchBar