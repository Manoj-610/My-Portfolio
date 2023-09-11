import "./skills.scss"
import html from "../image/html.png"
import css from "../image/css.svg"
import javascript from "../image/Javascript-JS.png"
import react from "../image/react.png"
import bootstrap from "../image/Bootstrap_logo.svg.png"
import git from "../image/git-github.jpg"
import down from "../image/down-arrow-5.png";

export default function Skills() {
  return (
    <div className='testimonials' id='testimonials'>
      <div className="container">
        <div className="item">
          <div className="inner">
          <img src={html} className="html" />
          </div>
          <h2 className="head">HTML</h2>
        </div>
        <div className="item">
          <div className="inner">
          <img src={css} className="html" />
          </div>
          <h2 className="head">CSS</h2>
        </div>
        <div className="item">
          <div className="inner">
          <img src={javascript} className="html" />
          </div>
          <h2 className="head">JavaScript</h2>
        </div>
        <div className="item">
          <div className="inner">
          <img src={react} className="html" />
          </div>
          <h2 className="head">React</h2>
        </div>
        <div className="item">
          <div className="inner">
          <img src={bootstrap} className="html" />
          </div>
          <h2 className="head">Bootstrap</h2>
        </div>
        <div className="item">
          <div className="inner">
          <img src={git} className="html" />
          </div>
          <h2 className="head">GIT/GITHUB</h2>
        </div>
      </div>
      <a className="arrow1" href="#quali">
          <img src={down} />
        </a>
      
    </div>
  )
}
