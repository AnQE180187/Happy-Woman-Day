import React from "react";
import { Link } from "react-router-dom";
import { FaImages, FaEnvelope, FaVideo } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Home.css";
import HeartAnimation from "./HeartAnimation";

const Home = () => {
  return (
    <div className="home-container">
      <HeartAnimation/>
      <h1 className="title">Happy Women's Day 💖</h1>
      
      
      
      <div className="icons-container">
        <Link to="/images" className="icon-link">
          <FaImages className="icon" />
          
        </Link>
        <Link to="/messages" className="icon-link">
          <FaEnvelope className="icon" />
          
        </Link>
        <Link to="/videos" className="icon-link">
          <FaVideo className="icon" />
         
        </Link>
      </div>
    </div>
  );
};

export default Home;
