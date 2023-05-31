import React, { useEffect, useState } from "react";
import "./styles.scss";

const PremiumBannerMobile = () => {
  return (
    <section
      id="blocks-front-premiumbannermobile"
      className="blocks-front-premiumbannermobile"
    >
      <a
        id="blocks-front-premiumbannermobile-close-link"
        className="blocks-front-premiumbannermobile-close-link"
        href=""
      >
        Fechar
        <span
          id="blocks-front-premiumbannermobile-close-link-icon"
          className="blocks-front-premiumbannermobile-close-link-icon"
        >
          <svg
            width="13"
            height="12"
            viewBox="0 0 13 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.1667 1.33335L1.83337 10.6667M11.1667 10.6667L1.83337 1.33334"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </span>
      </a>
      <p
        id="blocks-front-premiumbannermobile-p"
        className="blocks-front-premiumbannermobile-p"
      >
        Não limite sua criatividade, junte-se a familia Blocks por apenas{" "}
        <b>BRL 19,99</b>
      </p>
      <a
        id="blocks-front-premiumbannermobile-a"
        className="blocks-front-premiumbannermobile-a"
        href=""
      >
        Quero ser Premium
        <svg
          width="16"
          height="15"
          viewBox="0 0 16 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          id="blocks-front-premiumbannermobile-a-svg"
          className="blocks-front-premiumbannermobile-a-svg"
        >
          <path
            d="M9.16715 1.5L15.0005 7.5M15.0005 7.5L9.16715 13.5M15.0005 7.5L1.00049 7.5"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>
    </section>
  );
};

export default PremiumBannerMobile;
