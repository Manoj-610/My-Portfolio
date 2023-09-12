import "./works.scss";
import web from "../image/web.png";
import todo1 from "../image/todo1.jpg";
import down from "../image/down-arrow-5.png";
import weather from "../image/weather1.webp";
import analog from "../image/analog.webp";
import live from "../image/live.png";




export default function Works() {
  

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="inner">
            <div className="left">
              <div className="left-container">
                <div className="imgcontainer">
                  <img src={web} />
                </div>
                <h2>To Do List</h2>

                <p>
                  In this app user can add , delete and edit task manually, In
                  this project I have used Html,Css ,Javascript and Bootstrap in
                  frontend and LocalStoage as backend.
                </p>

                <span className="spa">
                  <img className="live-img" src={live} />
                  <a href="https://manoj-610.github.io/ToDoList/">
                    Live demo
                  </a>
                </span>
              </div>
            </div>
            <div className="right">
              <img src={todo1} />
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="inner1">
            <div className="left1">
              <div className="left-container1">
                <div className="imgcontainer1">
                  <img src={web} />
                </div>
                <h2>Weather App</h2>
                <p>
                  Developed using Html, CSS and Javascript.API is used ,where
                  user can search any city climate all over the world.This app
                  shows the current temperature,humidity and wind speed.
                </p>
                <span className="spa1">
                  <img className="live-img1" src={live} />
                  <a href="https://manoj-610.github.io/Weather-App.github.io/">
                    Live demo
                  </a>
                </span>
              </div>
            </div>
            <div className="right1">
              <img src={weather} />
            </div>
          </div>
        </div>
        <div className="carousel-item ">
          <div className="inner2">
            <div className="left2">
              <div className="left-container2">
              
                <div className="imgcontainer2">
                 
                  <img src={web} />
                </div>
                <h2>Analog Clock</h2>
                <p>
                  This is an app that shows the current time of India. This is
                  built on javascript,html and css.
                </p>
                <span className="spa2">
                  <img className="live-img2" src={live} />
                  <a href="https://manoj-610.github.io/Analog-Clock/">
                    Live demo
                  </a>
                </span>
              </div>
            </div>
            <div className="right2">
              <img src={analog} />
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      <a className="arrow3" href="#testimonials">
        <img src={down} />
      </a>
    </div>
  );
}
