import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const images = [
  "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
  "https://images.pexels.com/photos/1395964/pexels-photo-1395964.jpeg",
  "https://images.pexels.com/photos/7974/pexels-photo.jpg",
  "https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Effect to change the slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // 3000 milliseconds = 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="relative w-full h-[60vh] overflow-hidden">
      <img
        src={images[currentIndex]}
        alt="Slider"
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
      />
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 border rounded-full p-2 m-2"
        onClick={prevSlide}
      >
        ❮
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 border rounded-full p-2 m-2"
        onClick={nextSlide}
      >
        ❯
      </button>
      <Link
        to="/products"
        className="absolute left-[50%] top-[80%] -translate-x-[50%] -translate-y-[50%] text-center mb-28 text-3xl rounded-lg h-fit px-4 py-3 bg-green-500 text-white"
      >
        View All Products
      </Link>
    </div>
  );
};

export default ImageSlider;
