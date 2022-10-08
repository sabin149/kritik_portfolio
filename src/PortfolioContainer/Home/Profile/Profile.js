import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="cols-icon">
            <a href="https://www.facebook.com/RawalKritik" target="_blank"><i className="fa fa-facebook" /></a>

            <a href="https://www.instagram.com/kritikrawal" target="_blank"><i className="fa fa-instagram" /></a>
              
            <a href="https://twitter.com/RawalKritik/" target="_blank"><i className="fa fa-twitter" /></a>
                
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I AM <span className="highlighted-text">Kritik Rawal</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "A Developer",
                    1000,
                    "React Developer",
                    1000,
                    "Student",
                    1000,
                    "Learner",
                    1000,
                    "Voice Over Artist and Orator",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
               Join Hands with Kritik Rawal.
            </span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn"> Hire Me </button>
            <a href="KritikRawalCV.pdf" download="KritikRawal.pdf">
              <button className="btn highlighted-btn">Get My CV</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
