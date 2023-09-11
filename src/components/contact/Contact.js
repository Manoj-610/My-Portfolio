
import "./contact.scss"
import hand from "../image/hand.png"
import emailjs from "emailjs-com"
import { useState } from "react";
export default function Contact() {
  const [message, setmessage] = useState(false);
  const [blank , setblank] =  useState()
  const [email , setemail] =  useState()
  const [area , setarea] =  useState()
  const handlesubmit=(e)=>{
    
    e.preventDefault();
    emailjs.sendForm('service_7wyhjwd' , 'template_23vszdd',e.target,'2XXQx6act3rb4xawv').then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    });
setblank('');
setemail('');
setarea('');
    setmessage(true)
  }
  return (
    <div className='contact' id="contact">
      <div className="left">
      <img src={hand}/>
      </div>
      
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handlesubmit}>
        <input name="name" value={blank} onChange={(e)=>setblank(e.target.value)} type="text" placeholder="Full name"/>
          <input name="user_email" value={email} onChange={(e)=>setemail(e.target.value)} type="email"  placeholder="Email"/>
          <textarea name="message" value={area} onChange={(e)=>setarea(e.target.value)} placeholder="Message"></textarea>
          <button type="submit">send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
      
    </div>
  )
}

