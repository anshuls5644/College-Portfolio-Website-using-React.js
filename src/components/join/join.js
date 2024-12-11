import React from "react";
import "./join.css";
import brochure from "../../assets/AdmissionBrochure2024-1.pdf";

export default function join() {
  return (
    <div class="join">
      <div class="heading">
        <p>JOIN US</p>

        <hr class="separator" />
        <p class="txt">
          You will have knowledge of the subjects that will be especially useful
          for you when climbing the career ladder.
        </p>
        <p class="infoo">
          Become a part of our university to develop your hidden skills and
          become a professional.
        </p>

        <div>
          <a
            href="../../assets/AdmissionBrochure2024-1.pdf"
            download={brochure}
          >
            {" "}
            <button class="btnn">DOWNLOAD BROCHURE</button>
          </a>
        </div>
      </div>
    </div>
  );
}
