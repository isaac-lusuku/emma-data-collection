import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";

const FooterBottom = () => {
  return (
    <div className="w-full bg-[#F5F5F3] group">
      <div className="max-w-container mx-auto border-t-[1px] pt-6 md:pt-10 pb-10 md:pb-20">
        <p className="text-titleFont font-normal text-center text-lightText text-xs md:text-sm flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
          <span className="text-base mr-1 md:mr-2">
            <AiOutlineCopyright />
          </span>
          <span className="text-base">
            Copyright 2024 | <span className="text-gray">UGANDA ELECTRICITY TRANSMITION COMPANY LIMITED</span> | All Rights Reserved
          </span>
          
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;
