import React from "react";
import { FaFacebook, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";
import FooterListTitle from "./FooterListTitle";
import { paymentCard, emptyCart } from "../../../assets/images";
import Image from "../../designLayouts/Image";

const Footer = () => {
  return (
    <div className="w-full bg-[#F5F5F3] py-10 md:py-20">
      <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 px-4 gap-6 md:gap-10">
        <div className="col-span-1 md:col-span-2 lg:col-span-2 text-center">
          <FooterListTitle title="Wsut perspiciatis unde omnis" />
          <div className="flex flex-col gap-4 md:gap-6 items-center">
            <p className="text-base md:text-lg w-full md:w-[80%]">
            sit voluptatem accusantium doloremque laudantium ut perspiciatis unde omnis it quasi architecto beatae
            </p>
            <ul className="flex flex-wrap gap-2 justify-center">
              <a
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <li className="w-8 h-8 md:w-10 md:h-10 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                  <FaYoutube />
                </li>
              </a>
              <a
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <li className="w-8 h-8 md:w-10 md:h-10 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                  <FaGithub />
                </li>
              </a>
              <a
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <li className="w-8 h-8 md:w-10 md:h-10 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                  <FaFacebook />
                </li>
              </a>
              <a
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <li className="w-8 h-8 md:w-10 md:h-10 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                  <FaLinkedin />
                </li>
              </a>
            </ul>
          </div>
        </div>
        <div>
          <FooterListTitle title="Services" />
          <ul className="flex flex-col gap-2">
            <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
            Power Purchases and Sales
            </li>
            <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
            Optic Fiber
            </li>
            <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
            Njeru Training School
            </li>
          </ul>
        </div>
        <div>
          <FooterListTitle title="Get Intouch" />
          <ul className="flex flex-col gap-2">
            <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
            Tel: +256-417 802 000
            </li>
            <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
            Tel: +256-314 802 000
            </li>
            <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
            Email: transco@uetcl.com
            </li>
            <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
            Plot No.10, Hannington Rd
            </li>
            <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
            P.O Box 7625, Kampala, Uganda
            </li>
          </ul>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col items-center w-full px-4">
          <div className="w-full">
            
            <Image
              className="w-[100%] lg:w-[100%] mx-auto mt-4"
              imgSrc={"https://uetcl.go.ug/wp-content/uploads/2024/04/UETCL-PNG-Logo.png"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
