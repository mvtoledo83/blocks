import React, { useEffect, useState } from "react";
import "./styles.scss";

const PremiumBanner = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    const fixedBanner = () => {
      const banner = document.getElementById("blocks-front-premiumbanner");
      if (scrollY >= 67) {
        banner.style.position = "fixed";
      } else {
        banner.style.position = "relative";
      }
    };

    fixedBanner();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <section
      id="blocks-front-premiumbanner"
      className="blocks-front-premiumbanner"
    >
      <p
        id="blocks-front-premiumbanner-p"
        className="blocks-front-premiumbanner-p"
      >
        Não limite sua criatividade, junte-se a familia Blocks por apenas{" "}
        <b>BRL 19,99</b>
      </p>
      <a
        id="blocks-front-premiumbanner-a"
        className="blocks-front-premiumbanner-a"
      >
        Quero ser Premium
        <svg
          width="16"
          height="15"
          viewBox="0 0 16 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          id="blocks-front-premiumbanner-a-svg"
          className="blocks-front-premiumbanner-a-svg"
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

export default PremiumBanner;
