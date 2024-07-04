import { useState, FC, useEffect } from "react";
import { ImageSliderProps } from "../../interfaces";
import getImageURL from "../../utils/ImageURL";
import chevronLeft from "../../assets/icons/chevron-left.svg";
import chevronRight from "../../assets/icons/chevron-right.svg";
import "./ImageSlider.scss";
import "animate.css";

export const ImageSlider: FC<ImageSliderProps> = ({ imagesList }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(imagesList[currentIndex]);

  const getLeftImage = () => {
    if (currentIndex === 0) setCurrentIndex(() => imagesList.length - 1);
    else
      setCurrentIndex((currentIndex) => (currentIndex - 1) % imagesList.length);

    setCurrentImage(() => imagesList[currentIndex]);
  };
  const getRightImage = () => {
    setCurrentIndex((currentIndex) => (currentIndex + 1) % imagesList.length);
    setCurrentImage(imagesList[currentIndex]);
  };

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % imagesList.length);
      setCurrentImage(imagesList[currentIndex]);
    }, 5000);

    return () => {
      clearInterval(timerId);
    };
  }, [imagesList, currentIndex]);

  return (
    <div
      className="image-slider-container animate__animated animate__fadeInLeft"
      style={{ backgroundImage: `url(${getImageURL(currentImage.image)})` }}
    >
      <div className="image-caption">
        <img src={chevronLeft} alt="left-arrow" onClick={getLeftImage} />
        <Caption
          heading={currentImage.heading}
          caption={currentImage.caption}
        />
        <img src={chevronRight} alt="left-arrow" onClick={getRightImage} />
      </div>
    </div>
  );
};

type CaptionProps = {
  heading?: string;
  caption?: string;
};
export const Caption: FC<CaptionProps> = ({ heading, caption }) => {
  return (
    <div className="text animate__animated animate__fadeInLeft">
      <h2>{heading}</h2>
      <p>{caption}</p>
    </div>
  );
};
