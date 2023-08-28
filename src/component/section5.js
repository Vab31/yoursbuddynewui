import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { motion } from "framer-motion";
import '../font/style.css'

const Footer = () => {
  return (
    <div className='text-slate-300'>
    <div className="flex justify-between items-center">
    
    

    {/* <motion.p
  whileHover={{ scale: 1.2, }}
  
>
    <AddIcon style={{ fontSize: 100 }} className=" md:mr-52 md:mt-7 " />
    </motion.p> */}
    {/* <motion.div
        style={{ scale: 1.5, rotate: 45 }}
        className="md:mr-52 md:mt-7"
      >
        <AddIcon />
      </motion.div> */}
</div>
  <div className='ml-4 text-center' style={{ fontFamily: 'Instagram Sans Bold' }}>
  <p className='text-4xl   text-slate-300 font-bold' style={{ fontFamily: 'Instagram Sans Bold' }}>Yours Buddy</p>
  <p className='mt-2'>Contact Us</p>
  {/* <p>Gurgaon Haryana</p> */}
  <p>singhvaibhav654@gmail.com</p>
  <p  className='flex justify-center items-center'> 
  <motion.p whileHover={{ scale: 1.2, }}> <a href='https://instagram.com/_yours_buddy__?igshid=MjEwN2IyYWYwYw=='> <InstagramIcon  className='m-3' style={{ fontSize: 50 }}/></a></motion.p>
  <motion.p whileHover={{ scale: 1.2, }}> <a href='https://www.linkedin.com/in/yours-buddy-a6b176276'> <LinkedInIcon className='m-3' style={{ fontSize: 50 }}/> </a> </motion.p>
  <motion.p whileHover={{ scale: 1.2, }}> <a href=''> <TwitterIcon className='m-3' style={{ fontSize: 50 }}/></a></motion.p> 
  </p>
  
  </div>
  </div>
  );
};

export default Footer;
