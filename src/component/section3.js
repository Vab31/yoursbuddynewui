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

    <div className="text-black" id="section3">

      <div className="text-left lg:m-32 text-sm">KNOW MORE ABOUT US


        <p className='text-left text-7xl' style={textStyles}><img className='inline-flex bg-sky-500 rounded-full p-3 border-sky-300 border-spacing-5 shadow-lg' src={arrow} />YoursBuddy at your Service</p>
        
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
  <Typography variant="h6">Comprehensive Social Media Management</Typography>
</AccordionSummary>
<AccordionDetails className='bg-slate-500 font-sans text-slate-200 rounded-xl'>
  <Typography variant="body1">
    YoursBuddy Media Agency excels in providing comprehensive social media management services. They offer strategic planning, content creation, scheduling, and community management across various social media platforms. Their team of experienced professionals understands the nuances of different social media channels and works closely with clients to develop tailored strategies that align with their brand goals and target audience. They have a track record of delivering engaging and impactful social media campaigns that help businesses build a strong online presence and drive results.
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
  <Typography variant="h6">Visual Symphony: Masterful Video Editing</Typography>
</AccordionSummary>
<AccordionDetails className='bg-slate-500 font-sans text-slate-200 rounded-xl'>
  <Typography variant="body1">
  We are a creative team dedicated to crafting captivating media solutions tailored to your needs. With expertise in video production, graphic design, and digital marketing, we help businesses effectively communicate their message. From concept to execution, we handle every aspect of your project with meticulous attention. Our visually stunning content and client-centric approach ensure we exceed expectations. With a diverse portfolio spanning various industries, we showcase our transformative work. Trust, transparency, and exceptional service define our long-lasting relationships. Let us help your brand stand out in the digital landscape. Contact us to embark on this creative journey today! </Typography>
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
  <Typography variant="h6">Content Alchemy: Transforming Words into Brand Magic</Typography>
</AccordionSummary>
<AccordionDetails className='bg-slate-500 font-sans text-slate-200 rounded-xl'>
  <Typography variant="body1">
  Unleash the Power of Words with Our Content Writing Services! Our skilled team of writers crafts compelling and tailored content that resonates with your brand. From engaging website copy to captivating blog posts and social media content, we create persuasive materials that drive traffic and boost conversions. With a focus on SEO optimization, we ensure maximum visibility for your brand. Explore our portfolio and let our words bring your brand to life. Contact us today to discuss how our content writing services can elevate your online presence and captivate your audience with exceptional written content. </Typography>
</AccordionDetails>

        </Accordion>
        </div>
        </div>



      </div>


    </div>



  );



}