import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import "../styles/MessagesPage.css";

const messages = [
  "Chúc mừng Ngày Phụ Nữ! Chúc bạn luôn xinh đẹp, mạnh mẽ và hạnh phúc! 💖",
  "Chúc bạn có một ngày tràn đầy yêu thương và niềm vui! 🌹",
  "Chúc bạn luôn được yêu thương, trân trọng và thành công trong cuộc sống! 🎉",
  "Mong bạn luôn giữ nụ cười rạng rỡ trên môi và hạnh phúc mãi mãi! 😊",
  "Hôm nay là ngày của bạn! Chúc bạn có một ngày tuyệt vời bên những người thân yêu! 💕"
];

const MessagesPage = () => {
  return (
    <div className="messages-container">
      <h1 className="title">Lời Chúc Ngày Phụ Nữ 🎉</h1>
      
      <ul className="message-list">
        {messages.map((msg, index) => (
          <li key={index} className="message-card">
            {msg}
          </li>
        ))}
      </ul>

      <Link to="/" className="home-button">
        <FaHome className="icon" />
        <span>Trang Chủ</span>
      </Link>
    </div>
  );
};

export default MessagesPage;
