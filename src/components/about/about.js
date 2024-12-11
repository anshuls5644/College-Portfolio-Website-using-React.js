import React from "react";
import "./about.css";
import img from "../../assets/about-img.png";

export default function about() {
  return (
    <div class="section">
      <div class="text">
        <h1>ABOUT JUIT</h1>
        <p>
          Jaypee University of Information Technology (JUIT) was established in
          2002 through a collaboration between the Government of Himachal
          Pradesh and Jaypee Group's Founder Chairman, Shri JaiPrakash Gaur. The
          university received approval from the University Grants Commission
          (UGC) in December 2002 and is a member of the Association of Indian
          Universities (AIU). JUIT began academic activities in July 2002,
          offering undergraduate B. Tech programs in various engineering fields.
          It also offers M. Tech programs with specializations, M.Sc programs in
          Biotechnology and Microbiology, and Ph.D. degrees in several
          disciplines. The university has been accredited by NAAC three times,
          most recently in 2024, earning an A+ grade with a score of 3.40.
          Jaypee University of Information Technology was conceived by a joint
          vision of the Government of Himachal Pradesh and Jaiprakash Gaur,
          founder of Jaypee Group, in the year 2000. Government of Himachal
          Pradesh provided land on lease for the establishment of the
          university. It was set up by Act No. 14 of 2002 vide Extraordinary
          Gazette notification of Government of Himachal Pradesh dated 23 May
          2002. JUIT was approved by the University Grants Commission under
          section 2(f) of the UGC Act, the university commenced academic
          activities from July 2002.
        </p>
      </div>
      <div class="abt-img">
      <img src={img} class="img"></img>
      </div>
    </div>
  );
}
