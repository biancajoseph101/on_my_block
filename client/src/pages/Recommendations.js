import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Likes from '../components/Likes';

function Recommendations(props) {
  const [search, setSearch] = useState('');
  const [click, setClick] = useState(false);
  const [results, setResults] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  async function createRecommendations(e) {
    e.preventDefault();
    const zipcodes = e.target.zipcodes.value;
    const response = await axios.get(
      `http://localhost:3001/api/neighborhoods/search?zipcode=${zipcodes}`
    );
    const newRecommendation = {
      category: e.target.category.value,
      content: e.target.content.value,
      likes: 0,
      neighborhoodId: response.data[0].id,
      userId: props.id
    };
    await axios.post(
      `http://localhost:3001/api/recommendations/`,
      newRecommendation
    );
    window.location.reload();
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `http://localhost:3001/api/recommendations/search?zipcode=${search}`
    );
    setResults(response.data.neighborhoodRecommendations);
    setClick(true);
  };
  // Neighborhood Data
  const [zips, setZips] = useState([]);

  const getNeighborhoods = async (e) => {
    const res = await axios.get(`http://localhost:3001/api/neighborhoods/`);
    setZips(res.data.neighborhoods);
  };
  const getRecommendations = async (e) => {
    const res = await axios.get(`http://localhost:3001/api/recommendations/`);
    setRecommendations(res.data.recommendations);
  };

  useEffect(() => {
    getNeighborhoods();
    getRecommendations();
  }, []);

  return (
    <div className="recListing">
      <h1>See all recommendations in the area</h1>
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
        <br />
        <button>Submit</button>
        <hr />
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
                {recommendations.map((element) => {
                  if (element.userId === parseInt(props.id)) {
                    return (
                      <div key={element.id}>
                        <p className="allcomments">
                          Category: {element.category}
                        </p>
                        <p className="allcomments">{element.content}</p>
                        {element.userId === props.id && (
                          <>
                            <button
                              id="editbuttonid"
                              onClick={() =>
                                props.history.push(
                                  `/recommendations/update/${element.id}`
                                )
                              }
                            >
                              EDIT
                            </button>
                            <button
                              id="xbuttonid"
                              onClick={async () => {
                                await axios.delete(
                                  `http://localhost:3001/api/recommendations/${element.id}`
                                );
                                window.location.reload();
                              }}
                            >
                              Delete
                            </button>
                            <Likes
                              recommendation_id={element.id}
                              authenticated={props.authenticated}
                            />
                            <hr />
                          </>
                        )}
                      </div>
                    );
                  }
                })}
                <Likes
                  recommendation_id={element.id}
                  authenticated={props.authenticated}
                />
              </div>
            );
          })
        : null}
      {props.authenticated ? (
        <div>
          <h1>Make a new Recommendation</h1>
          <form onSubmit={createRecommendations}>
            <label htmlFor="create_a_recommendation">zip code</label>
            <select name="zipcodes" id="rec" onChange={handleChange}>
              <option>Choose...</option>
              {zips.map((element) => {
                return (
                  <React.Fragment key={element.id}>
                    <option value={element.zipcode}>{element.zipcode}</option>
                  </React.Fragment>
                );
              })}
            </select>
            <br />
            <input
              name="category"
              type="text"
              placeholder="category"
              className="formTextArea"
              required
            />
            <br />
            <textarea
              name="content"
              type="text"
              placeholder="Details"
              className="formTextAreawitness"
              required
            />
            <br />
            <button>Post</button>
          </form>
        </div>
      ) : (
        <div>
          <h1>Do you wanna post some recommendations?</h1>
          <hr />
          <Link className="biggerlinks" to="/login">
            Login!
          </Link>
        </div>
      )}
    </div>
  );
}

export default Recommendations;
