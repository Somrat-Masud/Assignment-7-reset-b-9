import React from "react";
import footerLogo from "../../assets/img/logo-footer.png";

const Footer = () => {
  return (
    <footer className="bg-[#06091A] relative ">
      <div className="">
        <img className=" text-xl mx-auto " src={footerLogo} alt="" />
      </div>
      <div className="footer  text-base-content p-10 mt-14 ">
        <div>
          <h6 className="footer-title text-white">About Us</h6>
          <p className="text-[#999AA1]">
            We are a passionate team dedicated to providing <br /> the best
            services to our customers.
          </p>
        </div>
        <div>
          <h6 className="footer-title text-white">Quick Links</h6>
          <a className="link link-hover text-[#999AA1]">Home </a>
          <a className="link link-hover text-[#999AA1]">Services</a>
          <a className="link link-hover text-[#999AA1]">About</a>
          <a className="link link-hover text-[#999AA1]">Contact</a>
        </div>
        <div>
          <h6 className="footer-title text-white">Subscribe</h6>
          <p className="text-[#999AA1]">
            Subscribe to our newsletter for the latest updates.
          </p>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text text-[#999AA1]">
                Enter your email address
              </span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </div>
      </div>
      <div className="divider"></div>
      <div className="footer footer-center text-base-content p-4 -mt-14">
        <aside>
          <p className="text-[#999AA1]">
            @2024 Your Company All Rights Reserved.
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
