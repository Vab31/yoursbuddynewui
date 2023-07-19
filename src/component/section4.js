import React from 'react'
import './sec4.css';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const steps = [
    {
      label: 'Video Editing',
      description: `Video editing in social media is essential for creating attention-grabbing and shareable content that resonates with online audiences.

      With strategic cuts, engaging transitions, and visual effects, video editing for social media helps businesses stand out, capture viewers' attention, and increase engagement.
      
      Expertly edited videos on social media platforms have the power to convey brand stories, communicate messages effectively, and drive meaningful connections with the target audience.`,
    },
    {
      label: 'Content Writer',
      description:
        `Our talented team of content writers understands the unique voice and tone of YoursBuddy, 
        and they skillfully craft content that engages, educates, and inspires action.`,
    },
    {
      label: 'Media Consultancy',
      description: `We are a trusted partner for businesses seeking expert guidance and strategic solutions in the ever-evolving media landscape. 
      Our experienced team combines industry knowledge, market insights, and innovative strategies to help clients navigate the complexities of 
      media planning, advertising, and brand communication. With our tailored approach and data-driven insights, we empower businesses to make 
      informed decisions, maximize their media investments, and achieve their marketing objectives.`,
    },
  ];

export default function Section4() {
    const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className="flex flex-col items-center justify-center overflow-hidden">
  <div className="sec4 h-96 rounded-t-full w-screen rounded-b-full flex items-center overflow-hidden justify-center bg-white">
       <p className="text-white font-bold text-7xl">Introducing Our Services</p>
       </div>
       <div className="max-w-500 p-3">
       <Box sx={{ maxWidth: 400, color: "white" }}>
  <Stepper
    activeStep={activeStep}
    orientation="vertical"
    sx={{
      "& .MuiStepIcon-root": {
        fontSize: "3rem", // Increase the font size of the StepIcon
      },
      "& .MuiStepLabel-label": {
        fontSize: "2.5rem", // Increase the font size of the StepLabel
        color: "white", // Set the default color of the StepLabel
      },
      "& .MuiStepConnector-line": {
        minHeight: 60, // Increase the line height between steps
      },
      "& .MuiStepLabel-label.MuiStepLabel-active": {
        color: "white", // Set the color of the active StepLabel
      },
      "& .MuiStepLabel-label.MuiStepLabel-completed": {
        color: "white", // Set the color of the completed StepLabel
      },
    }}
  >
    {steps.map((step, index) => (
      <Step key={step.label}>
        <StepLabel
          StepLabelProps={{
            style: {
              color: "white",
            },
          }}
        >
          {step.label}
        </StepLabel>
        <StepContent>
          <Typography>{step.description}</Typography>
          <Box sx={{ mb: 2 }}>
            <div>
              <Button variant="contained" onClick={handleNext} sx={{ mt: 1, mr: 1 }}>
                {index === steps.length - 1 ? "Finish" : "Continue"}
              </Button>
              <Button disabled={index === 0} onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                Back
              </Button>
            </div>
          </Box>
        </StepContent>
      </Step>
    ))}
  </Stepper>
</Box>




</div>

</div>



   
  )
}
