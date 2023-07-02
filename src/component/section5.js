import React from 'react'

export default function Section5() {
  return (
    <footer className="bg-slate-900 text-slate-50 py-4 font-serif">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-1/2">
          <h5 className="text-white font-bold text-lg">YoursBuddy</h5>
          <p className="text-blue-grey text-darken-1 mt-2">
            An original idea. That can’t be too hard. The library must be full
            of them.–Stephen Fry
          </p>
          <p className="text-blue-grey text-darken-1">
            A library is the delivery room for the birth of ideas, –Norman Cousins
          </p>
        </div>
        <div className="w-full md:w-1/2 mt-4 md:mt-0">
          <h5 className="text-white font-bold text-lg">Links</h5>
          <ul className="mt-2 flex flex-col">
            <li className="mb-2">
              <a className="text-blue hover:text-blue-dark transition-colors duration-300 ease-in-out" href="#!">Facebook</a>
            </li>
            <li className="mb-2">
              <a className="text-blue hover:text-blue-dark transition-colors duration-300 ease-in-out" href="#!">Twitter</a>
            </li>
            <li className="mb-2">
              <a className="text-blue hover:text-blue-dark transition-colors duration-300 ease-in-out" href="#!">Pinterest</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="bg-grey-darkest">
      <div className="container mx-auto px-4 py-2 text-center text-sm text-slate-50">
        © 2023- YoursBuddy
      </div>
    </div>
  </footer>
  
  
  
  
  )
}
