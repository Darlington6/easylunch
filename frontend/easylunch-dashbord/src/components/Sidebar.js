import React from "react";
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios'; 
import { FaTachometerAlt, FaClipboardList, FaShoppingCart } from 'react-icons/fa'; // FontAwesome icons
import { MdListAlt, MdRestaurantMenu } from 'react-icons/md'; // Material Design icons

const Sidebar = () => {
  const navigate = useNavigate(); 

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:8000/api/logout/');
      localStorage.removeItem('authToken'); 
      navigate('/login');
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <nav className="bg-[#1f2937] h-screen fixed top-0 left-0 min-w-[260px] py-6 px-4 font-[sans-serif] flex flex-col overflow-auto">
      <a href="javascript:void(0)">
        <img src="/Easylunch.png" alt="logo" className="w-[80px] rounded-full" />
      </a>

      <ul className="space-y-3 flex-1 mt-6">
        <li>
          <a
            href="/dashboard"
            className="text-white hover:text-[#077fbb] text-sm flex items-center hover:bg-gray-200 rounded px-4 py-3 transition-all"
          >
            <FaTachometerAlt className="w-[18px] h-[18px] mr-4" />
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a
            href="/productregistration"
            className="text-white hover:text-[#077fbb] text-sm flex items-center hover:bg-gray-200 rounded px-4 py-3 transition-all"
          >
            <FaClipboardList className="w-[18px] h-[18px] mr-4" />
            <span>Register Product</span>
          </a>
        </li>
        {/* <li>
          <a
            href="/ordering"
            className="text-white hover:text-[#077fbb] text-sm flex items-center hover:bg-gray-200 rounded px-4 py-3 transition-all"
          >
            <FaShoppingCart className="w-[18px] h-[18px] mr-4" />
            <span>Ordering</span>
          </a>
        </li> */}
        <li>
          <a
            href="/incomingorder"
            className="text-white hover:text-[#077fbb] text-sm flex items-center hover:bg-gray-200 rounded px-4 py-3 transition-all"
          >
            <MdListAlt className="w-[18px] h-[18px] mr-4" />
            <span>Ordering List</span>
          </a>
        </li>
        <li>
          <a
            href="/productlist"
            className="text-white hover:text-[#077fbb] text-sm flex items-center hover:bg-gray-200 rounded px-4 py-3 transition-all"
          >
            <MdRestaurantMenu className="w-[18px] h-[18px] mr-4" />
            <span>Menu Management</span>
          </a>
        </li>
      </ul>

      <button
        onClick={handleLogout}
        className="mt-6 text-sm text-red-600 flex items-center hover:bg-gray-200 rounded px-4 py-3 transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="w-[18px] h-[18px] mr-4"
          viewBox="0 0 512 512"
        >
          <path
            d="M256 48C119.03 48 8 159.03 8 288s111.03 240 248 240 248-111.03 248-240S392.97 48 256 48zm0 368c-70.58 0-128-57.42-128-128s57.42-128 128-128 128 57.42 128 128-57.42 128-128 128z"
          />
        </svg>
        <span>Logout</span>
      </button>
    </nav>
  );
};

export default Sidebar;
