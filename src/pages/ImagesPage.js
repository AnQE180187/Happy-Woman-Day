import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";


const images = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
  "/images/image5.jpg"
];

const ImagesPage = () => {
  return (
    <div className="images-container">
      <h1 className="title">Hình Ảnh Ngày Phụ Nữ 💖</h1>
      
      <div className="image-grid">
        {images.map((src, index) => (
          <div key={index} className="image-card">
            <img src={src} alt={`Women's Day ${index + 1}`} />
          </div>
        ))}
      </div>

      <Link to="/" className="home-button">
        <FaHome className="icon" />
        <span>Trang Chủ</span>
      </Link>
    </div>
  );
};

export default ImagesPage;
