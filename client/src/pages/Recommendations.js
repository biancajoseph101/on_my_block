import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Recommendations(props) {
  const [search, setSearch] = useState('');
  const [click, setClick] = useState(false);
  const [results, setResults] = useState([]);
  const [likes, setLikes] = useState({
    likes: 0
  });

  const handleLike = async (e) => {
    e.preventDefault();
    console.log(props);
    await axios.put(`http://localhost:3001/api/recommendations/${id}`, {
      likes: setLikes(likes++)
    });
  };

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
          <option value="60629"> 60629 </option>
          <option value="83702"> 83702 </option>
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
                <button onClick={handleLike} className="likes">
                  like
                </button>
                <h1>{likes}</h1>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default Recommendations;
