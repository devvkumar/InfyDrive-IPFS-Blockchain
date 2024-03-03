import React from "react";
import './Content.css'

const Content = () => {
  return (
    <div>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src="/docs/5.3/assets/brand/bootstrap-logo.svg"
              alt="Logo"
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            />
            Bootstrap
          </a>
        </div>
      </nav>

      <div class="container1 text-center">
        <div class="row ">
          <div class="col-sm-1 text-center">Store</div>
          <div class="col-sm-1">Provide</div>
          <div class="col-sm-1">Build</div>
          <div class="col-sm-1">Blog</div>
        </div>
      </div>

      <div className="container1 ">
        <p>InfyDrive is a decentralized storage</p>
        <p>network designed to store humanity's</p>
        <p>most important information</p>
      </div>
    </div>
  );
};

export default Content;
