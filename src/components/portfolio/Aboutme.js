import "./aboutme.scss"
import about from "../image/aboutme.jpg"
import down from "../image/down-arrow-5.png";

export default function Aboutme() {
  return (
    <div className='portfolio' id='portfolio'>
        <div className='port-main'>
            <img className='imgabout' src={about} />
            <p className='para'>Motivated software engineer with a passion for web development and a strong foundation in HTML, CSS, JavaScript, and Bootstrap. Proficient in building interactive and responsive websites using modern libraries and frameworks React.js. With a keen eye
for design and user experience, I am dedicated to creating seamless and engaging digital solutions. My experience extends to collaborating in dynamic environments and utilizing Git for version control. Eager to contribute my skills and enthusiasm to tackle
complex challenges and deliver exceptional user experiences.</p>
            </div>

            <a className="arrow" href="#carouselExampleIndicators">
          <img src={down} />
        </a>
      
    </div>
  )
}
