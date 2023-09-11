import "./services.scss";
import { ViewQuilt } from "@mui/icons-material";
import { Code } from "@mui/icons-material";
import { Bolt } from "@mui/icons-material";
import down from "../image/down-arrow-5.png";
export default function Services() {
  return (
    <div className="service" id="services">
        <h2 className="head1">Services</h2>
        <p className="off">What I Offer</p>
      <div className="container">
      
          
          
        
        <div className="main"  >
            
          <div className="itemcontainer" >
            <ViewQuilt className="icon" />
            <h2 className="head">UI Designer</h2>
          </div>
          <p className="para">
            I provide UI-focused web page design services,creating visually
            appealing and user-friendly interfaces for an enhanced browsing
            experience.
          </p>
        </div>
        <div className="main">
          <div className="itemcontainer">
            <Code className="icon" />
            <h2 className="head">Website Design</h2>
          </div>
          <p className="para">
            I offer professional web design services, creatng visually
            captivating and functional website that engage users and drive
            results.
          </p>
        </div>
        <div className="main">
          <div className="itemcontainer">
            <Bolt className="icon" />
            <h2 className="head">Responsive Designer</h2>
          </div>
          <p className="para">
            I create responsive designs with media queries for optimal user
            experience on desktop,tablets and mobile devices.
          </p>
        </div>
      </div>
      <a className="arrow1" href="#contact">
          <img src={down} />
        </a>

    </div>
  );
}
