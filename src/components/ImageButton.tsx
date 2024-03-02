import React from "react";
import "./ImageButton.css";

type ImageButtonProps = {
  image: string;
  onClick: () => void;
};

const ImageButton: React.FC<ImageButtonProps> = ({ image, onClick }) => {
  return (
    <button className="imageButton" onClick={onClick}>
      <img className="imageButtonImage" src={image} alt="Button" />
    </button>
  );
};

export default ImageButton;
