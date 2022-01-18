import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchBar = (props) => {


    const [search, setSearch] = useState('')
    const [click, setClick] = useState(false)
    const [results, setResults] = useState([])

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await axios.get(`http://localhost:3001/api/tips/search?zipcode=${search}`)
        console.log(res.data.item)
        setResults(res.data.item)
        setClick(true)
        setSearch('')
        
    }


    return (
        <div>
            <h1>Hi</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Zipcode: </label>
                {/* <input type="text" id="search" value={search} onChange={handleChange} /> */}
                <select name="search" id="search" onChange={handleChange}>
                    <option value="">Choose...</option>
                    <option value='75056'>75056</option>
                    <option value="11422">11422</option>
                    <option value="10028">10028</option>
                    <option value="11371">11371</option>
                    <option value="10528">10528</option>
                    <option value="11101">11101</option>
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