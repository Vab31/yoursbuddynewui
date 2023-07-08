import unleash from './unleash.gif'
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import './section2.css'

export default function Section2(){
  const textStyles = {
    fontFamily: 'MONTSERRAT,Arial, sans-serif', // Specify the desired font family
    
    fontWeight: 'bold',
  };
 

    return(
      <div className='text-slate-100 mt-10 sec2'>
      <div className='flex justify-center text-black text-lg'>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: [1, 1.5, 1] }}
          transition={{ ease: 'easeOut', duration: 2 }}
        >
          <h2 className='text-4xl md:text-6xl lg:text-7xl mt-5' style={textStyles}>
            Unlocking Growth in the Chaos
          </h2>
        </motion.div>
      </div>
    
      <div className='flex justify-center mt-10'>
        <motion.div className='mr-5' whileHover={{ scale: 1.2 }}>
          <a href="#section3" className='text-white no-underline'>
            <button className='bg-black p-9 rounded-full text-3xl'>Know More</button>
          </a>
        </motion.div>
    
        <motion.div whileHover={{ scale: 1.2 }}>
          <a href='https://calendly.com/yoursbuddy/video-editing-1' className='text-white no-underline'>
            <button className='bg-blue-600 p-9 rounded-full ml-2 text-3xl'>Talk to us</button>
          </a>
        </motion.div>
      </div>
    </div>
    
    )
}