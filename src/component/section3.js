// import * as React from 'react';
// import { Fragment, useState } from "react";
// import arrow from './arrow.svg'
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import digiicon from './digital-marketing.jpg'




// export default function Section3() {
//   const [open, setOpen] = useState(1);

//   const handleOpen = (value) => {
//     setOpen(open === value ? 0 : value);
//   };
//   return (

//     <div className="text-slate-50" id="section3">

//       <div className="text-left lg:m-32 text-sm ">KNOW MORE ABOUT US
//       <div className="border-t border-gray-300 w-96 mb-6"></div>


//         <p className='text-left text-5xl font-serif' ><img className='inline-flex bg-sky-500 rounded-full p-3 mr-3  border-sky-300 border-spacing-5' src={arrow} />Simply carry out these steps.</p>
     
//         <div className="flex flex-col items-center md:flex-row mt-3 mb-3">
//           <div className="h-96 w-full md:w-1/2 bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-center rounded-full">
//             <img src={digiicon} className="max-h-full max-w-full rounded-full " alt="image of media agency" />
//           </div>
//           <div className="md:w-1/2">
//             <Accordion
//               sx={{
//                 color: "white",
//                 backgroundColor: "rgb(15 23 42)",
//                 fontFamily: "sans-serif",
//               }}
//               className="max-w-3xl p-3 m-2"
//             >
//               <AccordionSummary
//                 expandIcon={<ExpandMoreIcon 
//                   sx={{
//                 color: "white",
               
//               }}

//                 />}
//                 aria-controls="panel1a-content"
//                 id="panel1a-header"
                
//               >
//                 <Typography>Comprehensive Social Media Management</Typography>
//               </AccordionSummary>
//               <AccordionDetails className="bg-slate-500 font-sans text-slate-200 rounded-xl">
//                 <Typography>
//                   YoursBuddy Media Agency excels in providing comprehensive social media management services. 
//                   They offer strategic planning, content creation, scheduling, and community management across various social media platforms. 
//                   Their team of experienced professionals understands the nuances of different social media channels and works closely with clients 
//                   to develop tailored strategies that align with their brand goals and target audience. 
//                   They have a track record of delivering engaging and impactful social media campaigns that help businesses build a strong online presence and drive results.
//                 </Typography>
//               </AccordionDetails>
//             </Accordion>

//             <Accordion
//               sx={{
//                 color: "white",
//                 backgroundColor: "rgb(15 23 42)",
//                 fontFamily: "sans-serif",
//               }}
//               className="max-w-3xl p-3 m-2"
//             >
//               <AccordionSummary
//                  expandIcon={<ExpandMoreIcon 
//                   sx={{
//                 color: "white",
               
//               }}

//                 />}
//                 aria-controls="panel2a-content"
//                 id="panel2a-header"
//               >
//                 <Typography>Innovative Content Creation</Typography>
//               </AccordionSummary>
//               <AccordionDetails className="bg-slate-500 font-sans text-slate-200 rounded-xl">
//                 <Typography>
//                 YoursBuddy Media Agency stands out for its innovative and creative approach to content creation.
//                 They have a team of talented designers, copywriters, and videographers who produce visually appealing 
//                 and compelling content that resonates with the target audience. Whether it's creating eye-catching graphics, 
//                 crafting captivating captions, or producing engaging videos, the agency excels in creating content that captures 
//                 attention and encourages audience interaction. They stay updated with the latest trends and techniques in content 
//                 creation to ensure that their clients' social media profiles are dynamic, fresh, and relevant. 
//                 </Typography>
//               </AccordionDetails>
//             </Accordion>

//             <Accordion
//               sx={{
//                 color: "white",
//                 backgroundColor: "rgb(15 23 42)",
//                 fontFamily: "sans-serif",
//               }}
//               className="max-w-3xl p-3 m-2"
//             >
//               <AccordionSummary
//                 expandIcon={<ExpandMoreIcon 
//                   sx={{
//                 color: "white",
               
//               }}

//                 />}
//                 aria-controls="panel3a-content"
//                 id="panel3a-header"
//               >
//                 <Typography>Results-Driven Approach</Typography>
//               </AccordionSummary>
//               <AccordionDetails className="bg-slate-500 font-sans text-slate-200 rounded-xl">
//                 <Typography>
//                 YoursBuddy Media Agency is committed to delivering measurable results for their clients. 
//                 They understand the importance of data-driven decision making and employ advanced analytics 
//                 tools to monitor the performance of social media campaigns. By analyzing key metrics such as 
//                 engagement rates, reach, conversions, and ROI, they provide insightful reports that demonstrate 
//                 the effectiveness of their strategies. This data-driven approach enables them to make informed 
//                 adjustments and optimizations, ensuring that their clients' social media efforts are continuously 
//                 improving and generating tangible outcomes.
//                 </Typography>
//               </AccordionDetails>
//             </Accordion>
//           </div>
//         </div>



//       </div>


//     </div>



//   );



// }

import * as React from 'react';
import { Fragment, useState } from "react";
import arrow from './arrow.svg'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import digiicon from './rocket.gif'
import '../font/style.css'




export default function Section3() {
  const [expandedAccordions, setExpandedAccordions] = useState([]);

  const handleAccordionHover = (index) => {
    setExpandedAccordions((prevExpanded) =>
      prevExpanded.includes(index) ? prevExpanded : [...prevExpanded, index]
    );
  };

  const handleAccordionLeave = (index) => {
    setExpandedAccordions((prevExpanded) =>
      prevExpanded.filter((expandedIndex) => expandedIndex !== index)
    );
  };
  const textStyles = {
    fontFamily: 'MONTSERRAT,Arial, sans-serif', // Specify the desired font family
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
    fontWeight: 'bold',
  };
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (

    <div className="text-slate-300 m" id="section3">

<div className="text-left lg:m-32 text-sm ">KNOW MORE ABOUT US
   <div className="border-t border-gray-300 md:w-96 w-56 mb-6"></div>

         <p className='text-left text-3xl'  ><img className='inline-flex bg-sky-500 rounded-full p-3 mr-3  border-sky-300 border-spacing-5' src={arrow} />With YoursBuddy profetional touch you can see drastic change in your:</p>
        {/* <p className='md:ml-16 text-5xl font-serif font-bold text-blue-300 '  
         >Video Quality, Audience Retention, Wider Reach</p> */}
        <div className='flex flex-col items-center md:flex-row mt-4 mb-4 overflow-hidden'>
        <div className='h-96 w-full md:w-1/2  flex items-center justify-center rounded' style={{
  background: 'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 38%, rgba(0,212,255,1) 79%)',
  transform: 'rotate(-5deg)',
}}>
  <img src="https://media.giphy.com/media/l0HlNaQ6gWfllcjDO/giphy.gif" style={{transform:'rotate(5deg)'}} className='max-h-full max-w-full' alt='image of media agency' />
</div>
      <div className='md:w-1/2 ml-3' style={{ fontFamily: 'MONTSERRAT, Arial, sans-serif' }}>
        <Accordion
          sx={{
            color: 'white',
            backgroundColor: 'rgb(15 23 42)',
            // fontFamily: 'MONTSERRAT, Arial, sans-serif',
            fontFamily:'Instagram Sans Regular,Instagram Sans Regular,Instagram Sans,'
          }}
          className='max-w-4xl p-3 m-2'
          expanded={expandedAccordions.includes(0)}
          onMouseEnter={() => handleAccordionHover(0)}
          onMouseLeave={() => handleAccordionLeave(0)}
        >
        <AccordionSummary
  expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
  aria-controls='panel1a-content'
  id='panel1a-header'
  sx={{
    backgroundColor: 'rgb(15 23 42)',
    color: 'white',
    fontFamily: 'MONTSERRAT, Arial, sans-serif',
    fontWeight: 'bold',
  }}
>
  <Typography variant="h6">Content Quality</Typography>
</AccordionSummary>
<AccordionDetails className='bg-slate-500 font-sans text-slate-200 rounded-xl'>
  <Typography variant="body1">
  With the help of imotion graphics,colour gradigng, professional cuts and sound design we are capable of doing drastic change in your videos</Typography>
  </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            color: 'white',
            backgroundColor: 'rgb(15 23 42)',
            fontFamily: 'Instagram Sans Regular',
          }}
          className='max-w-3xl p-3 m-2'
          expanded={expandedAccordions.includes(1)}
          onMouseEnter={() => handleAccordionHover(1)}
          onMouseLeave={() => handleAccordionLeave(1)}
        >
     <AccordionSummary
  expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
  aria-controls='panel1a-content'
  id='panel1a-header'
  sx={{
    backgroundColor: 'rgb(15 23 42)',
    color: 'white',
    fontFamily: 'Instagram Sans Regular',
    fontWeight: 'bold',
  }}
>
  <Typography variant="h6">Audience Retention</Typography>
</AccordionSummary>
<AccordionDetails className='bg-slate-500 font-sans text-slate-200 rounded-xl'>
  <Typography variant="body1">
  We can help you create captivating videos that hook your viewers in the first 15 seconds, keep them interested with pattern interrupts and value delivery, and end with a strong call to action that encourages them to take the next step.</Typography>
</AccordionDetails>

        </Accordion>
        <Accordion
          sx={{
            color: 'white',
            backgroundColor: 'rgb(15 23 42)',
            fontFamily: 'sans-serif',
          }}
          className='max-w-3xl p-3 m-2'
          expanded={expandedAccordions.includes(2)}
          onMouseEnter={() => handleAccordionHover(2)}
          onMouseLeave={() => handleAccordionLeave(2)}
        >
         <AccordionSummary
  expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
  aria-controls='panel1a-content'
  id='panel1a-header'
  sx={{
    backgroundColor: 'rgb(15 23 42)',
    color: 'white',
    fontFamily: 'MONTSERRAT, Arial, sans-serif',
    fontWeight: 'bold',
  }}
>
  <Typography variant="h6">Wider Reach</Typography>
</AccordionSummary>
<AccordionDetails className='bg-slate-500 font-sans text-slate-200 rounded-xl'>
  <Typography variant="body1">
  We create engaging and relevant content for your website, social media, blog, and more. We also optimize your content for SEO, keywords, and readability. Whether you need content for your brand, product, service, or niche, we can help you connect with your target customers and grow your online presence.
  </Typography>
</AccordionDetails>

        </Accordion>
        </div>
        </div>



     


      {/* second part second step */}

      <div className="text-left lg:m-32 text-sm m-2 mt-5">WHY INCORPORATE US IN YOUR BUSINESS?
   <div className="border-t border-gray-300 md:w-96 w-80 md mb-6 overflow-hidden"></div>

         <p className='text-left text-4xl  font-bold ' style={{ fontFamily: 'Instagram Sans Bold' }}><img className='inline-flex bg-sky-500 rounded-full p-3 mr-3  border-sky-300 border-spacing-5' src="https://uploads-ssl.webflow.com/63999f8df0234ff7719669bd/63a2db4495ab8cecb5afc946_tablet_FILL0_wght400_GRAD0_opsz48%201%20(1).svg" />Experience the power of
         <p className='md:ml-24 -mt-3  text-5xl  font-bold text-blue-300 ' style={{ fontFamily: 'Instagram Sans Bold' }} 
         >Video Editing.</p>
        
         </p>
         <p style={{ fontFamily: 'Instagram Sans Regular' }} className='text-2xl text-slate-400 md:w-1/2 mb-2'>
         Video editing is not just a technical skill, it is also a creative one.
         Video editing can help you transform your raw footage into a polished and captivating content. 
         Video editing can help you cut out the unnecessary parts, add transitions, effects, music, and text, and 
         adjust the pace and rhythm of your video.
         </p>
    
        <div className='flex flex-col items-center md:flex-row mt-3 mb-3'>
        <div className='h-96 w-full md:w-1/2 flex items-center justify-center rounded ' style={{
  background: 'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 38%, rgba(0,212,255,1) 79%)',
  
}}>
  <img src="https://media.giphy.com/media/3o6nV06A6EYtzbx3La/giphy.gif" style={{}} className='max-h-full max-w-full' alt='image of media agency' />
</div>
     
     <div className='flex flex-col items-center md:flex-row mt-3 mb-3'>
  <div className='md:w-1/2 ' >
          <p className='md:m-8 md:ml-14 text-xl md:w-96 text-slate-400' style={{ fontFamily: 'Instagram Sans Regular' }}>
         Video editing can also help you enhance the quality, clarity, 
         and sound of your video. 
         Video editing can make your content more engaging, informative, and entertaining. 
         It can also help you express your vision, personality, and brand. Whether you want to create a video for your website,  
         social media, blog, or any other platform, video editing can help you make it better. 
         </p>
       </div>
  </div>
  </div>

  </div>


     
      <p className='md:ml-16 mt-5 text-5xl text-left font-bold text-blue-300 '  style={{ fontFamily: 'Instagram Sans Bold' }}
         >Colour Grading</p>
      <div className='flex flex-col items-center md:flex-row mt-3 mb-3'>
  <div className='md:w-1/2 ml-3' >
    <p className='md:m-8 md:ml-14 text-xl md:w-96 text-slate-400' style={{ fontFamily: 'Instagram Sans Regular' }}>
    Colour grading can make your video look more professional, cinematic, or artistic. 
    It can also help you convey your message, emotion, or story more effectively. 
    Whether you want to create a warm, cold, dark, or bright atmosphere, colour grading can help you achieve it.
    </p>
  </div>

  <div className='h-96 w-full m-2 md:w-1/2 flex items-center justify-center  rounded' style={{
    background: 'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 38%, rgba(0,212,255,1) 79%)',
  }}>
    <img src="https://media1.giphy.com/media/dzO9ecsj9cOJV63RTv/giphy.gif?cid=ecf05e47ykhhpviccl4e9q53tcx7ud1d8l91c2trnqx9bkmc&ep=v1_gifs_search&rid=giphy.gif&ct=g" style={{}} className='max-h-full max-w-full' alt='image of media agency' />
  </div>
</div>


<p className='md:mr-44 mt-5 text-5xl text-right font-bold text-blue-300 '  style={{ fontFamily: 'Instagram Sans Bold' }}
         >Motion Graphics</p>
        <div className='flex flex-col items-center md:flex-row mt-3 mb-3'>
        <div className='h-96 w-full md:w-1/2 flex items-center rounded justify-center ' style={{
  background: 'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 38%, rgba(0,212,255,1) 79%)',
  
}}>
  <img src="https://media.giphy.com/media/26FeUjF88goLxusOQ/giphy.gif" style={{}} className='max-h-full max-w-full' alt='image of media agency' />
</div>
     
        <div className='md:w-1/2 md:ml-28 ' style={{ fontFamily: 'Instagram Sans Regular' }}>
        <p className='m-3 text-xl text-slate-400 md:w-96' style={{ fontFamily: 'Instagram Sans Regular' }}>
        Motion graphics are animated graphics that can add life and movement to your content. 
        Motion graphics can help you create eye-catching and dynamic content that can attract and retain your 
        audience’s attention. Motion graphics can help you illustrate complex or abstract concepts, data, 
        or stories in a simple and visual way. Motion graphics can also help you add personality, emotion, 
        and style to your content. 
        </p>
       </div>
  </div>


  <p className='md:ml-16 text-5xl text-left mt-5 font-bold text-blue-300 '  style={{ fontFamily: 'Instagram Sans Bold' }}
         >Sound Design</p>
      <div className='flex flex-col items-center md:flex-row mt-3 mb-3'>
  <div className='md:w-1/2 ml-3' >
    <p className='md:m-8 md:ml-14 text-xl font-serif md:w-96 text-slate-400' style={{ fontFamily: 'Instagram Sans Regular' }}>
    Sound designing is not just adding sound effects, music, and dialogue to your video content.
     It is an art and a science that can make your videos more realistic, immersive, and impactful.
    At our video editing agency, we have the expertise and creativity to help you create stunning
     audio for your videos. </p>
  </div>

  <div className='h-96 w-full m-2 md:w-1/2 flex items-center justify-center  rounded' style={{
    background: 'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 38%, rgba(0,212,255,1) 79%)',
  }}>
    <img src="https://cdn.dribbble.com/users/1319239/screenshots/6691511/6.gif" style={{}} className='max-h-full max-w-full' alt='image of media agency' />
  </div>
</div>
  </div>
  </div>



  );



}

