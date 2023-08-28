import Carousel from 'react-bootstrap/Carousel';

function Review() {
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
  return (
    <div className='flex justify-center items-center min-h-screen'>
    <Carousel data-bs-theme="" className=''>
    {list.map((review,index)=>(
      <Carousel.Item>
      <section className="text-white body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
      </svg>
      <p className="leading-relaxed text-lg">
         {review.testimonial}
      </p>
      <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
      {/* <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
      <p className="text-gray-500">Senior Product Designer</p> */}
    </div>
  </div>
</section>
</Carousel.Item>
))}
</Carousel>
</div>

  );
}

export default Review;