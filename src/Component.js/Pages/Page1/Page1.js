import React from "react";
import "./Page1.css";
import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";
import { HiOutlineHandRaised } from "react-icons/hi2";
import { Link } from "react-router-dom";

function Page1() {
  return (
    <>
      <div className="Page1">
        <div className="box11">
          <div className="rotating-text-container">
            <div style={{ fontSize: "3vh", color: "skyblue" }}>
              <div className="rotating-text-container">
                Hi There !
                <div className="rotating-icon">
                  <HiOutlineHandRaised className="icon" />
                </div>
              </div>
            </div>
          </div>

          <br />
          <span
            style={{
              fontSize: "3.5vh",
              color: "skyblue",
              fontWeight: "lighter",
            }}
          >
            I'M
          </span>
          <span
            style={{
              fontSize: "5vh",
              color: "blue",
              marginLeft: "16px",
              fontWeight: "600",
            }}
          >
            Suvarna Somvanshi
          </span>
          <br />
          <br />
          <span style={{ fontSize: "15px", color: "skyblue" }}>
            Frond-End-Developer
          </span>
          <br />
          <br />

          <span style={{ fontSize: "4vh", color: "skyblue" }}>
            I am responsible,Consistant, self motivated person.
            <br />
            Always Try to give best of mySelf.
            <br />
            Consistant learner of new things.
            <br />
          </span>

          <span className="footer1">
            <Link to="https://drive.google.com/file/d/1IoLtOnqc3MuYrTPQXsm8HHAaXdN9iFyB/view?usp=drivesdk">
            <button
              style={{
                fontSize: "2.5vh",
                height: "4vh",
                background: "darkblue",
              }}
            >
              resume
            </button>
            </Link>
            <Link to="https://github.com/suvarnasomvanshi">
              <button
                style={{
                  width: "8vh",
                  background: "darkblue",
                  borderRadius: "5px",
                }}
              >
                {" "}
                <GoMarkGithub style={{ fontSize: "25px", color: "black" }} />
              </button>
            </Link>

            <Link to="https://www.linkedin.com/in/suvarna-somvanshi-08bbb0254">
              <button
                style={{
                  width: "8vh",
                  background: "darkblue",
                  borderRadius: "5px",
                }}
              >
                {" "}
                <BsLinkedin style={{ fontSize: "25px", color: "black" }} />
              </button>
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}
export default Page1;
