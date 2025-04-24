import React, { useEffect, useState } from "react";
import "./ProductGallery.css";

const productImages = [
  { id: 1, src: `${import.meta.env.BASE_URL}images/cart-1.jpeg`, alt: "Shoes" },
  { id: 2, src: `${import.meta.env.BASE_URL}images/cart-3.jpeg`, alt: "Makeup-kit" },
  { id: 3, src: `${import.meta.env.BASE_URL}images/img-26.jpg`, alt: "T-Shirts" },
  { id: 4, src: `${import.meta.env.BASE_URL}images/cart-4.jpeg`, alt: "Watches" },
  { id: 5, src: `${import.meta.env.BASE_URL}images/cart-2.jpeg`, alt: "Makeup" },
  { id: 6, src: `${import.meta.env.BASE_URL}images/cart-6.jpeg`, alt: "Helmets" },
  { id: 7, src: `${import.meta.env.BASE_URL}images/cart-11.jpeg`, alt: "Neckles" },
  { id: 8, src: `${import.meta.env.BASE_URL}images/cart-12.png`, alt: "Gogles" },
  { id: 9, src: `${import.meta.env.BASE_URL}images/cart-8.jpeg`, alt: "Bracelets" },
  { id: 10, src: `${import.meta.env.BASE_URL}images/cart-1.jpeg`, alt: "Shoes" },
];


const ProductGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % productImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleImageClick = (id) => {
    alert(`Show related products for product ID: ${id}`);
  };

  return (
    <div className="carousel-wrapper">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {productImages.map((img) => (
          <div key={img.id} className="carousel-item" onClick={() => handleImageClick(img.id)}>
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
