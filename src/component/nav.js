export default function Nav() {
  return (
    // <nav className="bg-dark dark:bg-gray-500">
    //   <div className="max-w-screen-xl  mx-auto">
    //     <a href="https://flowbite.com/" className="flex items-center">
    //       <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
    //       <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">YoursBuddy</span>
    //     </a>
    //     <button
    //       data-collapse-toggle="navbar-default"
    //       type="button"
    //       className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    //       aria-controls="navbar-default"
    //       aria-expanded="false"
    //     >
    //       <span className="sr-only">Open main menu</span>
    //       <svg
    //         className="w-6 h-6"
    //         aria-hidden="true"
    //         fill="currentColor"
    //         viewBox="0 0 20 20"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path
    //           fillRule="evenodd"
    //           d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
    //           clipRule="evenodd"
    //         ></path>
    //       </svg>
    //     </button>
    //     <div className="hidden w-full md:block md:w-auto " id="navbar-default">
    //       <div className="flex justify-center"> {/* Added justify-center class */}
    //         <ul className="font-medium flex flex-col p-4 md:p-0  mt-4 md:flex-row md:space-x-8 md:mt-0">
    //           <li>
    //             <a
    //               href="#"
    //               className="block no-underline py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
    //               aria-current="page"
    //             >
    //               Home
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               href="#about"
    //               className="block no-underline py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
    //             >
    //               About
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               href="#"
    //               className="block no-underline py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
    //             >
    //               Services
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               href="https://drive.google.com/file/d/1Ha0rWqR-LuIMJl-4wk4s24EiethclouM/view?usp=sharing"
    //               className="block no-underline py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
    //             >
    //               Pricing
    //             </a>
    //           </li>
    //         </ul>
    //         <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0">
    //           <li>
    //             <button className="ml-auto bg-cyan-600 p-2 rounded text-xl text-white">Contact us</button>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
    <nav className="flex flex-wrap items-center justify-between py-4 px-8 bg-gray-950 text-white">
    <div className="flex items-center mr-4">
      <img src="https://flowbite.com/docs/images/logo.svg" alt="YourBuddy Logo" className="h-8" />
      <span className="text-lg font-semibold ml-2">YourBuddy</span>
    </div>
    <div className="block lg:hidden">
      <button className="navbar-burger flex items-center p-3 rounded text-gray-200 hover:text-white">
        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Mobile Menu</title>
          <path
            d="M0 3h20v2H0zm0 5h20v2H0zm0 5h20v2H0z"
          />
        </svg>
      </button>
    </div>
    <ul className="w-full flex-grow lg:flex lg:items-center lg:w-auto lg:ml-auto lg:justify-center">
      <li><a href="/" className="text-slate-200 font-bold no-underline hover:text-slate-300 block py-2 px-4">Home</a></li>
      <li><a href="/" className="text-slate-200 font-bold no-underline hover:text-slate-300 block py-2 px-4">Services</a></li>
      <li><a href="/" className="text-slate-200 font-bold no-underline hover:text-slate-300 block py-2 px-4">Pricing</a></li>
      <li><a href="/" className="text-slate-200 font-bold no-underline hover:text-slate-300 block py-2 px-4">About</a></li>
    </ul>
    <div className="mt-4 lg:mt-0">
      <button className="px-4 py-2 bg-blue-500 text-white rounded-3xl hover:bg-blue-600">Contact Us</button>
    </div>
  </nav>
    );
  };
  

  
  
  
  
  

