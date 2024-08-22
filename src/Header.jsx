import React, { useState } from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for the menu button

function Front() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="flex bg-black h-[30px] justify-between items-center px-4">
        {/* Menu Button */}
        <button 
          className="text-white md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Menu */}
        <ul
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex flex-col md:flex-row gap-4 md:gap-10 p-2 md:p-4 text-white absolute md:static bg-black md:bg-transparent w-full md:w-auto left-0 top-[30px] md:top-0`}
        >
          <li>Home</li>
          <li>Course</li>
          <li>About</li>
          <li>Contact</li>
          <li>Become an Instructor</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 px-4 sm:px-12 md:px-24 min-h-[70px] bg-gray-200">
  {/* Left Section: Logo, Dropdown, and Search */}
  <div className="flex flex-col sm:flex-row gap-4 justify-start items-center">
    {/* Brand Name */}
    <div className="text-black font-bold text-lg">E-TUTOR</div>

    {/* Dropdown and Search Bar */}
    <div className="flex flex-col sm:flex-row gap-2 items-center w-full sm:w-auto">
      <select className="bg-slate-300 text-black w-full sm:w-[100px] h-[30px]">
        <option value="" className="justify-center items-center">
          Browse
        </option>
        <option value="">Copy</option>
        <option value="">Last</option>
      </select>
      <div className="flex gap-2 items-center w-full sm:w-auto">
        <FaMagnifyingGlass className="mt-[8px] text-black" />
        <input
          type="search"
          placeholder="What do you want to learn"
          className="w-full sm:w-[250px] h-[30px] bg-slate-300 px-2"
        />
      </div>
    </div>
  </div>

  {/* Right Section: Icons and Buttons */}
  <div className="flex flex-col md:flex-row justify-center md:justify-end items-center gap-4 md:gap-6 px-4 md:px-0">
    <div className="flex gap-4 items-center">
      <FaHeart className="text-black text-[20px]" />
      <FaShoppingCart className="text-black text-[20px]" />
    </div>
    <div className="bg-gray-400 flex h-[40px] w-full md:w-[150px] cursor-pointer justify-center items-center">
      <h1 className="text-orange-500">Create Account</h1>
    </div>
    <div className="bg-orange-500 flex h-[40px] w-full md:w-[100px] justify-center items-center">
      <button type="button" className="text-white">
        Sign in
      </button>
    </div>
  </div>
</div>

    </>
  );
}

export default Front;
