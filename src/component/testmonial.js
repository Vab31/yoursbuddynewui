import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import InstagramIcon from '@mui/icons-material/Instagram';


function DarkVariantExample() {
  const list=[
    {
      name:'fortunatenikhil',
      testimonial:' Working with the team has been a highly satisfying experience. Their skill set and understanding of deadlines are commendable. Their ongoing support during the editing process, coupled with their consistent ability to deliver high-quality editing work, make them a strong contender for video editing needs.',
      image:'https://media.licdn.com/dms/image/C5603AQFP4mGl8tTjSQ/profile-displayphoto-shrink_200_200/0/1629890182867?e=1697673600&v=beta&t=Q1Kf6F4w8JG5KaZ7srvbkDoeW6RIz_s-Uy6d4shiYC4',
      profession:'Building Multiple businesses',
      follower:'95k+ followers'
    },
    {
      name:'Tarunmakhija01',
      testimonial:'I\'ve had the pleasure of working with a dedicated team that has truly elevated my projects. Their expertise and punctuality demonstrate a high level of professionalism. Their unwavering support during the editing process and their ability to consistently deliver work that exceeds expectations make them my top recommendation for video editing services.',
      image:'https://media.licdn.com/dms/image/D5603AQG-oo_hGRigHQ/profile-displayphoto-shrink_200_200/0/1677767886365?e=1697673600&v=beta&t=gPdpwxT4dpTLyCW10kVUy4o5zAIeof_RsQpl9v0i0pY',
      profession:'Scaled bigmouth to 2.25 Cr',
      follower:'Trained 16k+ People'
    },
    {
      name:'rishi.nagar95',
      testimonial:'Working alongside Lokesh and Kshitij has been an absolute delight. Their skill set is truly impressive, and they understand the importance of meeting deadlines. What I find truly remarkable is their unwavering support during the editing journey, coupled with their ability to consistently exceed expectations in the quality of their editing work. I wholeheartedly vouch for Lokesh and Kshitij for all video editing needs.'
      ,
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq_NIGXRjt9jpT3qoeiU2Q-lPKfVCVYubDDiI6IgUeFN75hZ1N1WJbXDg2A2YPi7Ls&usqp=CAU',
      profession:'Youngrest entrepreneur backed by iit bombay',
      follower:'building @fitnastic.health',
    },
    {
      name:'Fireflydo',
      testimonial:'It has been an absolute delight collaborating with a team of dedicated professionals who have undeniably taken my projects to new heights. Their mastery and punctuality not only showcase a remarkable level of professionalism but also contribute to the overall excellence of their work. The unwavering assistance they provide throughout the editing process, coupled with their consistent knack for delivering results that go above and beyond, solidify their position as my ultimate choice for video editing services.  '
      ,
      image:'https://yt3.googleusercontent.com/ytc/AOPolaTkMADsFr_Cb-sYOPOY8EspCQQo9DOdNEfRf4zvhw=s176-c-k-c0x00ffffff-no-rj',
      profession:'Vlogger',
      follower:'25k+ followers'
    },
    {
      name:'Bhavnaharchandrai',
      testimonial:'Collaborating with this professional team has been a pleasure from the start. Their skillful approach and adherence to deadlines have been outstanding. Their unwavering support during the editing process and their ability to consistently surpass expectations in their editing work make them a solid choice for video editing services.'
      ,
      image:'https://img.analisa.io/instagram/profpic/274085362_233450478907069_2219435585382559075_n.jpg',
      profession:'Fitness Trainer',
      follower:'90k+ followers'
    },
    {
      name:'ptrajeshh',
      testimonial:'Working with the team has been a highly satisfying experience. Their skill set and understanding of deadlines are commendable. Their ongoing support during the editing process, coupled with their consistent ability to deliver high-quality editing work, make them a strong contender for video editing needs. '
     ,
      image:'https://yt3.googleusercontent.com/oBnqMO7VT-9viY9r6XLaA5f2POJSBxBB-OEJPItPdHOFszX2pB5lUl0TB6XfXpowpWkTXSu-Xg=s176-c-k-c0x00ffffff-no-rj',
      profession:'20+ yrs of experience in Fitness',
      follower:'300k+ followers'
    },
    
    
    
    ]

const [l,setList]=useState(list);
const [store ,setStore]=useState([]);

// useEffect(() => {
//   const interval = setInterval(() => {
//     setStore((prevTestimonials) => {
//       const newTestimonials = [...prevTestimonials];
//       newTestimonials.shift(); // Remove the first element
//       newTestimonials.push(list[ind]); // Add new element at the end
//       return newTestimonials;
//     });

//     setIndex((prevIndex) => (prevIndex + 1) % list.length);
//   }, 1000); // Change testimonial every 5 seconds

//   return () => clearInterval(interval); // Clear interval on unmount
// }, [ind, list]);

useEffect(()=>{
 const interval= setInterval(()=>{

    setStore(()=>{
   const newlist=[...l];
   const st=newlist[0];
 
   newlist.shift();
   newlist.push(st);
   setList(newlist)
  const store= l.slice(0,3);
   return store
    })
  },2500)

  return ()=>clearInterval(interval)
 
},[l])





  return (



    <>
    <h1 className="text-white mb-12 text-center" style={{ fontFamily: 'Instagram Sans Bold' }}>Clients we have worked with</h1>
  
    <section className="text-slate-400 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {store.map((testimonial, index) => (
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4" key={index}>
              <div className="h-full text-center  bg-slate-700 p-4 rounded-md">
                <img alt="testimonial" className="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={testimonial.image} />
                {/* <p className="" style={{ fontFamily: 'Instagram Sans medium' }}>
                  {testimonial.testimonial}
                </p> */}<br/>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-slate-200  " style={{ fontFamily: 'Instagram Sans medium' }}><InstagramIcon  className='m-2 mt-2' style={{ fontSize: 20 }}/>{testimonial.name}</h2>
                <p className="text-slate-400" style={{ fontFamily: 'Instagram Sans medium' }} >{testimonial.follower}</p>
                <p className="text-slate-400 " style={{ fontFamily: 'Instagram Sans medium' }}>{testimonial.profession}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
  
  
  );
}

export default DarkVariantExample;