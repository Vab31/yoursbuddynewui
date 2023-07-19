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

    <div className="text-slate-300" id="section3">

<div className="text-left lg:m-32 text-sm ">KNOW MORE ABOUT US
   <div className="border-t border-gray-300 w-96 mb-6"></div>

         <p className='text-left text-5xl font-serif' ><img className='inline-flex bg-sky-500 rounded-full p-3 mr-3  border-sky-300 border-spacing-5' src={arrow} />Simply carry out these steps.</p>
     
        <div className='flex flex-col items-center md:flex-row mt-3 mb-3'>
      <div className='h-96 w-full md:w-1/2  flex items-center justify-center rounded-full'>
        <img src={digiicon} className='max-h-full max-w-full' alt='image of media agency' />
      </div>
      <div className='md:w-1/2' style={{ fontFamily: 'MONTSERRAT, Arial, sans-serif' }}>
        <Accordion
          sx={{
            color: 'white',
            backgroundColor: 'rgb(15 23 42)',
            fontFamily: 'MONTSERRAT, Arial, sans-serif',
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
  <Typography variant="h6">Share your footage</Typography>
</AccordionSummary>
<AccordionDetails className='bg-slate-500 font-sans text-slate-200 rounded-xl'>
  <Typography variant="body1">
  All you have to do is upload your project to Google Drive in mp4 format, or any other commercial file, and we'll have your first draught available in a few days.
</Typography>
  </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            color: 'white',
            backgroundColor: 'rgb(15 23 42)',
            fontFamily: 'MONTSERRAT',
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
    fontFamily: 'MONTSERRAT, Arial, sans-serif',
    fontWeight: 'bold',
  }}
>
  <Typography variant="h6">Review draft</Typography>
</AccordionSummary>
<AccordionDetails className='bg-slate-500 font-sans text-slate-200 rounded-xl'>
  <Typography variant="body1">
  Now that your first draft is complete, all you have to do is let us know what changes you want to make in that project, and we'll get it done.</Typography>
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
  <Typography variant="h6">Seal the deal</Typography>
</AccordionSummary>
<AccordionDetails className='bg-slate-500 font-sans text-slate-200 rounded-xl'>
  <Typography variant="body1">
  Seal The Deal Right now, all you have to do is give us the green light on the video, and we'll finish it up with a few finishing touches so that you can download it through Drive. </Typography>
</AccordionDetails>

        </Accordion>
        </div>
        </div>



      </div>


    </div>



  );



}