import React from "react";
import { useNavigate } from "react-router-dom";
import Image from "../../designLayouts/Image";

const Body2 = (props) => {
  const product = props.item;
  const navigate = useNavigate();

  const handleProductDetails = () => {
    navigate(`/product/${product.id}`, {
      state: {
        item: product.id,
      },
    });
  };

  return (
    <div
      data-testid="year-product"
      className="w-full h-auto mb-10 md:mb-20 relative font-titleFont flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden"
    >
      <Image
        className="w-full md:w-1/2 h-48 md:h-80 object-cover"
        imgSrc="https://le.aerialliftcertification.com/wp-content/uploads/2020/12/bigstock-210242005.jpg"
      />

      <div className="w-full md:w-1/2 h-auto md:h-80 flex flex-col justify-center p-6">
        <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
        error sit voluptatem accusantium:
        </h2>
        <p className="text-base md:text-xl text-gray-800 leading-relaxed mb-4">
        Error sit voluptatem accusantium doloremque laudantium ut perspiciatis unde omnis it quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam .
        </p>
        <button
          onClick={handleProductDetails}
          className="bg-[#EE4266] text-white text-lg font-bold w-full py-2 rounded-md hover:bg-black duration-300"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Body2;
