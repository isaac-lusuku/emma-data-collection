import React from "react";
import Image from "../../designLayouts/Image";

const Body3 = () => {
  return (
    <div
      data-testid="sale"
      className="w-full h-auto mb-10 md:mb-20 flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden"
    >
      <div className="w-full md:w-1/2 h-auto md:h-80 flex flex-col justify-center p-6">
        <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
          Faccusantium dolorem:
        </h2>
        <p className="text-base md:text-xl text-gray-800 leading-relaxed mb-4">
        error sit voluptatem accusantium doloremque laudantium ut perspiciatis unde omnis it quasi architecto beatae vitae dicta sunt explicabo
        </p>
      </div>
      <Image
        className="w-full md:w-1/2 h-48 md:h-80 object-cover"
        imgSrc={"https://www.shutterstock.com/shutterstock/videos/3533710443/thumb/1.jpg?ip=x480"} // Add your image source here
      />
    </div>
  );
};

export default Body3;
