import React from 'react'
import video from './videoediting.gif'

export default function Service() {
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -mx-4 -mb-10 text-center">
      <div className="sm:w-1/2 mb-10 px-4">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src={video}/>
        </div>
        <h2 className='text-4xl   text-slate-300 font-bold mt-6 mb-3' style={{ fontFamily: 'Instagram Sans Bold' }}> Video Editing</h2>
        <p className=" text-slate-300 text-base" style={{ fontFamily: 'Instagram Sans Medium' }}>Video editing is the brushstroke that brings the canvas of moments to life, painting stories in pixels and emotions in frames.</p>
        <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Know More</button>
      </div>
      <div className="sm:w-1/2 mb-10 px-4">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="https://media.tenor.com/Qr46q411NwsAAAAC/work-working.gif"/>
        </div>
        <h2 className='text-4xl   text-slate-300 font-bold mt-6 mb-3' style={{ fontFamily: 'Instagram Sans Bold' }}> Thumbnail Design</h2>
        <p className=" text-slate-300 text-base" style={{ fontFamily: 'Instagram Sans Medium' }}>Thumbnail design is the gateway to your video's world, where creativity meets curiosity in a single frame.</p>
        <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Know More</button>
      </div>
    </div>
  </div>
</section>
  )
}
