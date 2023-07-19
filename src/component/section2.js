import unleash from './unleash.gif';
import { motion } from "framer-motion";

export default function Section2() {
  return (
    <div
      className='text-slate-100 text-center'
      style={{
        backgroundImage: "url('https://media.istockphoto.com/vectors/metal-black-grid-with-holes-vector-background-vector-id1144633565?k=6&m=1144633565&s=170667a&w=0&h=_RbOoXs3KiQN5S7zqJMTsq3r1y-vEkE37WCep4-0-BI=')",
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat',
      }}
    >
      <div className='flex justify-center'>
        <img src={unleash} alt="Your GIF" />
      </div>

      <p className='text-2xl text-slate-300 font-serif md:ml-32 md:mr-32 items-center'>
      Worked with 20 or more Clients and produced 100 or more projects that received millions of views:
      the process for creating content will be made simpler.
      We'll manage all of your content development; all you have to do is send us footage, sit back and relax.
      </p>
      <div className='flex justify-center mt-10'>
        <motion.div className='mr-5 mb-5' whileHover={{ scale: 1.2 }}>
          <a href="#section3" className='text-white no-underline'>
            <button className=' bg-gray-950 p-9 rounded-full text-3xl'>Know More</button>
          </a>
        </motion.div>
    
        <motion.div whileHover={{ scale: 1.2 }}>
          <a href='https://calendly.com/yoursbuddy/video-editing-1' className='text-white no-underline'>
            <button className='bg-blue-600 p-9 rounded-full ml-2 text-3xl'>Talk to us</button>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
