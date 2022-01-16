import React, { useEffect, useState } from "react"
import axios from "axios"
import CrimeCard from "../components/CrimeCard"

function CrimeTips(props) {
  const baseUrl = "http://localhost:3001/api"
  const [crimes, setCrimes] = useState([])

  const getAllCrimes = async () => {
    // const response = await axios.get(`${baseUrl}/tips/crimeid`)
    // setCrimes(response.data)
    setCrimes([
      {
        username: "froglov",
        title: 'Robbery',
        content: 'There was a robbery on Tree Street at 4 pm on Saturday.If anyone has been the suspect please call the police, the suspect is 5 3 brown hair, brown eyes',
      },
      {
        username: "nalam",
        title: "Assult",
        content: 'There was an assault near Walmart at 2 pm on Wednesday.',
      },
      {
        username: "elis",
        title: "missing",
        content: "There was a person seen stealing my neighbours cat at 200 west elm street, please report the suspect to police",
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
