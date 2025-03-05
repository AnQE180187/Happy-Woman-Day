import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import "../styles/ImagesPage.css";
import { motion } from "framer-motion";
import image1 from "../assets/images/IMG_20250305_085308_067.jpg";
import image2 from "../assets/images/IMG_20250305_085540_788.jpg";
import image3 from "../assets/images/IMG_20250305_085455_670.jpg";
import image4 from "../assets/images/IMG_20250305_085416_425.jpg";
import image5 from "../assets/images/IMG_20250305_085311_720.jpg";

const images = [image1, image2, image3, image4, image5];;

const ImagesPage = () => {
  return (
    <div className="images-container">
      <motion.h1 
        className="title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Days With Bae 💖
      </motion.h1>
      
      <div className="image-grid"> 
        {images.map((src, index) => (
          <motion.div 
            key={index} 
            className="image-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img src={src} alt={`Women's Day ${index + 1}`} />
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Link to="/" className="home-button">
          <FaHome className="icon" />
          <span>Trang Chủ</span>
        </Link>
      </motion.div>
    </div>
  );
};

export default ImagesPage;