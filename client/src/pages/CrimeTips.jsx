import React, { useEffect, useState } from "react"
import axios from "axios"
import CrimeCard from "../components/CrimeCard"

function CrimeTips(props) {
  const baseUrl = "http://localhost:3001/api"
  const [crimes, setCrimes] = useState([])

  const getAllCrimes = async () => {
    const response = await axios.get(`${baseUrl}/tips`)
    setCrimes(response.data)
    setCrimes([
      {
        _id: "1",
        title: "crime 1",
        content: "content 1",
      },
      {
        _id: "2",
        title: "crime 2",
        content: "content 2",
      },
      {
        _id: "3",
        title: "crime 3",
        content: "content 3",
      },
    ])
  }

  const getNeighborhoodCrimes = async () => {
    const response = await axios.get()
    setCrimes(response.data)
  }

  useEffect(() => {
    getAllCrimes()
  }, [])

  return (
    <div className="crimeListing">
      {crimes.map((crime) => {
        return <CrimeCard key={crime._id} crime={crime} />
      })}
    </div>
  )
}

export default CrimeTips
