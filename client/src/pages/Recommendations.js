import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecommendationCard from '../components/RecommendationCard';

function Recommendations(props) {
  const [recommendations, setRecommendations] = useState([]);

  const [search, setSearch] = useState('');
  const [click, setClick] = useState(false);
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `http://localhost:3001/api/recommendations/search?zipcode=${search}`
    );
    setResults(response.data.neighborhoodRecommendations);
    setClick(true);
  };

  return (
    <div className="recListing">
      <h1>Recommendations</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="recommendations"> </label>
        <select name="rec" id="rec" onChange={handleChange}>
          <option value="">Choose...</option>
          <option value="75019"> 75056 </option>
          <option value="10528"> 10528 </option>
        </select>
        <button>Submit</button>
      </form>
      {click
        ? results.map((element) => {
            return (
              <div key={element.id}>
                <h3>Neighborhood: {element.Neighborhood.name}</h3>
                <h3>Zipcode: {element.Neighborhood.zipcode}</h3>
                <h3>Category: {element.category}</h3>
                <p>{element.content}</p>
                <br />
              </div>
            );
          })
        : null}
    </div>
  );
}

export default Recommendations;
