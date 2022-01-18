import React from "react"
import axios from "axios"

function CrimeTipPost() {
  async function createCrimeTip(e) {
    e.preventDefault()
    const zipcode = e.target.zipcode.value
    const response = await axios.get(`http://localhost:3001/api/neighborhoods/search?zipcode=${zipcode}`)
    const newCrime = {
      title: e.target.title.value,
      content: e.target.content.value,
      neighborhoodId: response.data.id,
      userId: "1",
    }
    const postResponse = await axios.post("http://localhost:3001/api/tips/", newCrime)
  }

  return (
    <div>
      <form onSubmit={createCrimeTip}>
        <div>
          <label>Crime</label>
          <input
            name="title"
            type="text"
            placeholder="Crime"
            // onChange={handleChange}
          />
        </div>

        <div>
          <label>Zipcode</label>
          <input
            name="zipcode"
            type="text"
            placeholder="Enter a zipcode"
            // onChange={handleChange}
          />
        </div>

        <div>
          <label>Crime witnessed</label>
          <textarea
            name="content"
            type="text"
            placeholder="Describe the crime"
            // onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default CrimeTipPost
