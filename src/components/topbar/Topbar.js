import "./topbar.scss";
import { Person, Mail } from "@mui/icons-material";
export default function Topbar({menuOpen ,setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")} >
      <div className="wrapper">
        <div className="left">
          <a className="logo" href="#intro">
            My Portfolio
          </a>
          <div className="itemcontainer">
            <Person className="icon" />
            <span>+918299874952</span>
          </div>
          <div className="itemcontainer">
            <Mail className="icon" />
            <span>manoj7941996@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
