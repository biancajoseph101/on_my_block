import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

function Home(props) {
  return (
    <div>
      {props.authenticated ? <h1>Welcome back, {props.username}!</h1> : null}
      <h1>What's the Talk of the Town?</h1>
      <vl />
      <img
        className="homeicon"
        src="/D437A146-B67B-49B2-AC1F-14D6EA545027.png"
        height="700"
        width="350"
      />
      <vl />
      <img
        className="homeicon"
        src="/BBE7EE18-FC70-422E-B3F5-D9971FE6BEFC.png"
        height="700"
        width="350"
      />{' '}
      <vl />
      <img
        className="homeicon"
        src="/8CA2D45E-1D78-45B0-9583-ABD29EC5DCFE.png"
        height="350"
        width="350"
      />
      <hr />
      <br />
      <p className="hometext">
        On my Block is where you can receive all the info you need when entering
        a new town. If you make an account you can post crime tips,
        recommendations about your city, and even like and comment on other's
        posts. There's a community of folks out there from all over the country.
        We have safety tips out there as well.
      </p>
      <h1> Get involved!</h1>
      <hr />
      <Link to="/signup" className="homelinks">
        Make an Account!
      </Link>
      <br />
      <Link to="/login" className="homelinks">
        Sign In!
      </Link>
    </div>
  );
}

export default Home;
