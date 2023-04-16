import React, { useState } from "react";
import { GoMarkGithub } from "react-icons/go";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
//
import { Link } from "react-router-dom";
import "./Page5.css";

const projects = [
  {
    name: "1.Register-login Page",
    description:
      "Build UI using React.js   technology  . Desinged UI for registration and login page. Developed  clean code using CSS, React.js.It include input fields for email,usernmae & password in registration page & userName, password i login page",
    image: "slide1.jpg",
    Logo: (
      <Link to="https://github.com/suvarnasomvanshi/project1-login-registration-page">
        <GoMarkGithub style={{ fontSize: "35px", color: "blue" }} />
      </Link>
    ),
  },
  {
    name: "2.Gym-app",
    description:
      "Build UI using React.js technology. Desinged UI for gym-website. Developed clean code using CSS, React.js .Website has Login & registration page,to use website .It is has subscription functionality,according to subsciption it get plan to workout in gym",
    image: "slide2.jpg",
    Logo: (
      <Link to="https://github.com/suvarnasomvanshi/project-gym-website">
        <GoMarkGithub style={{ fontSize: "35px", color: "blue" }} />
      </Link>
    ),
  },

  {
    name: "3.Movie-app",
    description:
      "Build UI using React.js technology. Desinged UI for movie app which shows updated movies list. Developed clean code using CSS, React.js. It fetch API &show on UI.It has functionality to add favourite movie in favourite movie section",
    image: "slide3.jpg",
    Logo: (
      <Link to="https://github.com/suvarnasomvanshi/movie-app">
        <GoMarkGithub style={{ fontSize: "35px", color: "blue" }} />
      </Link>
    ),
  },
  {
    name: "4.google-docs clone",
    description:
      "Build UI using React.js technology. Desinged UI for google docs . Developed clean code using CSS, React.js .It has most of all functionality as google docs include.",
    image: "slide4.jpg",
    Logo: (
      <Link to="https://github.com/suvarnasomvanshi/google-docs-project-5">
        <GoMarkGithub style={{ fontSize: "35px", color: "blue" }} />
      </Link>
    ),
  },
];

const Page5 = () => {
  // State to keep track of current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of project data
  const projects = [
    {
      name: "1.Register-login Page",
      description:
        "Build UI using React.js   technology  . Desinged UI for registration and login page. Developed  clean code using CSS, React.js.It include input fields for email,usernmae & password in registration page & userName, password i login page",
      image: "slide1.jpg",
      Logo: (
        <Link to="https://github.com/suvarnasomvanshi/project1-login-registration-page">
          <GoMarkGithub style={{ fontSize: "25px", color: "blue" }} />
        </Link>
      ),
    },
    {
      name: "2.Gym-app",
      description:
        "Build UI using React.js technology. Desinged UI for gym-website. Developed clean code using CSS, React.js .Website has Login & registration page,to use website .It is has subscription functionality,according to subsciption it get plan to workout in gym",
      image: "slide2.jpg",
      Logo: (
        <Link to="https://github.com/suvarnasomvanshi/project-gym-website">
          <GoMarkGithub style={{ fontSize: "35px", color: "blue" }} />
        </Link>
      ),
    },

    {
      name: "3.Movie-app",
      description:
        "Build UI using React.js technology. Desinged UI for movie app which shows updated movies list. Developed clean code using CSS, React.js. It fetch API &show on UI.It has functionality to add favourite movie in favourite movie section",
      image: "slide3.jpg",
      Logo: (
        <Link to="https://github.com/suvarnasomvanshi/movie-app">
          <GoMarkGithub style={{ fontSize: "35px", color: "blue" }} />
        </Link>
      ),
    },
    {
      name: "4.google-docs clone",
      description:
        "Build UI using React.js technology. Desinged UI for google docs . Developed clean code using CSS, React.js .It has most of all functionality as google docs include.",
      image: "slide4.jpg",
      Logo: (
        <Link to="https://github.com/suvarnasomvanshi/google-docs-project-5">
          <GoMarkGithub style={{ fontSize: "35px", color: "blue" }} />
        </Link>
      ),
    },
  ];

  // Function to handle next slide
  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 3 ? 0 : prevSlide + 1));
  };

  // Function to handle previous slide
  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 3 : prevSlide - 1));
  };

  return (
    <>
      <div className="slider-container">
        {/* Render the current slide */}
        <div className="slide">
          <h2 className="h25">{projects[currentSlide].name}</h2>
          <p
            style={{
              marginLeft: "1vw",
              marginTop: "5vw",
              fontWeight: "600",
              color: "whitesmoke",
            }}
          >
            {projects[currentSlide].description}
          </p>
          <p
            style={{
              color: "white",
              marginLeft: "10vw",
              fontSize: "3vh",
              marginTop: "5vw",
            }}
          >
            view source code :
            <button style={{ marginLeft: "1vw" }}>
              {projects[currentSlide].Logo}
            </button>
          </p>
        </div>

        {/* Render next and previous buttons */}
      </div>

      <div   className="mleft">
        <MdChevronLeft 
        size={50} 
        onClick={handlePrevSlide} />
      </div>

         <div className="mright">
          <MdChevronRight
          size={50}
          onClick={handleNextSlide}
        />
      </div>
    </>
  );
};

export default Page5;
