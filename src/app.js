import React from "react";
import "./css/style.css";
import AddImage from "./components/AddImage";
import image from "./images/łolaboga.jpg";
import Header from "./components/Header";

const App = () => {
  const content = "Ru ru ru ru rurkowce!";
  return (
    <>
      <Header content={content}></Header>
      <AddImage url={image}></AddImage>
    </>
  );
};

export default App;
