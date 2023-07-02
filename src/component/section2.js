import unleash from './unleash.gif'

export default function Section2(){
    return(
     <div className='text-slate-100'>
    <div className='flex justify-center'>
    <img src={unleash}  alt="Your GIF"  />
     </div>

    <p className=' text-5xl'>
    Unlock the Power of Social Media with YoursBuddy Media Agency: 
    Elevate your brand's online presence, captivate your audience, and drive measurable results through 
    our innovative social media strategies and captivating content creation.
    </p>
    <a href="#section3" className='text-white no-underline'> <button className='bg-black p-9 rounded-full text-3xl'>Know More</button></a>
    <a href='https://calendly.com/yoursbuddy/video-editing-1' className='text-white no-underline'><button className='bg-blue-600 p-9 rounded-full l m-5 text-3xl'>Talk to us</button>
   </a>
       </div>
    )
}