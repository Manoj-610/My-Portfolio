import "./qualification.scss";
import { School } from "@mui/icons-material";
import down from "../image/down-arrow-5.png";
export default function Qualification() {
  return (
    <div className="quali" id="quali">
      <div className="container">
        <div className="itemcontainer">
          <School className="icon" />
          <h2 className="head">Education</h2>
        </div>
        <div className="main">
          <h2 className="bach">Bachelor In Computer Science and Engineering</h2>
          <p>U.I.E.T , C.S.J.M University , Kanpur</p>
          <p>(2015-2019)</p>
          <h2 className="head1">Intermediate In-Science</h2>
          <p>D.A.V Public School - Nigahi</p>
          <p>(2013-2014)</p>
        </div>
      </div>
      <a className="arrow1" href="#services">
          <img src={down} />
        </a>
    </div>
  );
}
