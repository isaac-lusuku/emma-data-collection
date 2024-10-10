import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import Contact from "../Contact/Contact";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="flex ">
      <div className="max-w-container mx-auto px-4">
        <Breadcrumbs title="About" prevLocation={prevLocation} />
        <div className="pb-10">
          <h1 className="max-w-[600px] text-base text-lightText mb-2">
            <span className="text-primeColor font-semibold text-lg">GROUP 21</span>{" "}
            is one of the world's leading ecommerce brands and is internationally
            recognized for celebrating the essence of classic Worldwide cool
            looking style and products.
          </h1>
          <Link to="/shop">
            <button className="w-52 h-10 bg-primeColor text-white hover:bg-red-900 duration-300">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
      <Contact />
    </div>

  );
};

export default About;
