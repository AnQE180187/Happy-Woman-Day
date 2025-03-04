import React from "react";
import { Link } from "react-router-dom";
import { FaImages, FaEnvelope, FaVideo } from "react-icons/fa";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="title">Happy Women's Day 💖</h1>
      <Row><div className="heart-container">
        {[...Array(30)].map((_, index) => (
          <span key={index} className="heart">💗</span>
        ))}
      </div>
      <div className="heart-container">
        {[...Array(30)].map((_, index) => (
          <span key={index} className="heart">💗</span>
        ))}
      </div>
      <div className="heart-container">
        {[...Array(30)].map((_, index) => (
          <span key={index} className="heart">💗</span>
        ))}
      </div>
      <div className="heart-container">
        {[...Array(30)].map((_, index) => (
          <span key={index} className="heart">💗</span>
        ))}
      </div></Row>
      
      
      <div className="icons-container">
        <Link to="/images" className="icon-link">
          <FaImages className="icon" />
          <p>Hình ảnh</p>
        </Link>
        <Link to="/messages" className="icon-link">
          <FaEnvelope className="icon" />
          <p>Lời chúc</p>
        </Link>
        <Link to="/videos" className="icon-link">
          <FaVideo className="icon" />
          <p>Video</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
