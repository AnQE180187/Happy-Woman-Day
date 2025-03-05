import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import "../styles/ImagesPage.css";

import image1 from "../assets/images/IMG_20250305_085308_067.jpg";
import image2 from "../assets/images/IMG_20250305_085315_836.jpg";
import image3 from "../assets/images/IMG_20250305_085322_394.jpg";
import image4 from "../assets/images/IMG_20250305_085329_506.jpg";
import image5 from "../assets/images/IMG_20250305_085311_720.jpg";
import image6 from "../assets/images/IMG_20250305_085332_778.jpg";
import image7 from "../assets/images/IMG_20250305_085335_701.jpg";
import image8 from "../assets/images/IMG_20250305_085338_552.jpg";
import image9 from "../assets/images/IMG_20250305_085342_347.jpg";
import image10 from "../assets/images/IMG_20250305_085348_874.jpg";

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];;

const ImagesPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="images-container">
      <h1 className="title">Days With Bae 💖</h1>
      
      <div className="image-grid"> 
        {images.map((src, index) => (
          <div key={index} className="image-card" onClick={() => setSelectedImage(src)}>
            <img src={src} alt={`Women's Day ${index + 1}`} />
          </div>
        ))}
      </div>
      
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setSelectedImage(null)}>&times;</button>
            <div className="modal-image-wrapper">
              <img src={selectedImage} alt="Selected" className="modal-image" />
            </div>
          </div>
        </div>
      )}

      <Link to="/" className="home-button">
        <FaHome className="icon" />
        <span>Trang Chủ</span>
      </Link>
    </div>
  );
};

export default ImagesPage;