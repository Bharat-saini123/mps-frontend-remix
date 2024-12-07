import "./header_style.css";
import { useNavigate } from "react-router-dom";
import { Fade as Hamburger } from "hamburger-react";
import { useState } from "react";

function Header() {
  const [isOpen, setOpen] = useState(false);
  const nav = useNavigate();
  const scrollDown = (pixels) => {
    window.scrollBy({
      top: pixels,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="header">
        <div className="logo-title-cnt" style={{cursor: 'pointer'}} onClick={() => {nav('/')}}>
          <div id="header-logo">
            <svg
              className="logo-svg"
              width="70"
              height="70"
              viewBox="0 0 205 205"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="205" height="205" fill="#3600A9" />
              <circle cx="102.5" cy="102.5" r="102.5" fill="#3600A9" />
              <path
                d="M7.29271 102.682C7.13206 50.4878 49.3117 7.45153 101.506 7.29088V7.29088C153.7 7.13023 196.143 49.906 196.304 102.1V102.1C196.465 154.294 154.285 197.33 102.091 197.491V197.491C49.8971 197.652 7.45335 154.876 7.29271 102.682V102.682Z"
                fill="white"
              />
              <path
                d="M88.42 51.88V94H78.16V68.74L68.74 94H60.46L50.98 68.68V94H40.72V51.88H52.84L64.66 81.04L76.36 51.88H88.42ZM127.898 65.44C127.898 67.88 127.338 70.12 126.218 72.16C125.098 74.16 123.378 75.78 121.058 77.02C118.738 78.26 115.858 78.88 112.418 78.88H106.058V94H95.7981V51.88H112.418C115.778 51.88 118.618 52.46 120.938 53.62C123.258 54.78 124.998 56.38 126.158 58.42C127.318 60.46 127.898 62.8 127.898 65.44ZM111.638 70.72C113.598 70.72 115.058 70.26 116.018 69.34C116.978 68.42 117.458 67.12 117.458 65.44C117.458 63.76 116.978 62.46 116.018 61.54C115.058 60.62 113.598 60.16 111.638 60.16H106.058V70.72H111.638ZM148.48 94.42C145.4 94.42 142.64 93.92 140.2 92.92C137.76 91.92 135.8 90.44 134.32 88.48C132.88 86.52 132.12 84.16 132.04 81.4H142.96C143.12 82.96 143.66 84.16 144.58 85C145.5 85.8 146.7 86.2 148.18 86.2C149.7 86.2 150.9 85.86 151.78 85.18C152.66 84.46 153.1 83.48 153.1 82.24C153.1 81.2 152.74 80.34 152.02 79.66C151.34 78.98 150.48 78.42 149.44 77.98C148.44 77.54 147 77.04 145.12 76.48C142.4 75.64 140.18 74.8 138.46 73.96C136.74 73.12 135.26 71.88 134.02 70.24C132.78 68.6 132.16 66.46 132.16 63.82C132.16 59.9 133.58 56.84 136.42 54.64C139.26 52.4 142.96 51.28 147.52 51.28C152.16 51.28 155.9 52.4 158.74 54.64C161.58 56.84 163.1 59.92 163.3 63.88H152.2C152.12 62.52 151.62 61.46 150.7 60.7C149.78 59.9 148.6 59.5 147.16 59.5C145.92 59.5 144.92 59.84 144.16 60.52C143.4 61.16 143.02 62.1 143.02 63.34C143.02 64.7 143.66 65.76 144.94 66.52C146.22 67.28 148.22 68.1 150.94 68.98C153.66 69.9 155.86 70.78 157.54 71.62C159.26 72.46 160.74 73.68 161.98 75.28C163.22 76.88 163.84 78.94 163.84 81.46C163.84 83.86 163.22 86.04 161.98 88C160.78 89.96 159.02 91.52 156.7 92.68C154.38 93.84 151.64 94.42 148.48 94.42Z"
                fill="#3600A9"
              />
              <path
                d="M57.99 105.94V127H52.86V105.94H57.99ZM66.8377 105.94V127H61.7077V105.94H66.8377ZM85.7053 105.94V110.05H80.1253V127H74.9953V110.05H69.4153V105.94H85.7053ZM101.18 114.34V118.6H87.9799V114.34H101.18ZM118.882 105.94V120.28C118.882 122.5 118.252 124.21 116.992 125.41C115.752 126.61 114.072 127.21 111.952 127.21C109.732 127.21 107.952 126.58 106.612 125.32C105.272 124.06 104.602 122.27 104.602 119.95H109.702C109.702 120.83 109.882 121.5 110.242 121.96C110.602 122.4 111.122 122.62 111.802 122.62C112.422 122.62 112.902 122.42 113.242 122.02C113.582 121.62 113.752 121.04 113.752 120.28V105.94H118.882ZM128.156 110.05V114.31H135.026V118.27H128.156V122.89H135.926V127H123.026V105.94H135.926V110.05H128.156ZM144.386 110.05V114.31H151.256V118.27H144.386V122.89H152.156V127H139.256V105.94H152.156V110.05H144.386Z"
                fill="black"
              />
              <path
                d="M78.425 149.45V167H74.15V156.475L70.225 167H66.775L62.825 156.45V167H58.55V149.45H63.6L68.525 161.6L73.4 149.45H78.425ZM92.4242 163.9H85.8742L84.8242 167H80.3492L86.6992 149.45H91.6492L97.9992 167H93.4742L92.4242 163.9ZM91.3242 160.6L89.1492 154.175L86.9992 160.6H91.3242ZM112.557 149.45V152.875H107.907V167H103.632V152.875H98.9818V149.45H112.557ZM129.902 149.45V167H125.627V159.775H118.977V167H114.702V149.45H118.977V156.325H125.627V149.45H129.902ZM139.338 167.175C138.055 167.175 136.905 166.967 135.888 166.55C134.872 166.133 134.055 165.517 133.438 164.7C132.838 163.883 132.522 162.9 132.488 161.75H137.038C137.105 162.4 137.33 162.9 137.713 163.25C138.097 163.583 138.597 163.75 139.213 163.75C139.847 163.75 140.347 163.608 140.713 163.325C141.08 163.025 141.263 162.617 141.263 162.1C141.263 161.667 141.113 161.308 140.813 161.025C140.53 160.742 140.172 160.508 139.738 160.325C139.322 160.142 138.722 159.933 137.938 159.7C136.805 159.35 135.88 159 135.163 158.65C134.447 158.3 133.83 157.783 133.313 157.1C132.797 156.417 132.538 155.525 132.538 154.425C132.538 152.792 133.13 151.517 134.313 150.6C135.497 149.667 137.038 149.2 138.938 149.2C140.872 149.2 142.43 149.667 143.613 150.6C144.797 151.517 145.43 152.8 145.513 154.45H140.888C140.855 153.883 140.647 153.442 140.263 153.125C139.88 152.792 139.388 152.625 138.788 152.625C138.272 152.625 137.855 152.767 137.538 153.05C137.222 153.317 137.063 153.708 137.063 154.225C137.063 154.792 137.33 155.233 137.863 155.55C138.397 155.867 139.23 156.208 140.363 156.575C141.497 156.958 142.413 157.325 143.113 157.675C143.83 158.025 144.447 158.533 144.963 159.2C145.48 159.867 145.738 160.725 145.738 161.775C145.738 162.775 145.48 163.683 144.963 164.5C144.463 165.317 143.73 165.967 142.763 166.45C141.797 166.933 140.655 167.175 139.338 167.175Z"
                fill="black"
              />
            </svg>
          </div>

          <div id="header-title">Maths By Pawan Sir</div>
        </div>

        <div className="nav">
          <ul className="nav-list">
            <button
              id="contact-me-btn"
              className="nav-link-style"
              onClick={() => nav("/")}
            >
              Home
            </button>
            <button
              id="contact-me-btn"
              className="nav-link-style"
              onClick={() => nav("/exams")}
            >
              Exams
            </button>

            <button
              id="contact-me-btn"
              className="nav-link-style"
              onClick={() => nav("/about-us")}
            >
              About Us
            </button>

            <button
              id="contact-me-btn"
              className="nav-link-style"
              onClick={() => nav("/contact")}
            >
              Contact
            </button>
          </ul>
        </div>
        <div className="hamburger-cnt">
          <Hamburger toggled={isOpen} toggle={setOpen} color="#fff"></Hamburger>
        </div>
      </div>
      {isOpen ? (
        <div id="hamburger-menu">
          <button className="ham-btn" onClick={() => nav("/")}>
            Home
          </button>
          <button className="ham-btn" onClick={() => nav("/exams")}>
            Exams
          </button>

          <button className="ham-btn" onClick={() => nav("/about-us")}>
            About Us
          </button>

          <button className="ham-btn" onClick={() => nav("/contact")}>
            Contact
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Header;