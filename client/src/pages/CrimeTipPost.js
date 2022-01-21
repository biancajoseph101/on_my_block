import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BaseURL } from '../globals';

function CrimeTipPost(props) {
  const [click, setClick] = useState(false);

  async function createCrimeTip(e) {
    e.preventDefault();
    const zipcode = e.target.zipcode.value;
    const response = await axios.get(
      `${BaseURL}/neighborhoods/search?zipcode=${zipcode}`
    );
    console.log(response.data[0].id);
    const newCrime = {
      title: e.target.title.value,
      content: e.target.content.value,
      neighborhoodId: response.data[0].id,

      userId: props.userId
    };

    const postResponse = await axios.post(`${BaseURL}/tips/`, newCrime);
    setClick(true);
  }

  return (
    <div>
      {click ? <h1>Successfully posted the crime you witnessed</h1> : null}

      {props.authenticated ? (
        <form onSubmit={createCrimeTip}>
          <h1>Let's keep the city safe</h1>
          <div className="form">
            <div className="formField">
              <h2>Crime</h2>
              <input
                name="title"
                type="text"
                placeholder="Crime"
                className="formTextArea"
                // onChange={handleChange}
              />
            </div>

            <div className="formField">
              <h2>Zipcode</h2>
              <input
                name="zipcode"
                type="text"
                placeholder="Enter a zipcode"
                className="formTextArea"
                // onChange={handleChange}
              />
            </div>

            <div className="formField">
              <h2>Crime witnessed</h2>
              <textarea
                name="content"
                type="text"
                placeholder="Describe the crime"
                className="formTextAreawitness"
                // onChange={handleChange}
              />
            </div>
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
