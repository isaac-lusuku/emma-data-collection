import React from "react";

const Body4 = () => {
  const divStyle = {
    backgroundImage:
      'url("https://www.giscloud.com/assets/wp-content/uploads/2017/12/Electric-Utilities2-1.jpg_1644800613.webp")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div
      data-testid="start-selling"
      className="relative h-auto w-full max-w-4xl mx-auto mb-16 bg-cover bg-center bg-no-repeat "
      style={divStyle}
    >
      <div className="relative text-white w-full flex flex-col items-center justify-center py-8 px-6 text-center bg-black bg-opacity-50">
        <h1 className="text-xl font-bold md:text-2xl lg:text-3xl mb-4">
        Voluptatem accusantium <span className="text-themeColor">voluptate</span>
        </h1>
        <p className="text-sm lg:text-lg mb-4">
        Rit voluptatem accusantium doloremque laudantium ut perspiciatis unde omnis it quasi architecto beatae
        </p>
        <div className="border-2 border-black rounded-md text-black h-10 w-36 flex items-center justify-center bg-white hover:bg-gray-200">
          <span>FILL THE FORM</span>
        </div>
      </div>
    </div>
  );
};

export default Body4;
