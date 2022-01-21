import React, { useState, useEffect } from "react";
import axios from "axios";
import { BaseURL } from "../globals";

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
        const res = await axios.get(`${BaseURL}/tips/search?zipcode=${search}`)
        console.log(res.data.item)
        setResults(res.data.item)
        setClick(true)
        setSearch('')
        
    }

    // Neighborhood Data
    const [zips, setZips] = useState([])

    const getNeighborhoods = async (e) => {
        const res = await axios.get(`${BaseURL}/neighborhoods/`)
        setZips(res.data.neighborhoods)
    }

    useEffect(() => {
        getNeighborhoods()
    }, [])

    return (
        <div>

            <h1>Search a zipcode to find posted crimetips in the area</h1>
            <form className="homeform" onSubmit={handleSubmit}>
                <label htmlFor="search">Zip Code: </label>

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

                <button className="homebutton">Submit</button>
            </form>

            <form  onSubmit={handleSubmit}>
                <input type="text" id="search" value={search} onChange={handleChange} />
                <button className="homebutton">Submit</button>
            </form>

            {
                (click) ? results.map((element) => {
                    return (

                        <div className="homecontainer" key={element.id} onClick={() => props.history.push(`/crimes/${element.id}`)}>
                            
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