import React, { useEffect, useState } from "react";

const HeartAnimation = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart = {
        id: Math.random(),
        left: `${Math.random() * 100}vw`, // Vị trí ngẫu nhiên trên chiều ngang
        animationDuration: `${3 + Math.random() * 2}s`, // Thời gian bay lên khác nhau
      };
      setHearts((prev) => [...prev, newHeart]);

      // Xóa bớt trái tim sau 5s để tránh quá tải DOM
      setTimeout(() => {
        setHearts((prev) => prev.filter((heart) => heart.id !== newHeart.id));
      }, 5000);
    }, 500); // Tạo trái tim mới mỗi 500ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="heart-container">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="heart"
          style={{
            left: heart.left,
            animationDuration: heart.animationDuration,
          }}
        >
          ❤️
        </span>
      ))}
    </div>
  );
};

export default HeartAnimation;
