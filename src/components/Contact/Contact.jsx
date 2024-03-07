import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dvoupop",
        "template_jq2c8pb",
        form.current,
        "GgIrS84rA-GJsJON5"
      )
      .then(
        (result) => {
          console.log(result.text); // Logging the result or response text
          setDone(true); // Updating the state to indicate success
          alert("Success"); // Displaying a success alert
          form.current.reset(); 
          // Resetting the form using form.current
        },
      
        (error) => {
          console.log(error.text);
          alert({error});

        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: darkMode?'white': ''}}>Connect Me</span>
          <span>Discover How I <br></br>Can Add Value</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user"  placeholder="Name" required="true"/>
          <input type="tel"  name="user_phone"  className="user"  placeholder="Phone"  required={true}  pattern="[0-9]{10}"  title="Please enter a 10-digit phone number"/>
<input type="email" name="user_email" className="user" placeholder="Email" required={true} pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}" />
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button"/>
             <div className="marquee-container">
                   {done && <div className="marquee-text">Thanks for Contacting me</div>}
               </div>
              <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
