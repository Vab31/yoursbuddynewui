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





export default function Section4() {
  
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="flex flex-col items-center justify-center">
  <div className="sec4 h-96 rounded-t-full w-screen rounded-b-full flex items-center justify-center bg-white">
       <p className="text-white font-bold text-7xl">Introducing Our Services</p>
       </div>
       <div className='flex m-7'>
   
<motion.div whileHover={{ scale: 1.2 }} >
<Card className='m-5 p-4'sx={{ minWidth: 275 }}>
<CardContent>
    <Typography sx={{ fontSize: 34 ,fontWeight:'bold' }} color="text.secondary" gutterBottom>
      Video Editing
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
      <button className='bg-blue-600 p-9 rounded-full ml-2 text-2xl text-white items-center' onClick={handleClickOpen}>
        Talk to us
      </button>
    </motion.div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://www.subhe.com/blog/wp-content/uploads/2021/07/video-editing-phases.jpg"
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
      </CardActions>
    </Card>

    </motion.div>
<motion.div whileHover={{ scale: 1.2 }} >
<Card className='m-5 p-4' sx={{ minWidth: 275 }}>
<CardContent>
    <Typography sx={{ fontSize: 34 ,fontWeight:'bold' }} color="text.secondary" gutterBottom>
      Search Engine Optimization
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
      <button className='bg-blue-600 p-9 rounded-full ml-2 text-2xl text-white items-center' onClick={handleClickOpen}>
        Talk to us
      </button>
    </motion.div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      </CardActions>
    </Card>

    </motion.div>
<motion.div whileHover={{ scale: 1.2 }} >
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
      <button className='bg-blue-600 p-9 rounded-full ml-2 text-2xl text-white items-center' onClick={handleClickOpen}>
        Talk to us
      </button>
    </motion.div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      </CardActions>
    </Card>

    </motion.div>
  
      
  
    </div>

</div>



   
  )
}
