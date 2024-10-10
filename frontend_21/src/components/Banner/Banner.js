import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const CustomSlide = ({ Subtext, imgSrc, text, buttonLink, buttonText }) => (
  <div
    style={{
      position: "relative",
      backgroundImage: `url(${imgSrc})`,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "300px",
      textAlign: "center",
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "92vw",
      margin: "0 auto",
      borderRadius: "30px",
      backgroundRepeat: "no-repeat",
    }}
    className="md:w-[92vw] w-[100vw] h-[300px] md:h-[500px] rounded-md"
  >
    {/* Opaque overlay */}
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        borderRadius: "30px",
      }}
      className="rounded-lg"
    />
    
    {/* Content */}
    <div
      style={{
        position: "relative",
        width: "80%",
        zIndex: 1,
        color: "white",
      }}
      className="md:w-[70%] w-[90%] px-4"
    >
      <h1
        style={{
          marginBottom: "10px",
          fontSize: "2rem", // Increased font size for large text
          fontWeight: "600",
          lineHeight: "0.8", // Adjust line height for better spacing
        }}
        className="text-xl md:text-6xl" // Responsive font sizes
      >
        {text}
      </h1>
      <p
        style={{
          marginBottom: "10px",
          fontSize: "1rem", // Increased font size for subtext
        }}
        className="text-lg md:text-3xl"
      >
        {Subtext}
      </p>

      <Link to={buttonLink}>
        <button className="bg-[#EE4266] text-white text-sm md:text-lg font-bodyFont w-[150px] md:w-[185px] h-[40px] md:h-[50px] rounded-md hover:bg-black duration-300 font-bold">
          {buttonText}
        </button>
      </Link>
    </div>
  </div>
);

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    arrows: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  const slides = [
    {
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2wogP6bfs8sygMyWMhReSVNBIME5HNRoQbA&s",
      text: "Lorem ipsum dolor sit amet",
      Subtext:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      buttonLink: "/about",
      buttonText: "About-us",
    },
    {
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTerF7GZVxEy4j8_YU9hVIP_DxgrlWD03GYEg&s",
      text: "Lorem ipsum dolor",
      Subtext:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      buttonLink: "/about",
      buttonText: "Shop Now",
    },

    {
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfV1MU2Ik8x645XZK8ZgOZNlme5bbVdw7cDA&s",
      text: "Lorem ipsum",
      Subtext:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      buttonLink: "/contact",
      buttonText: "Contact-us",
    },
  ];

  return (
    <div className="w-full bg-white" data-testid="banner">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <CustomSlide key={index} {...slide} />
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
