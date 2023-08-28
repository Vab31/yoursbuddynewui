import React, { useState } from 'react';

import './sec4.css';
import '../font/style.css'
import { motion } from 'framer-motion';
// import React from 'react';
import useComponentObserver from './useComponent.js';
export default function Section4() {
  const [open, setOpen] = useState(null);
  const [ref, isVisible] = useComponentObserver();

  const handleClickOpen = (index) => {
    setOpen(index);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <div className="flex flex-col items-center justify-center" >
      <div className="sec4 h-96 md:rounded-t-full w-full md:rounded-b-full flex items-center justify-center bg-white">
        <p className="text-white md:text-7xl  sm:text:4xl w-1/2 text-center" style={{ fontFamily: 'Instagram Sans Bold' }} >Simply Carry Out These Steps.</p>
      </div>

      {/* <div className='flex m-7 bg text-slate-300'>
        <motion.div whileHover={{ scale: 1.2 }}>
          <Card className='m-5 p-4 w-96' sx={{ minWidth: 275, background: 'linear-gradient(188deg, rgba(2,0,36,1) 0%, rgba(9,9,121,0.053658963585434205) 38%, rgba(0,212,255,1) 79%)' }}>
            <CardContent style={{ height: '320px' }}>
              <Typography sx={{ fontSize: 34, fontWeight: 'bold', color: 'wheat' }} color="text.secondary" gutterBottom>
                Share your Footage
              </Typography>
              <Typography variant="h5" component="div"></Typography>

              <Typography variant="body2" sx={{ color: 'wheat', fontSize: '18px', lineHeight: '1.6' }}>
                All you have to do is upload your project to Google Drive in mp4 format, or any other commercial file, and we'll have your first draft available in a few days.
                <br />
                {'"visually stunning"'}
              </Typography>
            </CardContent>
            <CardActions className="flex justify-center">
              <motion.div whileHover={{ scale: 1.2 }}>
                <button className='bg-blue-600 p-9 rounded-full ml-2 text-2xl text-white items-center' >
                  Step 1
                </button>
              </motion.div>
            </CardActions>

          </Card>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }}>
          <Card className='m-5 p-4 w-96' sx={{ minWidth: 275, background: 'linear-gradient(188deg, rgba(2,0,36,1) 0%, rgba(9,9,121,0.053658963585434205) 38%, rgba(0,212,255,1) 79%)' }}>
            <CardContent style={{ height: '320px' }}>
              <Typography sx={{ fontSize: 34, fontWeight: 'bold', color: 'wheat' }} color="text.secondary" gutterBottom>
              Review Draft
              </Typography>
              <Typography variant="h5" component="div"></Typography>

              <Typography variant="body2" sx={{ color: 'wheat', fontSize: '18px', lineHeight: '1.6' }}>
              Now that your first draft is complete, all you have to do is let us know what changes you want to make in that project, and we'll get it done. <br />
                {'"visually stunning"'}
              </Typography>
            </CardContent>
            <CardActions className="flex justify-center">
              <motion.div whileHover={{ scale: 1.2 }}>
                <button className='bg-blue-600 p-9 rounded-full ml-2 text-2xl text-white items-center' >
                  Step 2
                </button>
              </motion.div>
            </CardActions>

          </Card>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }}>
          <Card className='m-5 p-4 w-96' sx={{ minWidth: 275, background: 'linear-gradient(188deg, rgba(2,0,36,1) 0%, rgba(9,9,121,0.053658963585434205) 38%, rgba(0,212,255,1) 79%)' }}>
            <CardContent style={{ height: '320px' }}>
              <Typography sx={{ fontSize: 34, fontWeight: 'bold', color: 'wheat' }} color="text.secondary" gutterBottom>
              
      Seal The Deal
              </Typography>
              <Typography variant="h5" component="div"></Typography>

              <Typography variant="body2" sx={{ color: 'wheat', fontSize: '18px', lineHeight: '1.6' }}>
              Right now, all you have to do is give us the green light on the video, and we'll finish it up with a few finishing touches so that you can download it through Drive. <br />
                {'"visually stunning"'}
              </Typography>
            </CardContent>
            <CardActions className="flex justify-center">
              <motion.div whileHover={{ scale: 1.2 }}>
                <button className='bg-blue-600 p-9 rounded-full ml-2 text-2xl text-white items-center' >
                  Step 3
                </button>
              </motion.div>
            </CardActions>

          </Card>
        </motion.div>

        {/* Rest of the cards */}
        {/* Add the other Card components with similar structure */}
        {/* ... */}

      {/* </div>  */}
   <div className=" body-font my-4" >
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center' }}
        
      >
   <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto bg-">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">1</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center  items-start flex-col sm:flex-row">
        {/* <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-12 h-12" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div> */}
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0" ref={ref}>
       
        <div className="border-r border-b border-l border-t rounded text-slate-200  lg:rounded-md lg:rounded-r p-4 flex flex-col justify-between leading-normal" style={{backgroundColor: 'rgb(15 23 42)'}}>
    <div className="mb-8">
      <p className="text-sm flex items-center">
       
       STEP 01
      </p>
      <div className="text-3xl mb-2" style={{ fontFamily: 'Instagram Sans Bold' }}>Share your Footage</div>
      <p className=" text-xl" style={{ fontFamily: 'Instagram Sans Regular' }}>
      All you have to do is upload your project to Google Drive in mp4 format, or any other commercial file, and we'll have your first draught available in a few days.      </p>
    </div>
   
  </div>
  
</div>
      </div>
    </div>
    </motion.div>
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.5 }}
        // style={{ textAlign: 'center' }}
        
      >
    <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto bg-">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">2</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center  items-start flex-col sm:flex-row">
      
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0" ref={ref}>
       
        <div className="border-r border-b border-l border-t rounded text-slate-200  lg:rounded-md lg:rounded-r p-4 flex flex-col justify-between leading-normal" style={{backgroundColor: 'rgb(15 23 42)'}}>
    <div className="mb-8">
      <p className="text-sm flex items-center">
       
       STEP 02
      </p>
      <div className="text-3xl mb-2" style={{ fontFamily: 'Instagram Sans Bold' }}>Review Draft</div>
      <p className=" text-xl" style={{ fontFamily: 'Instagram Sans Regular' }}>
      Now that your first draft is complete, all you have to do is let us know what changes you want to make in that project, and we'll get it done.</p>    </div>
   
  </div>
  
</div>
      </div>
    </div>
    </motion.div>
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.5 }}
        // style={{ textAlign: 'center' }}
        
      >
    <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto bg-">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">3</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center  items-start flex-col sm:flex-row">
        {/* <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-12 h-12" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div> */}
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0" >
       
        <div className="border-r border-b border-l border-t rounded text-slate-200  lg:rounded-md lg:rounded-r p-4 flex flex-col justify-between leading-normal" style={{backgroundColor: 'rgb(15 23 42)'}}>
    <div className="mb-8">
      <p className="text-sm flex items-center">
       
       STEP 03
      </p>
      <div className="text-3xl mb-2" style={{ fontFamily: 'Instagram Sans Bold' }}>Seal The Deal</div>
      <p className=" text-xl" style={{ fontFamily: 'Instagram Sans Regular' }}>
      Right now, all you have to do is give us the green light on the video, and we'll finish it up with a few finishing touches so that you can download it through Drive.      </p>
    </div>
   
  </div>
  
</div>
      </div>
    </div>
    </motion.div>
    
  </div>

</div>
  
    


  )
}
