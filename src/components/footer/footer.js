import React from 'react'
import "./footer.css";
import lg1 from "../../assets/footer-logo/Rectangle 42.png";
import lg2 from "../../assets/footer-logo/Rectangle 43.png";
import lg3 from "../../assets/footer-logo/Rectangle 44.png";
import lg4 from "../../assets/footer-logo/Rectangle 45.png";
import som1 from "../../assets/footer-logo/facebook.png";
import som2 from "../../assets/footer-logo/instagram.png";
import som3 from "../../assets/footer-logo/linkidin.png";
import som4 from "../../assets/footer-logo/twitter.png";
import som5 from "../../assets/footer-logo/youtube.png";
export default function footer() {
  return (
    <div className='footer'>
      <div>
      <p className='footer-head'>SOME IMPORTANT LINKS</p>
      <div class="logos-f">
        <a href='https://siam-juit.github.io/website/' target="_blank"><img src={lg1}></img></a>
        <a href='https://juit.acm.org/' target="_blank"><img src={lg2}></img></a>
        <a href='https://jyc.co.in/' target="_blank"><img src={lg3}></img></a>
        <a href='https://ieeejuit.co.in/' target="_blank"><img src={lg4}></img></a>
      </div>
      <div class="s-head">
        <p> SOCIAL MEDIA LINKS</p>
      </div>
      <div class='social'>
      <a href='https://www.facebook.com/JUITWSolan' target="_blank"><img src={som1} class="sl"></img></a>
        <a href='https://www.instagram.com/juit_waknaghat/' target="_blank"><img src={som2} class="sl" ></img></a>
        <a href='https://www.linkedin.com/school/jaypee-university-of-information-technology-waknaghat/'target="_blank"><img src={som3} class="sl"></img></a>
        <a href='https://x.com/i/flow/login?redirect_after_login=%2FJuitWaknaghat' target="_blank"><img src={som4} class="sl"></img></a>
        <a href='https://www.youtube.com/channel/UCdZZ7j5-5kyBzxz-gtNHvFA' target="_blank"><img src={som5} class="sl"></img></a>
      </div>
      <div class="l-footer">
        <p class="lf-text">© Copyright 2023. www.juit.ac.in. All Rights Reserved.</p>
      </div>
      </div>
    </div>
  )
}
