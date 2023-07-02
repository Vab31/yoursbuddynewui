import * as React from 'react';
import { Fragment, useState } from "react";
import arrow from './arrow.svg'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import digiicon from './digital-marketing.jpg'




export default function Section3() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (

    <div className="text-slate-50" id="section3">

      <div className="text-left lg:m-32 text-sm">KNOW MORE ABOUT US


        <p className='text-left text-7xl' ><img className='inline-flex bg-sky-500 rounded-full p-3 border-sky-300 border-spacing-5' src={arrow} />YoursBuddy at your Service</p>
        <p className='text-cyan-300 text-7xl ml-4'>BUSINESS</p>
        <div className="flex flex-col items-center md:flex-row mt-3 mb-3">
          <div className="h-96 w-full md:w-1/2 bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-center rounded-full">
            <img src={digiicon} className="max-h-full max-w-full rounded-full " alt="image of media agency" />
          </div>
          <div className="md:w-1/2">
            <Accordion
              sx={{
                color: "white",
                backgroundColor: "rgb(15 23 42)",
                fontFamily: "sans-serif",
              }}
              className="max-w-3xl p-3 m-2"
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon 
                  sx={{
                color: "white",
               
              }}

                />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                
              >
                <Typography>Comprehensive Social Media Management</Typography>
              </AccordionSummary>
              <AccordionDetails className="bg-slate-500 font-sans text-slate-200 rounded-xl">
                <Typography>
                  YoursBuddy Media Agency excels in providing comprehensive social media management services. 
                  They offer strategic planning, content creation, scheduling, and community management across various social media platforms. 
                  Their team of experienced professionals understands the nuances of different social media channels and works closely with clients 
                  to develop tailored strategies that align with their brand goals and target audience. 
                  They have a track record of delivering engaging and impactful social media campaigns that help businesses build a strong online presence and drive results.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              sx={{
                color: "white",
                backgroundColor: "rgb(15 23 42)",
                fontFamily: "sans-serif",
              }}
              className="max-w-3xl p-3 m-2"
            >
              <AccordionSummary
                 expandIcon={<ExpandMoreIcon 
                  sx={{
                color: "white",
               
              }}

                />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Innovative Content Creation</Typography>
              </AccordionSummary>
              <AccordionDetails className="bg-slate-500 font-sans text-slate-200 rounded-xl">
                <Typography>
                YoursBuddy Media Agency stands out for its innovative and creative approach to content creation.
                They have a team of talented designers, copywriters, and videographers who produce visually appealing 
                and compelling content that resonates with the target audience. Whether it's creating eye-catching graphics, 
                crafting captivating captions, or producing engaging videos, the agency excels in creating content that captures 
                attention and encourages audience interaction. They stay updated with the latest trends and techniques in content 
                creation to ensure that their clients' social media profiles are dynamic, fresh, and relevant. 
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              sx={{
                color: "white",
                backgroundColor: "rgb(15 23 42)",
                fontFamily: "sans-serif",
              }}
              className="max-w-3xl p-3 m-2"
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon 
                  sx={{
                color: "white",
               
              }}

                />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography>Results-Driven Approach</Typography>
              </AccordionSummary>
              <AccordionDetails className="bg-slate-500 font-sans text-slate-200 rounded-xl">
                <Typography>
                YoursBuddy Media Agency is committed to delivering measurable results for their clients. 
                They understand the importance of data-driven decision making and employ advanced analytics 
                tools to monitor the performance of social media campaigns. By analyzing key metrics such as 
                engagement rates, reach, conversions, and ROI, they provide insightful reports that demonstrate 
                the effectiveness of their strategies. This data-driven approach enables them to make informed 
                adjustments and optimizations, ensuring that their clients' social media efforts are continuously 
                improving and generating tangible outcomes.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>



      </div>


    </div>



  );



}