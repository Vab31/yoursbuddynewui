import React from 'react'
import './sec4.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { motion, useAnimation } from 'framer-motion';
import CardMedia from '@mui/material/CardMedia';
import { useState } from 'react';





export default function Section4() {
  
  const [open, setOpen] = useState(null);

  const handleClickOpen = (index) => {
    setOpen(index);
  };

  const handleClose = () => {
    setOpen(null);
  };
  return (
    <div className="flex flex-col items-center justify-center">
  <div className="sec4 h-96 rounded-t-full w-screen rounded-b-full flex items-center justify-center bg-white">
       <p className="text-white font-bold text-7xl">Introducing Our Services</p>
       </div>

  <div className='flex m-7'>
   <motion.div whileHover={{ scale: 1.2 }}>
    <Card className='m-5 p-4' sx={{ minWidth: 275 }}>
      <CardContent>
      <Typography sx={{ fontSize: 34 ,fontWeight:'bold' }} color="text.secondary" gutterBottom>
      Video Editing
    </Typography>
    <Typography variant="h5" component="div"></Typography>
    <Typography sx={{ mb: 1.5 }} color="text.secondary">
      adjective
    </Typography>
    <Typography variant="body2">
    dynamic transitions and effects
      <br />
      {'"visually stunning"'}
    </Typography>
      </CardContent>
      <CardActions className="flex justify-center">
        <motion.div whileHover={{ scale: 1.2 }}>
          <button className='bg-blue-600 p-9 rounded-full ml-2 text-2xl text-white items-center' onClick={() => handleClickOpen(0)}>
            Learn More
          </button>
        </motion.div>
      </CardActions>
      <Dialog
        open={open === 0}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        
        <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        sx={{ height: 240 }}
        image="https://www.subhe.com/blog/wp-content/uploads/2021/07/video-editing-phases.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom  component="div">
        Video editing is a powerful tool that enables storytellers to transform raw footage into captivating visual narratives. Whether you're a beginner exploring the world of editing or a seasoned professional looking to enhance your skills, our media agency is here to provide you with the latest insights and techniques. In an ever-evolving digital landscape, staying up-to-date with industry trends is crucial. Our team of experts constantly researches and analyzes the emerging technologies, software, and editing styles to ensure that you have access to the most relevant and cutting-edge information. Through our informative articles and tutorials, we aim to demystify the art of video editing and empower you with the knowledge and skills to bring your creative vision to life. Join us as we dive deep into the world of editing, exploring topics such as advanced editing techniques, software comparisons, workflow optimization, and much more. Let's unlock the true potential of video editing together!
        </Typography>
        <Typography variant="body2" color="text.secondary">
         
        </Typography>
      </CardContent>

    </Card>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      
      </Dialog>
    </Card>
  </motion.div>
  <motion.div whileHover={{ scale: 1.2 }}>
    <Card className='m-5 p-4' sx={{ minWidth: 275 }}>
      <CardContent>
      <Typography sx={{ fontSize: 34 ,fontWeight:'bold' }} color="text.secondary" gutterBottom>
      Searh Engine Optimization
    </Typography>
    <Typography variant="h5" component="div"></Typography>
    <Typography sx={{ mb: 1.5 }} color="text.secondary">
      adjective
    </Typography>
    <Typography variant="body2">
    Get relevant information tailored
      <br />
      {'"targeted SEO content"'}
    </Typography>
      </CardContent>
      <CardActions className="flex justify-center">
        <motion.div whileHover={{ scale: 1.2 }}>
          <button className='bg-blue-600 p-9 rounded-full ml-2 text-2xl text-white items-center' onClick={() => handleClickOpen(1)}>
            Learn More
          </button>
        </motion.div>
      </CardActions>
      <Dialog
        open={open === 1}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
       
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://www.digitalspotacademy.com/wp-content/uploads/2020/09/1_xpORpdBp3VkxBKvRMIRVhg.png"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Learn
        </Typography>
        <Typography variant="body2" color="text.secondary">
         
        </Typography>
      </CardContent>

    </Card>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      
      </Dialog>
    </Card>
  </motion.div>
  <motion.div whileHover={{ scale: 1.2 }}>
    <Card className='m-5 p-4' sx={{ minWidth: 275 }}>
      <CardContent>
      <Typography sx={{ fontSize: 34 ,fontWeight:'bold' }} color="text.secondary" gutterBottom>
      Content Writing
    </Typography>
    <Typography variant="h5" component="div"></Typography>
    <Typography sx={{ mb: 1.5 }} color="text.secondary">
      adjective
    </Typography>
    <Typography variant="body2">
      well meaning and kindly.
      <br />
      {'"a benevolent smile"'}
    </Typography>
      </CardContent>
      <CardActions className="flex justify-center">
        <motion.div whileHover={{ scale: 1.2 }}>
          <button className='bg-blue-600 p-9 rounded-full ml-2 text-2xl text-white items-center' onClick={() => handleClickOpen(2)}>
          Learn More
          </button>
        </motion.div>
      </CardActions>
      <Dialog
        open={open === 2}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        
        <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        sx={{ height: 140 }}
       image="https://www.simplilearn.com/ice9/free_resources_article_thumb/How_To_Become_A_Content_Writer.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Learn
        </Typography>
        <Typography variant="body2" color="text.secondary">
         
        </Typography>
      </CardContent>

    </Card>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      
    </Card>
  </motion.div>
</div>


</div>



   
  )
}
