import React from 'react';

const About = () => {
  return (
    <div className="about">
      <h1>Welcome to On My Block</h1>
      <hr />
      <div>
        <h5 className="our-about">
          The basic idea is for neighbors to watch out for each other. By
          looking after a neighbors property as if it were your own, you will
          more likely contact the police if you observe something suspicious.
          Citizens act as extra "eyes and ears" so the right measures can be
          made when criminal activity is suspected. An alert and cooperative
          neighborhood is the greatest single defense against crime. By getting
          to know your neighbors and their vehicles, you will most likely be
          alert to suspicious people, vehicles, and/or sounds that could
          indicate criminal activity.
        </h5>
        <hr />
        <h1>This app was created by Bianca, Abidur, Calvin and Nashid</h1>
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" />
        <div className="links">
          <ul className="aboutul">
            <li>
              <h2>
                <img src="https://avatars.githubusercontent.com/u/93398631?v=4" />
                <a
                  className="abouttext"
                  href="https://www.linkedin.com/in/biancaclairejoseph/"
                >
                  Bianca
                </a>
              </h2>
            </li>
            <li>
              <h2>
                <img src="https://avatars.githubusercontent.com/u/87242570?v=4" />
                <a
                  className="abouttext"
                  href="https://www.linkedin.com/in/nashid-alam-02602147/"
                >
                  Nashid
                </a>
              </h2>
            </li>
            <li>
              <h2>
                <img src="https://avatars.githubusercontent.com/u/67972965?v=4" />
                <a
                  className="abouttext"
                  href="https://www.linkedin.com/in/abidurrahmandipta"
                >
                  Abidur
                </a>
              </h2>
            </li>
            <li>
              <h2>
                <img src="https://avatars.githubusercontent.com/u/58853852?v=4" />
                <a
                  className="abouttext"
                  href="https://www.linkedin.com/in/calvin-menyfield/"
                >
                  Calvin
                </a>
              </h2>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
