import React from "react";
import "./Content.css";

const Content = () => {
  return (
    <>
    <div className="container sticky-top">
      {/* <div className="alert alert-primary alert-dismissible align-items-center " role="alert">
        Deploy smart contract on InfyDrive's virtual machine
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div> */}

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
            <a href="#" className="li_con">
              Store
            </a>
          </li>
          <li className="col-sm-1 list">
            <a href="#" className="li_con">
              Provide
            </a>
          </li>
          <li className="col-sm-1 list">
            <a href="#" className="li_con">
              Build
            </a>
          </li>
          <li className="col-sm-1 list">
            <a href="#" className="li_con">
              Blog
            </a>
          </li>
        </ul>
      </div>

      <div className="container1 p-5 ">
        <p className="parra">InfyDrive is a decentralized storage</p>
        <p className="parra">network designed to store humanity's</p>
        <p className="parra">most important information</p>
      </div>
      <video autoPlay loop muted plays-inline className="background-clip parra_g ">
        <source src="../../img/earth2.mp4" type="video/mp4"/>
      </video>
    </div>
    </>
  );
};

export default Content;
