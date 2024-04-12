import React from 'react'
import "./Store.css"
import Navbar1 from '../Navbar/Navbar1'
import "../Footer/Footer.css"
import Footer from '../Footer/Footer'

const Store1 = () => {
  return (
    <>
    <Navbar1/>
    <img src="../../img/store_img-2.jpg" alt="" className='store_img' />
    <div className="foot bg-light con1">
      <div className="foo-left">
        <h1 className=' text-dark'>Big data storage that comes <br /> with a small price tag</h1>
      <p className=' text-dark mt-4 store_par'>
      Data powers your most important work. Cost should not be a barrier to <br /> storing more of it.
      <br />
      InfyDrive provides verifiable, resilient, cost-effective cloud storage that <br /> traditional providers can’t match.
      </p>
      </div>

      <div className="foo-right">
      <div className="reachout">
       <h3 className='store_head text-dark'>Highly Scalable</h3>
       <p className='text-dark mt-4 store_par'>Designed for future data growth, <br /> InfyDrive provides pebibyte-grade <br />cloud storage that’s built to scale. </p>

       <h2 className='store_head text-dark mt-4'>Always on</h2>
       <p className='text-dark mt-4 store_par'>InfyDrive provides beyond eight- <br /> nines of uptime to ensure your <br /> backup data is accessible <br /> whenever you need it.</p>
      </div>

      <div className="right2">
        <h2 className='store_head text-dark'>Cost Effective</h2>
        <p className='text-dark mt-4 store_par'>Our verifiable storage solutions <br /> cost less than most cloud services <br /> and on-premise providers.</p>

        <h2 className='store_head text-dark mt-4'>Safe & Secure</h2>
        <p className='text-dark mt-4 store_par'>InfyDrive combines geo-redundant <br /> archival storage with daily <br /> verification and native immutability <br /> to maximize data protection.</p>
      </div>
      </div>
     </div>

     {/* Solve your data storage challenges with DeStor  */}

     <div className='bg-light '>
     <div className='store_cont bg-light '>
        <h1>Solve your data storage challenges <br /> with DeStor</h1>
        <p className='mt-4 mb-4 store_par'>You know the story - more data, more problems. DeStor provides compelling verifiable <br /> storage solutions for a variety of use cases.</p>

        <a href="#" className=' m-2 mb-2'><img src="../../img/1.jpg" alt="" className='storage' /></a>
        <a href="#" className=' m-2 mb-2'><img src="../../img/2.jpg" alt="" className='storage'/></a>
        <a href="#" className=' m-2 mb-2'><img src="../../img/3.jpg" alt="" className='storage'/></a>
        <a href="#" className=' m-2 mb-2'><img src="../../img/4.jpg" alt="" className='storage'/></a>
        <a href="#" className=' m-2 mb-2'><img src="../../img/5.jpg" alt="" className='storage'/></a>
        <a href="#" className=' m-2 mb-2'><img src="../../img/6.jpg" alt="" className='storage'/></a>
        <a href="#" className=' m-2 mb-2'><img src="../../img/7.jpg" alt="" className='storage'/></a>
     </div>
     </div>

     <div className='last_img '>
     <img src="../../img/review.jpg" alt="" className='mt-5 mb-5 img-1' />
     </div>

     <div className='last_img '>
     <img src="../../img/sign_up.jpg" alt="" className='img-1' />
     <button type="button" class="btn btn-light btn_sub">SUBSCRIBER</button>
     </div>

     <div className='last_img'>
     <img src="../../img/provider.jpg" alt="" className=' img-1' />
     <button type="button" class="btn btn-primary btn_find">FIND A PROVIDER</button>
     </div>

     <div className='last_img'>
     <img src="../../img/connect.jpg" alt="" className=' img-1' />
     <button type="button" class="btn btn-light btn_get">GET STARTED</button>
     </div>
      
      <Footer/>
    </>
  )
}

export default Store1
