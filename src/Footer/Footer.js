import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
    <footer className="foot sticky-top">
      <div className="foo-left">
      <p className='container_foot'>
        InfoDrive is an open-source <br /> cloud storage marketplace, <br /> protocol, and incentive layer.
      </p>
      </div>
      <div className="foo-right">
      <div className="reachout">
       
        <ul>
          <li className='mb-4 fw-bold'> Reach out</li>
          <li>
            <a href="#" className="li_foot">Twitter</a>
           </li>
           <li>
            <a href="#" className="li_foot">WhatsApp</a>
           </li>
           <li>
            <a href="#" className="li_foot">Telegram</a>
           </li>
           <li>
            <a href="#" className="li_foot">Slack</a>
           </li>
        </ul>
      </div>

      <div className="resources">
        
        <ul>
          <li className='mb-4 fw-bold'>Resources</li>
          {/* <h5>Reachout</h5> */}
          <li>
              <a href="#" className="li_foot">Blog</a>
            </li>
            <li>
              <a href="#" className="li_foot">Docs</a>
            </li>
            <li>
              <a href="#" className="li_foot">GitHub</a>
            </li>
            <li>
              <a href="#" className="li_foot">Security</a>
            </li>
        </ul>
      </div>
      <div className="contact">
      <div>
          {/* <form action="">
                    <label htmlFor="">Your email</label>
                    <input type="email" placeholder='Your email' required/>
                </form> */}
          <div class="input-group mb-3 foot_bar">
          <label htmlFor="" className="text-light foot_label">Sign up for InfyDrive updates</label>
            <input
              type="text"
              class="form-control text-light foot_input form-control-lg"
              placeholder="Your email"
              aria-label="Your email"
              aria-describedby="button-addon2"
            />
            <button
              class="btn text-light foot_btn"
              type="button"
              id="button-addon2"
            >
               
             {"-->"}
            </button>
          </div>
          <hr  className="foot_hr"/>
        </div>
      </div>
      </div>
     </footer>
    </>
  );
};

export default Footer;
