import React from 'react'
import Link from 'next/link'
import Image from 'next/image';


const Header = () => {
  return (
    <div>
 <div className='bg-white text-2xl flex flex-col bold text-blue-900 m-3' style={{marginLeft:'1rem'}}>
       <div className='flex items-center'>
        <div className='bg-cyan-950 text-white'>3</div>
        <div className='bg-red-800 text-white'>B</div>
        <div className='text-bold'>ELBRIT</div>
        </div>
        <div className=''>
          <p className='text-base text-red-800 bold'>ELBRIT LIFE SCIENCES PVT. LTD</p>
        </div>
        

      </div>   
           {/* <img src='' alt='logo' className='w-20 h-3' style={{width:'50px',height:'20px'}}/> */}
        {/* <Link href='/login'>Login</Link> */}
        {/* <Link href='/register'>Register</Link> */}

        <div className='bg-cyan-100  rounded m-1 p-1  ' style={{height:'800px'}}>
          <h1 className='text-4xl lg:text-9xl font-bold text-blue-900 text-center' style={{padding:''}}>Essential Vitamains</h1>
          <div className="flex flex-wrap col-3 md:col-3 sm:col-1 justify-evenly items-center mb-4">
              <div className='mt-3'>
                <h1 className='text-slate-500'>Online Medical Supplies</h1>
                <div className='text-bold text-cyan-900 text-2xl'>
                  <h1>Get Your Vitamains</h1>
                  <h1>& Minerals</h1>
                  {/* <button className=''>Explore</button> */}
                  <button type="button" className="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">Explore</button>


                </div>


              </div>
               <div className='' style={{width:''}}>
                {/* <img src='/images/f2-1.png.png' alt='minerals'  
                 minWidth='210' height='auto' 
               
                className='object-cover'
                style={{maxWidth:'210px'}}
                /> */}
                <img
  src="/images/f2-1.png.png"
  alt="minerals"
  className="object-cover w-48 md:w-64 lg:w-96"
/>

               </div>
               <div className='bold'>
                <div className='m-1 flex'>
                  <div className='m-2'>
                  <img
            src="/images/more_option1.png"
            alt="Clinically Studied"
            className="w-12 h-12"
            style={{ mixBlendMode: 'darken' ,backgroundColor:''}}
            loading="lazy" 
            />
                  </div>
                  <div className='m-1'>
                   <h1 className='text-bold text-cyan-900 text-2xl'>Vitamains</h1>
                   <p className='text-slate-500 w-52'>Increased Vitamains and mineralsmin your diet</p>

                  </div>
                </div>
                <div className='m-1 flex'>
                  <div className='m-2'>
                  <img
            src="/images/more_option2.png"
            alt="Clinically Studied"
            className="w-12 h-12"
            style={{ mixBlendMode: 'darken' ,backgroundColor:''}}
            loading="lazy" 
            />
                  </div>
                  <div>
                   <h1 className='text-bold text-cyan-900 text-2xl'>Weight Loss</h1>
                   <p className='text-slate-500'> Weight Loss</p>

                   <p className='text-slate-500'>Find scientifically proven solutions
                   </p>
                  </div>
                </div>
                {/*  */}
                <div className='flex m-1'>
                  <div className='m-2'>
                  <img
            src="/images/more_option3.png"
            alt="Clinically Studied"
            className="w-12 h-12"
            style={{ mixBlendMode: 'darken' ,backgroundColor:''}}
            loading="lazy" 
            />
                  </div>
                  <div>
                   <h1 className='text-bold text-cyan-900 text-2xl'>Functionl Foods </h1>
                   <p className='text-slate-500'>Functional Foods</p>
                   <p className='text-slate-500'>From protein powers to baby formula</p>
                  </div>

                </div>

               </div>
          </div>
     

        </div>

     {/* Above Div */}
<div className="relative w-full z-30">
  <div className="absolute top-[50px] sm:top-[-50px] left-0 w-full flex justify-center">
    <div
      className="relative bg-cyan-950 rounded-3xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 text-white "
      style={{ width: "75%" }}
    >
      {/* Feature 1 */}
      <div className="relative flex flex-col items-center text-center">
        <div className="absolute -top-10 flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-md z-30">
          <img
            src="/images/clinical_option.png"
            alt="Clinically Studied"
            className="w-12 h-12"
            loading="lazy" 
          />
        </div>
        <div className="mt-16 w-56">
          <h3 className="font-semibold text-lg mb-2">Clinically Studied</h3>
          <p className="text-sm">
            All products that we offer have undergone lab and safety tests.
          </p>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="relative flex flex-col items-center text-center">
        <div className="absolute -top-10 flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-md z-30">
          <img
            src="/images/vegetarian_option.png"
            alt="Vegetarian Friendly"
            className="w-12 h-12"
            loading="lazy" 
          />
        </div>
        <div className="mt-16 w-56">
          <h3 className="font-semibold text-lg mb-2">Vegetarian Friendly</h3>
          <p className="text-sm">
            We have a wide selection of vegetarian products to meet your needs.
          </p>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="relative flex flex-col items-center text-center">
        <div className="absolute -top-10 flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-md z-30">
          <img
            src="/images/mage_in_india_option.png"
            alt="Made in India"
            className="w-12 h-12"
            loading="lazy" 
          />
        </div>
        <div className="mt-16 w-56">
          <h3 className="font-semibold text-lg mb-2">Made In India</h3>
          <p className="text-sm">
            Shop local and explore health products made right here in India.
          </p>
        </div>

      </div>
        {/* Feature 3 */}
        <div className="relative flex flex-col items-center text-center">
        <div className="absolute -top-10 flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-md z-30">
          <img
            src="/images/free_shipping_option.png"
            alt="Made in India"
            className="w-12 h-12"
            loading="lazy" 
          />
        </div>
        <div className="mt-16 w-56 mb-4">
          <h3 className="font-semibold text-lg mb-2">Free Shipping</h3>
          <p className="text-sm">
          We deliver to your door with no 
          shipping costs on your orders 
          </p>
        </div>

      </div>
      {/*  */}
        {/* Feature 3 */}
        <div className="relative flex flex-col items-center text-center">
        <div className="absolute -top-10 flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-md z-30">
          <img
            src="/images/no_risk_option.png"
            alt="Made in India"
            className="w-12 h-12"
            loading="lazy" 
          />
        </div>
        <div className="mt-16 w-56 mb-4">
          <h3 className="font-semibold text-lg mb-2">No Risk</h3>
          <p className="text-sm">
          We ensure that all products are safe 
          and within their use-by date
           </p>
        </div>

      </div>
      
        {/* Feature 3 */}
        <div className="relative flex flex-col items-center text-center">
        <div className="absolute -top-10 flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-md z-30">
          <img
            src="/images/gmo_option.png"
            alt="Made in India"
            className="w-12 h-12"
            loading="lazy" 
          />
        </div>
        <div className="mt-16 w-56 mb-4">
          <h3 className="font-semibold text-lg mb-2">EMO Free</h3>
          <p className="text-sm">
          Natural, no modified products and 
          derivatives for those who need it
           </p>
        </div>

      </div>
      
    </div>
  </div>
</div>

{/* Div2 */}
<div className="relative z-20 mt-[1250px] sm:mt-[400px] md:mt-[550px] lg:mt-[400px] bg-white">
<div className="container mx-auto px-4 py-8" style={{width:'80%'}}>

  <div className="flex flex-wrap gap-4 justify-center">
    {/* card 0 */}
    <div className="flex flex-col w-60 bg-white-100 rounded-lg p-6 shadow-md  md:w-[40%] text-cyan-900 bold">
      <h3 className="font-semibold text-lg mb-1">Ingredients</h3>
    <h1 className="text-4xl  font-bold ">Better Ingredients</h1>
  <p className="text-gray-600 text-sm mb-4">
      Only the best when you choose products offered on our platform - high-quality ingredients for high quality products!
      </p>
  
    </div>

    {/* Card 1 */}

    <div className="flex flex-col bg-cyan-200 rounded-lg p-6 shadow-md w-full md:w-[25%]" style={{backgroundColor:''}}>
      <h3 className="text-gray-800 font-semibold text-lg mb-1">Vitamin C</h3>
      <p className="text-gray-600 text-sm mb-4">Vitamin C as ascorbic acid</p>
      <a href="#" className="text-blue-600 font-bold text-sm">SEE MORE</a>
      <div className="relative mt-4">
        <img src="/images/h2-b1.jpg.png"  alt="Vitamin C" className="w-60 h-40 absolute -bottom-7 right-0 " loading="lazy" 
         style={{ mixBlendMode: 'darken' ,backgroundColor:'transparent'}}
         />
      </div>
    </div>

    {/* Card 2 */}
    <div className="flex flex-col bg-cyan-200 rounded-lg p-6 shadow-md w-full md:w-[25%]" style={{backgroundColor:''}}>
      <h3 className="text-gray-800 font-semibold text-lg mb-1">Vitamin B3</h3>
      <p className="text-gray-600 text-sm mb-4">Niacin for healthy gut and skin</p>
      <a href="#" className="text-blue-600 font-bold text-sm">SEE MORE</a>
      <div className="relative mt-4">
        <img src="/images/bn2-2.jpg.png" alt="Vitamin B3" className="w-60 h-40 absolute -bottom-7 right-0" loading="lazy" 
        //  style={{mixBlendMode:'darken'}}
         style={{ mixBlendMode: 'darken' ,backgroundColor:''}}
          />
      </div>
    </div>

    {/* Card 3 */}
    <div className="flex flex-col bg-cyan-200 rounded-lg p-6 shadow-md w-full md:w-[25%]">
      <h3 className="text-gray-800 font-semibold text-lg mb-1">Magnesium</h3>
      <p className="text-gray-600 text-sm mb-4">Boost energy and support muscle function</p>
      <a href="#" className="text-blue-600 font-bold text-sm">SEE MORE</a>
      <div className="relative mt-4">
        <img src="/images/bn2-3.jpg.png" alt="Magnesium" className="w-60 h-40 absolute -bottom-6 right-0"  loading="lazy" 
            style={{ mixBlendMode: 'darken' ,backgroundColor:'transparent'}}

        />
      </div>
    </div>

    {/* Card 4 */}
    <div className="flex flex-col bg-cyan-200 rounded-lg p-6 shadow-md w-full md:w-[25%]">
      <h3 className="text-gray-800 font-semibold text-lg mb-1">Hyaluronic Acid</h3>
      <p className="text-gray-600 text-sm mb-4">For smooth, supple and soft skin!</p>
      <a href="#" className="text-blue-600 font-bold text-sm">SEE MORE</a>
      <div className="relative mt-4">
        <img src="/images/bn2-4.jpg.png" alt="Hyaluronic Acid" className="w-60 h-40 absolute -bottom-7 right-0" loading="lazy" 
                 style={{ mixBlendMode: 'darken'}}

        />
      </div>
    </div>

    {/* Card 5 */}
    <div className="flex flex-col bg-cyan-200 rounded-lg p-6 shadow-md w-full md:w-[25%]">
      <h3 className="text-gray-800 font-semibold text-lg mb-1">Lactobacillus</h3>
      <p className="text-gray-600 text-sm mb-4">Invigorate your gut microbiome</p>
      <a href="#" className="text-blue-600 font-bold text-sm">SEE MORE</a>
      <div className="relative mt-4">
        <img src="/images/bn2-5.jpg.png" alt="Lactobacillus" className="w-60 h-40 absolute -bottom-6 right-0" loading="lazy" 
                         style={{ mixBlendMode: 'darken'}}

        />
      </div>
    </div>
      {/* Card 6 */}
      {/* <div className="flex flex-col bg-blue-100 rounded-lg p-6 shadow-md w-full md:w-[15%]">
   
      <div className="relative mt-4">
        <img src="/images/lactobacillus.png" alt="Lactobacillus" className="w-20 h-20 absolute -bottom-5 right-0" />
      </div>
    </div> */}
  </div>
</div>

</div>

{/* blog */}
<div className="max-w-screen-xl mx-auto px-4">
  {/* Blog Header */}
  <div className="text-center my-8 text-cyan-950 font-bold ">
    <h4 className="uppercase text-sm tracking-wider">Our Blog</h4>
    <h2 className="text-3xl mt-2">Latest News</h2>
  </div>
  {/* Blog Cards Section */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {/* Card 1 */}
  <div className="relative">
    <img src="/images/blog1-450x580.jpg.png" alt="Blog 1" className="rounded-lg object-cover w-full h-72 m-1"  loading="lazy" />
    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 text-xs rounded">20 APR</div>
    <div className="absolute bottom-4 left-4 text-white">
      <h3 className="text-lg font-semibold leading-tight">
        The Covid-19 Epidemic in 2022 Is Back
      </h3>
    </div>
    <img src="/images/blog2-450x580.jpg.png" alt="Blog 1" className="rounded-lg object-cover w-full h-32 m-1"  loading="lazy" />

  </div>
  {/* Card 2 */}
  <div className="relative">
    <img src="/images/blog1-450x580.jpg.png" alt="Blog 2" className="rounded-lg object-cover w-full h-32 m-1" loading="lazy"  />
    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 text-xs rounded">20 APR</div>
    <div className="absolute bottom-4 left-4 text-white">
      <h3 className="text-lg font-semibold leading-tight">
        The Covid-19 Epidemic in 2023 Is Back
      </h3>
    </div>
    <img src="/images/blog2-450x580.jpg.png" alt="Blog 2" className="rounded-lg object-cover w-full h-72 m-1" loading="lazy"  />

  </div>
  {/* Card 3 */}
  <div className="relative">
    <img src="/images/blog3-450x580.jpg.png" alt="Blog 3" className="rounded-lg object-cover w-full h-72 m-1" loading="lazy" />
    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 text-xs rounded">17 MAR</div>
    <div className="absolute bottom-4 left-4 text-white">
      <h3 className="text-lg font-semibold leading-tight">
        Hac hendrerit mus non semper suspendisse
      </h3>
    </div>
    <img src="/images/blog2-450x580.jpg.png" alt="Blog 3" className="rounded-lg object-cover w-full h-32 m-1" loading="lazy" />


  </div>
  {/* Card 4 */}
  <div className="relative">
    <img src="/images/blog3-450x580.jpg.png" alt="Blog 4" className="rounded-lg object-cover w-full h-32 m-1"  loading="lazy" />
    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 text-xs rounded">20 APR</div>
    <div className="absolute bottom-4 left-4 text-white">
      <h3 className="text-lg font-semibold leading-tight">
        The Covid-19 Epidemic in 2023 Is Back
      </h3>
    </div>
    <img src="/images/blog2-450x580.jpg.png" alt="Blog 3" className="rounded-lg object-cover w-full h-72 m-1"  loading="lazy" />

  </div>
</div>





</div>
  {/* Footer Section */}
  <footer className="mt-12 bg-cyan-950 text-white py-8 w-full" style={{width:'100%'}}>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8  justify-around text-center"style={{margin:'0 3rem 0 3rem'}}>
      {/* Phone */}
        <div className="bg-cyan-800  flex justify-center items-center rounded mb-2">
          <div className="bg-white p-2 rounded-full">
            <svg className="w-6 h-6 text-teal-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10v11a1 1 0 001 1h16a1 1 0 001-1V10M8 3h8a1 1 0 011 1v4H7V4a1 1 0 011-1z" />
            </svg>
          </div>
          <div> 
          <p className="font-bold">Phone Number</p>
          <p className="text-sm">+974 3118 1843</p>
          </div>
          
     
      </div>
      {/* Email */}
        <div className="  bg-cyan-800 flex justify-center items-center rounded mb-2">
          <div className="bg-white p-2 rounded-full">
            <svg className="w-6 h-6 text-teal-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v9a2 2 0 002 2z" />
            </svg>
          </div>
          <div> 

          <p className="font-bold">Email Address</p>
          <p className="text-sm">Elbritqhr@gmail.com</p>
          </div>
      
      </div>
      {/* Location */}
        <div className="  bg-cyan-800 flex justify-center items-center rounded mb-2">
          <div className="bg-white p-2 rounded-full m-4">
            <svg className="w-6 h-6 text-teal-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657A8 8 0 118 3a8 8 0 019.657 13.657z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>

        <p className="font-bold ">Office Location</p>
        <p className="text-sm ">Ambassador Street, Zone 61</p>
          </div>
        </div>
    </div>
    <div className="text-white py-4">
    <div className="flex flex-col md:flex-row items-center justify-between max-w-screen-lg mx-auto px-1">
      <div className='bg-white text-6xl flex flex-col bold text-blue-900 m-3 p-2'>
      <div className='flex items-center'>

        <div className='bg-cyan-950 text-white'>3</div>
        <div className='bg-red-800 text-white'>B</div>
        <div className=''>ELBRIT</div>
        </div>
        <div className=''>
          <p className='text-base text-red-800 bold'>ELBRIT LIFE SCIENCES PVT. LTD.</p>
        </div>
        

      </div>
      <div className='w-full text-sm'>
      Your health, physical and emotional well-being is important 
to us. We are always by your side and have made it even 
easier for you to find the necessary vitamins
      </div>
     
    </div>
    <p className="text-xs text-center m-1 ">
        Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051
      </p>
  </div>
  </footer>
 



    
  

    <div>


    </div>



      
    </div>
  )
}

export default Header
