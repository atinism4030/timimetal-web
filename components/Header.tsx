"use client";
import React from "react";
import Image from "next/image";
import LogoImg from "@/public/Logo timimetal.png";
import Link from "next/link";

// const Header = () => {
//   return (
//     <div>
//       <nav className="  dark:bg-gray-900 sticky top-0 start-0 border-b border-gray-200 dark:border-gray-600">
//         <div className="justify-between max-w-screen flex flex-wrap items-center mx-auto p-4">
//           <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
//             <button
//               type="button"
//               className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//             >
//               Get started
//             </button>
//             <button
//               data-collapse-toggle="navbar-sticky"
//               type="button"
//               className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//               aria-controls="navbar-sticky"
//               aria-expanded="false"
//             >
//               <span className="sr-only">Open main menu</span>
//               <svg
//                 className="w-5 h-5"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 17 14"
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M1 1h15M1 7h15M1 13h15"
//                 />
//               </svg>
//             </button>
//           </div>
//           <div
//             className="h-10 mt-2 gap-100 items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
//             id="navbar-sticky"
//           >
//             <Image alt="sda" src={LogoImg} className="w-80 h-80"/>
//             <ul className="flex justify-center items-center flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//               <li>
//                 <a
//                   href="#"
//                   className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
//                   aria-current="page"
//                 >
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                   Services
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                   Projects
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                   Blog
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

const Header = () => {
  return (
    <nav className="fixed w-full h-18 shadow-xl bg-black/10 backdrop-blur-xs  z-50">
      <div
        className="flex justify-between items-center px-20 h-full w-full 
       "
      >
        <Link href="/">
          <Image
            src={LogoImg}
            alt="Logo"
            width="350"
            height="200"
            className="cursor-pointer"
          />
        </Link>
        <div>
          <ul className="flex justify-center items-center space-x-3  text-black font-semibold text-">
            <li>
              <Link href="/" className="py-7 px-4 hover:bg-blue-500 hover:text-white  transition duration-200 ease-in-out">Home</Link>
            </li>
            <li>
              <Link href="#services" className="py-7 px-4 hover:bg-blue-500 hover:text-white  transition duration-200 ease-in-out">Services</Link>
            </li>
            <li>
              <Link href="/about-us" className="py-7 px-4 hover:bg-blue-500 hover:text-white  transition duration-200 ease-in-out">About Us</Link>
            </li>
            <li>
              <Link href="/projects" className="py-7 px-4 hover:bg-blue-500 hover:text-white  transition duration-200 ease-in-out">Projects</Link>
            </li>
            <li>
              <Link href="/blog" className="py-7 px-4 hover:bg-blue-500 hover:text-white  transition duration-200 ease-in-out">Blog</Link>
            </li>
            <li>
              <Link href="#contact" className="py-7 px-4 hover:bg-blue-500 hover:text-white  shadow- transition duration-200 ease-in-out">Contacts</Link>
            </li>
          </ul>
        </div>

        <div>
          <button className="bg-white/90 hover:bg-white text-gray-900 font-semibold px-6 py-3 rounded-full transition">Get Quote</button>
        </div>
      </div>
    </nav>
  );
};
export default Header;
