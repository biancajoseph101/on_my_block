import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Likes from '../components/Likes';
import { BaseURL } from '../globals';

function Recommendations(props) {
  const [search, setSearch] = useState('');
  const [click, setClick] = useState(false);
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `${BaseURL}/recommendations/search?zipcode=${search}`
    );
    setResults(response.data.neighborhoodRecommendations);
    setClick(true);
  };
  // Neighborhood Data
  const [zips, setZips] = useState([]);

  const getNeighborhoods = async (e) => {
    const res = await axios.get(`${BaseURL}/neighborhoods/`);
    setZips(res.data.neighborhoods);
  };

  useEffect(() => {
    getNeighborhoods();
  }, []);

  return (
    <div className="recListing">
      <h1>Recommendations</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="recommendations">zip code</label>
        <select name="rec" id="rec" onChange={handleChange}>
          <option value="">Choose...</option>
          {zips.map((element) => {
            return (
              <React.Fragment key={element.id}>
                <option value={element.zipcode}>{element.zipcode}</option>
              </React.Fragment>
            );
          })}
        </select>
        <button>Submit</button>
      </form>
      {click
        ? results.map((element) => {
            return (
              <div>
                <div className="elementContent">
                  <h3>Neighborhood: {element.Neighborhood.name}</h3>
                  <h3>Zipcode: {element.Neighborhood.zipcode}</h3>
                  <div key={element.id}>
                    <h3>Category: {element.category}</h3>
                    <p>{element.content}</p>
                  </div>
                  <br />
                </div>
                <Likes
                  recommendation_id={element.id}
                  authenticated={props.authenticated}
                />
              </div>
            );
          })
        : null}
    </div>
  );
}

export default Recommendations;
