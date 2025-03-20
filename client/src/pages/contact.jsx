import React from "react";
import BoxButton from "../components/boxbutton";
import Footer from '../components/footer';
import NavBar from '../components/navbar';
function Contact(){
  return(
    <div>
      <NavBar/>
      <br></br>
      <div className="Contact Me">
        <div className="vContainerCentered">
        <h1>Contact</h1>
        <p>Feel free to reach out!</p>
        </div>
        <div className = "DecorativeHLine"></div>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
          </div>
        </form>
        <BoxButton>
            Send Message
        </BoxButton>
      </div>
      <Footer/>
    </div>
  );
}

export default Contact;