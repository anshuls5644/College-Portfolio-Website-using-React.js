import React from "react";
import "./contact.css";
export default function contact() {
  return (
    <div class="contact">
      <p className="head-p">CONTACT US</p>
      <hr class="separator" />
      <div class="contact-item">
        <div className="input-form">
          <iframe className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109419.1378248472!2d76.92596344335938!3d31.016551000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39057db24364e085%3A0x4f4fefd65caa0317!2sJaypee%20University%20of%20Information%20Technology!5e0!3m2!1sen!2sin!4v1719478266300!5m2!1sen!2sin"
            
            allowfullscreen=""
            loading="fast"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
</div>
<div className="input-form">
          <form class="contact-form" name="contact-form" method="POST" 
  action="https://script.google.com/macros/s/AKfycbxIO0euGnnVde5hfd94wDnYMumOuD_R5DIsNY1g1tWJj9P98WuQBcMjbtL-mOG1nLWpew/exec">
            <p class="form-head">send message for any queries</p>
            <p className="field-head">E-MAIL</p>
            <input class="field" type="email" name="Email"></input>
            <p className="field-head">MESSAGE</p>
            <input
              className="field-message"
              placeholder="Write your Message here"
              type="text"
              name="Message"
            ></input>
           <button class="button-send" >SEND MESSAGE</button>
          </form>
          </div>
        </div>
        
      </div>
    
  );
}
