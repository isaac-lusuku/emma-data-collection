import React, { useState, useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Flex from "../../designLayouts/Flex";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { SampleData } from "../../../constants";
import { IoRocket } from "react-icons/io5";
import  SpecialCase  from "../../SpecialCase/SpecialCase";


const HeaderBottom = () => {
  const products = useSelector((state) => state.mainReducer.products);
  const [showUser, setShowUser] = useState(false);
  const navigate = useNavigate();
  const ref = useRef();

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showSearchBar, setShowSearchBar] = useState(false);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const filtered = SampleData.filter((item) =>
      item.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery]);

  return (
    <div className="w-full bg-[#F5F5F3] relative bg-opacity-0">
      <div className="max-w-container mx-auto">
        <Flex className="flex  lg:flex-row items-start lg:items-center justify-between w-full px-4 pb-4 lg:pb-0 h-full lg:h-24">
        
        {/* -----------THIS IS THE START SHOPPING BUTTON AND LEADS TO THE SHOPPING PAGE------------ */}
        <Link to="/shop">
        <div className="flex justify-center m-4 h-8 w-40 lg:h-12  lg:w-60 cursor-pointer items-center gap-2 text-primeColor border-[#EE4266] border-2 rounded-2xl">
            <IoRocket className="w-5 h-5 text-[#EE4266]" />
            <p className="text-[14px] font-normal">START SHOPPING</p>
          </div>
        </Link>
        {/* ------------THE SEARCH BAR-------------- */}
          <div className="relative  bg-white w-[50vw] m-4 p-1 lg:w-[600px] lg:h-[50px] text-base text-primeColor flex items-center gap-2 justify-between pl-6 pr-2 rounded-xl border-[#EE4266] border-2">
            <input
              className="flex-1 h-full outline-none placeholder:text-[#C4C4C4] placeholder:text-[14px]"
              type="text"
              onChange={handleSearch}
              value={searchQuery}
              placeholder="Search your products here"
            />
            <div className="w-16 h-10.5 bg-[#EE4266] rounded-xl flex justify-center items-center ">
            <FaSearch className="w-7 h-5 bg-[#EE4266] text-white m-2" />
            </div>
            {searchQuery && (
              <div
                className={`w-full mx-auto h-96 bg-white top-16 absolute left-0 z-50 overflow-y-scroll shadow-2xl scrollbar-hide cursor-pointer`}
              >
                {searchQuery &&
                  filteredProducts.map((item) => (
                    <div
                      onClick={() =>
                        navigate(
                          `/product/${item.productName
                            .toLowerCase()
                            .split(" ")
                            .join("")}`,
                          {
                            state: {
                              item: item,
                            },
                          }
                        ) &
                        setShowSearchBar(true) &
                        setSearchQuery("")
                      }
                      key={item._id}
                      className="max-w-[600px] h-28 bg-gray-100 mb-3 flex items-center gap-3"
                    >
                      <img className="w-24" src={item.img} alt="productImg" />
                      <div className="flex flex-col gap-1">
                        <p className="font-semibold text-lg">
                          {item.productName}
                        </p>
                        <p className="text-xs">
                          {item.des.length > 100
                            ? `${item.des.slice(0, 100)}...`
                            : item.des}
                        </p>
                        <p className="text-sm">
                          Price:{" "}
                          <span className="text-primeColor font-semibold">
                            UGX{item.price}
                          </span>
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
          {/* --------END OF SEARCH BAR---------- */}
          <SpecialCase/> 
        </Flex>
      </div>
    </div>
  );
};

export default HeaderBottom;
