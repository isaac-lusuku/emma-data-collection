import React, { useState, useRef } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import { useVirtualizer } from '@tanstack/react-virtual';
import { useDispatch} from "react-redux";
import { jwtDecode } from "jwt-decode";
import { addId,} from "../../redux/mainSlice";

const CombinedComponent = () => {
  const dispatch = useDispatch();
  const parentRef = useRef();

  // State for sign-in and form data
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // To toggle the form display

  const [formData, setFormData] = useState(Array(27).fill({ reading1: 0, reading2: 0 }));


  // Data for the virtualized table
  const data = [
    "UETCL No.",
    "H1:Cum Import (MWh)",
    "H1:Cum Export (MWh)",
    "Apparent Power",
    "H1: Rate 1(MWh)",
    "H1: Rate 2(MWh)",
    "H1: Rate 3(MWh)",
    "H1: Rate 4(MWh)",
    "H1: Rate 5(MWh)",
    "H1: Rate 6(MWh)",
    "H1: Max Dem 1",
    "H1: Max Dem 1 time",
    "H1: Max Dem 2",
    "H1: Max Dem 2 time",
    "H1: Max Dem 3",
    "H1: Max Dem 3 time",
    "Import MVArh",
    "Export MVArh",
    "H1: Total MVAH",
    "H1: No. of Resets",
    "H1: Last Reset",
    "Power Down Count",
    "Last Power down date & time",
    "Programming Count",
    "Last programming date & time",
    "VT Ratio",
    "CT Ratio",
  ];
  // Virtualizer setup for form table
  const rowVirtualizer = useVirtualizer({
    count: data.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 80, // Row height
    overscan: 5,
  });

  // Handle input changes for form
  const handleInputChange = (index, field, value) => {
    const updatedFormData = [...formData];
    updatedFormData[index] = { ...updatedFormData[index], [field]: value };
    setFormData(updatedFormData);
  };

  // Handle sign-in
  const handleSignIn = async (e) => {
    e.preventDefault();

    if (!email) setErrEmail("Enter your email");
    if (!password) setErrPassword("Enter a password");

    if (email && password) {
      try {
        const response = await axios.post('http://192.168.139.115:8000/user/api/token/', {
          email,
          password
        }, {
          headers: { 'Content-Type': 'application/json' }
        });

        const data = response.data;
        localStorage.setItem('access_token', data.access);
        localStorage.setItem('refresh_token', data.refresh);
        const token = data.access;
        const decodedToken = jwtDecode(token);
        console.log(decodedToken["user_name"])
        dispatch(addId(decodedToken["user_name"]));
        setIsLoggedIn(true); // User logged in, show the table form


      } catch (error) {
        console.error('Error:', error);
        setSuccessMsg(
          `Validation was unsuccessful, the password or email entered are invalid.`
        );
      }
    }
  };

  // Handle form submission
  const handleSubmitForm = async (event) => {
    event.preventDefault();

    const dataToSend = formData.map((item, index) => ({
      item: data[index],
      reading1: item.reading1,
      reading2: item.reading2,
    }));

    try {
      const response = await axios.post('http://192.168.139.115:8000/excel/api/save-data/', dataToSend, {
        headers: { 'Content-Type': 'application/json' },
      });
      console.log('Data submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <div >
      {!isLoggedIn ? (
        <div className="w-full max-w-md lg:max-w-lg h-auto bg-white shadow-lg rounded-lg overflow-hidden m-auto my-20">
          {successMsg ? (
            <div className="w-full h-full flex flex-col justify-center p-6">
              <p className="text-black font-medium text-base mb-6">{successMsg}</p>
              <Link to="/form">
                <button onClick={() => setSuccessMsg(null)} className="w-full h-10 bg-red-900 text-gray-200 rounded-md text-base font-medium tracking-wide hover:bg-black hover:text-white duration-300">
                  TRY AGAIN
                </button>
              </Link>
            </div>
          ) : (
            <form className="w-auto h-auto flex flex-col m-4">
              <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-2xl md:text-3xl mb-4">Sign in</h1>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <p className="font-titleFont text-base font-semibold text-gray-600">Personal Email</p>
                  <input
                    onChange={(e) => { setEmail(e.target.value); setErrEmail(""); }}
                    value={email}
                    className="w-full h-10 px-4 text-base font-medium placeholder:text-sm rounded-md border-[1px] border-gray-400 outline-none"
                    type="email"
                    placeholder="emma@gmail.com"
                  />
                  {errEmail && <p className="text-sm text-red-500">{errEmail}</p>}
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-titleFont text-base font-semibold text-gray-600">Password</p>
                  <input
                    onChange={(e) => { setPassword(e.target.value); setErrPassword(""); }}
                    value={password}
                    className="w-full h-10 px-4 text-base font-medium placeholder:text-sm rounded-md border-[1px] border-gray-400 outline-none"
                    type="password"
                    placeholder="Enter password"
                  />
                  {errPassword && <p className="text-sm text-red-500">{errPassword}</p>}
                </div>
                <button onClick={handleSignIn} className="bg-primeColor hover:bg-black text-gray-200 w-full text-base font-medium h-10 rounded-md duration-300">Sign In</button>
              </div>
            </form> 
          )}
        </div>
      ) : (
        <div>
        <form
      onSubmit={handleSubmitForm}
      className="md relative overflow-auto h-[calc(100vh-4rem)] border border-gray-300 mx-auto w-[90%] max-w-full"
    >
      <div
        ref={parentRef}
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
          width: '100%',
          position: 'relative',
        }}
        className="relative"
      >
        {/* Header Row */}
        <div className="sticky top-0 z-10 bg-gray-100 border-b border-gray-300 flex  md:flex-row">
          <div className="flex-1 min-w-[3%] p-2 md:p-4 font-bold uppercase text-center bg-gray-200 border-r border-gray-300 text-xs md:text-sm">
            NO.
          </div>
          <div className="flex-1 min-w-[35%] p-2 md:p-4 font-bold uppercase text-center bg-gray-200 border-r border-gray-300 text-xs md:text-sm">
            ITEMS
          </div>
          <div className="flex-1 min-w-[25%] p-2 md:p-4 font-bold uppercase text-center bg-gray-200 border-r border-gray-300 text-xs md:text-sm">
            READINGS
          </div>
          <div className="flex-1 min-w-[25%] p-2 md:p-4 font-bold uppercase text-center bg-gray-200 text-xs md:text-sm">
            READINGS
          </div>
        </div>

        {/* Virtual Rows */}
        <div className="relative">
          {rowVirtualizer.getVirtualItems().map((virtualRow) => (
            <div
              key={virtualRow.index}
              ref={virtualRow.measureRef}
              style={{
                transform: `translateY(${virtualRow.start}px)`,
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '80px', // Row height
              }}
              className="border-b border-gray-200 flex  md:flex-row bg-white"
            >
              <div className="flex-1 min-w-[3%] p-2 md:p-4 text-center border-r border-gray-300 font-bold">
                {virtualRow.index + 1}
              </div>
              <div className="flex-1 min-w-[35%] p-2 md:p-4 text-center border-r border-gray-300 font-bold">
                {data[virtualRow.index]}
              </div>
              <input
                type="number"
                className="flex-1 min-w-[25%] p-2 md:p-4 border border-gray-300"
                value={formData[virtualRow.index].reading1}
                onChange={(e) =>
                  handleInputChange(virtualRow.index, 'reading1', e.target.value)
                }
              />
              <input
                type="number"
                className="flex-1 min-w-[25%] p-2 md:p-4 border border-gray-300"
                value={formData[virtualRow.index].reading2}
                onChange={(e) =>
                  handleInputChange(virtualRow.index, 'reading2', e.target.value)
                }
              />
            </div>
          ))}
        </div>
      </div>
        <button
          type="submit"
          className="mt-8 pt-4 w-2/4 h-18 mb-12 mx-auto  bg-blue-500 text-white font-bold rounded hover:bg-blue-700 block"
        >
          Submit
        </button>
    </form>
    

    </div>
    
      )}
    </div>
  );
};

export default CombinedComponent;
