export default function Nav() {
  return (
    
  //   <nav className="flex flex-wrap items-center justify-between py-4 px-8 bg-black text-white">
  //   <div className="flex items-center mr-4">
  //     <img src="https://flowbite.com/docs/images/logo.svg" alt="YourBuddy Logo" className="h-8" />
  //     <span className="text-lg font-semibold ml-2">YourBuddy</span>
  //   </div>
  //   <div className="block lg:hidden">
  //     <button className="navbar-burger flex items-center p-3 rounded text-gray-200 hover:text-white">
  //       <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  //         <title>Mobile Menu</title>
  //         <path
  //           d="M0 3h20v2H0zm0 5h20v2H0zm0 5h20v2H0z"
  //         />
  //       </svg>
  //     </button>
  //   </div>
  //   <ul className="w-full flex-grow lg:flex lg:items-center lg:w-auto lg:ml-auto lg:justify-center">
  //     <li><a href="/" className="text-slate-200 font-bold no-underline hover:text-slate-300 block py-2 px-4">Home</a></li>
  //     <li><a href="/" className="text-slate-200 font-bold no-underline hover:text-slate-300 block py-2 px-4">Services</a></li>
  //     <li><a href="/" className="text-slate-200 font-bold no-underline hover:text-slate-300 block py-2 px-4">Pricing</a></li>
  //     <li><a href="/" className="text-slate-200 font-bold no-underline hover:text-slate-300 block py-2 px-4">About</a></li>
  //   </ul>
  //   <div className="mt-4 lg:mt-0">
  //     <button className="px-4 py-2 bg-blue-500 text-white rounded-3xl hover:bg-blue-600">Contact Us</button>
  //   </div>
  // </nav>
  <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center no-underline text-white  md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span class="ml-3 text-xl">YoursBuddy</span>
    </a>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
    <a href="/" className="text-slate-200 font-bold no-underline hover:text-slate-300 block py-2 px-4">Home</a>      
    <a href="/service" className="text-slate-200 font-bold no-underline hover:text-slate-300 block py-2 px-4">Services</a>      
    <a href="/review" className="text-slate-200 font-bold no-underline hover:text-slate-300 block py-2 px-4">Testimonial</a>      
    <a href="/aboutus" className="text-slate-200 font-bold no-underline hover:text-slate-300 block py-2 px-4">About</a>      
    </nav>
    <div className="mt-4 lg:mt-0">
    <a href="https://calendly.com/yoursbuddy/video-editing-1"> <button className="px-4 py-2 bg-blue-500 text-white rounded-3xl hover:bg-blue-600">Contact Us</button></a>
   </div>
  </div>
</header>
    );
  };
  

  
  
  
  
  

