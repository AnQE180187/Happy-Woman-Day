import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";


const videos = [
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://www.w3schools.com/html/movie.mp4",
  "https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
];

const VideosPage = () => {
  return (
    <div className="videos-container">
      <h1 className="title">Video Chúc Mừng Ngày Phụ Nữ 🌸</h1>
      
      <div className="video-grid">
        {videos.map((src, index) => (
          <div key={index} className="video-card">
            <video controls>
              <source src={src} type="video/mp4" />
              Trình duyệt của bạn không hỗ trợ video.
            </video>
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

export default VideosPage;
