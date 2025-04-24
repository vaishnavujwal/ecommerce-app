import { useEffect, useState } from "react";
import "./ImageSlider.css";

const images = [
  "/slider/slider-4.jpeg",
  "/slider/slider-5.jpeg",
  "/slider/slider-6.jpeg"
];

function ImageSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (

    <div className="slider-container">

      <div className="slider">
        <img src={images[current]} alt={`Slide ${current + 1}`} />
        <div className="progress-bar">
          <div key={current} className="progress-line"></div>
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
