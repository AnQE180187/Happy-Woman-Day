import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ImagesPage from "./pages/ImagesPage";
import MessagesPage from "./pages/MessagesPage";
import VideosPage from "./pages/VideosPage";


const App = () => {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/images" element={<ImagesPage />} />
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/videos" element={<VideosPage />} />
      </Routes>
    </Router>
  );
};

export default App;
