import React from 'react'
import "./Store.css"
import Navbar from '../Navbar/Navbar1'
import "../Footer/Footer.css"

const Store = () => {
  return (
    <>
    <Navbar/>
    <img src="../../img/store_img.jpg" alt="" />
    <div className="foot sticky-top">
      <div className="foo-left">
        <h1>Big data storage that comes with a small price tag</h1>
      <p className='container_foot'>
      Data powers your most important work. Cost should not be a barrier to storing more of it.

      InfyDrive provides verifiable, resilient, cost-effective cloud storage that traditional providers can’t match.
      </p>
      </div>
      <div className="foo-right">
      <div className="reachout">
       <h2>Highly Scalable</h2>
       <p>Designed for future data growth, InfyDrive provides pebibyte-grade cloud storage that’s built to scale. </p>

       <h2>Always on</h2>
       <p>InfyDrive provides beyond eight-nines of uptime to ensure your backup data is accessible whenever you need it.</p>
      </div>

      <div className="resources">
        <h2>Cost Effective</h2>
        <p>Our verifiable storage solutions cost less than most cloud services and on-premise providers.</p>

        <h2>Safe & Secure</h2>
        <p>InfyDrive combines geo-redundant archival storage with daily verification and native immutability to maximize data protection.</p>
      </div>
      </div>
     </div>

     {/* Solve your data storage challenges with DeStor  */}

     <div>
        <h1>Solve your data storage challenges with DeStor</h1>
        <p>You know the story - more data, more problems. DeStor provides compelling verifiable storage solutions for a variety of use cases.</p>

        <a href=""><img src="../../img/1.jpg" alt="" /></a>
        <a href=""><img src="../../img/2.jpg" alt="" /></a>
        <a href=""><img src="../../img/3.jpg" alt="" /></a>
        <a href=""><img src="../../img/4.jpg" alt="" /></a>
        <a href=""><img src="../../img/5.jpg" alt="" /></a>
        <a href=""><img src="../../img/6.jpg" alt="" /></a>
        <a href=""><img src="../../img/7.jpg" alt="" /></a>
     </div>

     <img src="../../img/review.jpg" alt="" />
     <img src="../../img/sign_up.jpg" alt="" />
     <img src="../../img/provider.jpg" alt="" />
     <img src="../../img/connect.jpg" alt="" />


      
    </>
  )
}

export default Store
