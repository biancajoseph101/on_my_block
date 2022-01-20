import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function CrimeTipPost(props) {
  const [click, setClick] = useState(false);

  async function createCrimeTip(e) {
    e.preventDefault();
    const zipcode = e.target.zipcode.value;
    const response = await axios.get(
      `http://localhost:3001/api/neighborhoods/search?zipcode=${zipcode}`
    );
    console.log(response.data[0].id);
    const newCrime = {
      title: e.target.title.value,
      content: e.target.content.value,
      neighborhoodId: response.data[0].id,

      userId: props.userId
    };

    const postResponse = await axios.post(
      'http://localhost:3001/api/tips/',
      newCrime
    );
    setClick(true);
  }

  return (
    <div>
      {click ? <h1>Successfully posted the crime you witnessed</h1> : null}

      {props.authenticated ? (
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
      ) : (
        <div>
          <h1>Want to post a crime you just witnessed?</h1>
          <hr />
          <Link to="/login">Login</Link>
        </div>
      )}
    </div>
  );
}

export default CrimeTipPost;
