import React from "react";
import "./Content.css";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";

const Content = () => {
  const navigate = useNavigate();

  const gotoStore = () => {
    navigate('./Store1');
  }
  return (
    <>
    <div className="container sticky-top">

      <nav className="navbar ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="../../img/logo.jpg"
              alt="Logo"
              className="d-inline-block align-text-top logo"
            />
          </a>
        </div>
      </nav>

      <div className="text-center ">
        <ul className="row ">
          <li className="col-sm-1 list  ">
            {/* <a href="../Store/Store1" className="li_con" target="_blank" rel="noopener noreferrer">
              Store
            </a> */}
            <button onClick={() => gotoStore() } type="button" class="btn li_con">Store</button>
          </li>
          <li className="col-sm-1 list">
            {/* <a href="#" className="li_con">
              Demmo
            </a> */}
            <button type="button" class="btn li_con">Demmo</button>
          </li>
          <li className="col-sm-1 list">
            {/* <a href="#" className="li_con">
              Build
            </a> */}
            <button type="button" class="btn li_con">Build</button>
          </li>
          <li className="col-sm-1 list">
            {/* <a href="#" className="li_con">
              Blog
            </a> */}
            <button type="button" class="btn li_con">Blog</button>
          </li>
        </ul>
      </div>

      <div className="container1 p-5 ">
        <p className="parra">InfyDrive is a decentralized storage</p>
        <p className="parra">network designed to store humanity's</p>
        <p className="parra">most important information</p>
      </div>
      <video autoPlay loop muted plays-inline className="background-clip parra_g ">
        <source src="../../img/earth1.mp4" type="video/mp4"/>
      </video>
    </div>

    <Footer/>
    </>
  );
};

export default Content;
