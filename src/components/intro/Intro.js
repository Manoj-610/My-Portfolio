import "./intro.scss";
import img from "../image/man.png";
import down from "../image/down-arrow-5.png";
export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgcontainer">
          <img src={img}></img>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There ,I'm</h2>
          <h1>Manoj Kumar</h1>
        
          <h3>
            Frontend <span>Developer</span>
          </h3>
        
          <div className="resume">
          <a
              className="anchor1"
              href="https://drive.google.com/uc?export=download&id=13Mv2YPEV2z8rRryRTzcRZcDguks85oDI"
            >
              Download CV
            </a>
          </div>
         
        </div>
        <a className="anchor" href="#portfolio">
          <img src={down} />
        </a>
      </div>
    </div>
  );
}
