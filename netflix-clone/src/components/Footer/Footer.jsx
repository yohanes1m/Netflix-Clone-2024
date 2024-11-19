import React from "react";
import "./Footer.css";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
function Footer() {
  return (
    <div className="footer_outer_container">
      <div className="footer_inner_container">
        <div className="footer_icons ">
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
        <div className="footer_data row mb-2 mb-md-4">
          <div className="col-sm-12 col-md-6 col-lg-3">
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="service_code ">
          <p className="p-2  ">Service Code</p>
        </div>
        <div className="copy-write">&copy; 1997-2024 Netflix, Inc.</div>
      </div>
    </div>
  );
}

export default Footer;
