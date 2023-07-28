import React from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

const Navbar = (props) => {
  return (
    <>
      <nav className="navbar-navbar">
        <div className="navbar-desktop">
          <div className="navbar-main">
            <div className="navbar-branding">
              <img
                alt={props.image_alt1}
                src={props.image_src1}
                className="navbar-image"
              />
            </div>

          </div>
          <div className="navbar-quick-actions">
            <Link href="/">
              <a className="navbar-link08 link">Log in</a>
            </Link>
            <Link href="https://app.valuerouter.com/">
              <a className="navbar-link09">
                <div className="navbar-sign-up-btn">
                  <span className="navbar-sign-up">START NOW</span>
                </div>
              </a>
            </Link>
            <img
              id="open-mobile-menu"
              alt={props.pastedImage_alt}
              src={props.pastedImage_src}
              className="navbar-hamburger-menu"
            />
          </div>
        </div>
        <div id="mobile-menu" className="navbar-mobile">
          <div className="navbar-top">
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="navbar-image1"
            />
            <svg
              id="close-mobile-menu"
              viewBox="0 0 1024 1024"
              className="navbar-icon"
            >
              <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
            </svg>
          </div>
          <div className="navbar-links1">
          
          
            <div className="navbar-buttons">
              <Link href="/">
                <a className="navbar-link14">
                  <div className="navbar-btn">
                    <span className="navbar-text">{props.text131}</span>
                  </div>
                </a>
              </Link>
              <Link href="https://app.valuerouter.com/">
                <a className="navbar-link15">
                  <div className="navbar-btn1">
                    <span className="navbar-text1">{props.text1311}</span>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <Script
            html={` <script>
    /*
    Mobile menu - Code Embed
    */

    // Mobile menu
    const mobileMenu = document.querySelector("#mobile-menu");

    // Buttons
    const closeButton = document.querySelector("#close-mobile-menu");
    const openButton = document.querySelector("#open-mobile-menu");

    if (mobileMenu && closeButton && openButton) {
      // On openButton click, set the mobileMenu position left to -100vw
      openButton.addEventListener("click", function () {
        mobileMenu.style.transform = "translateX(0%)";
      });

      // On closeButton click, set the mobileMenu position to 0vw
      closeButton.addEventListener("click", function () {
        mobileMenu.style.transform = "translateX(100%)";
      });
    }
  </script>`}
          ></Script>
        </div>
      </nav>
      <style jsx>
        {`
          .navbar-navbar {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1200px;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .navbar-desktop {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .navbar-main {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .navbar-branding {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .navbar-image {
            width: 200px;
            object-fit: cover;
          }
          .navbar-links {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            padding-top: 12px;
            border-radius: 6px;
            flex-direction: row;
            padding-bottom: 12px;
            justify-content: center;
          }
          .navbar-quick-actions {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .navbar-link08 {
            display: none;
          }
          .navbar-link09 {
            display: contents;
          }
          .navbar-sign-up-btn {
            display: flex;
            transition: 0.3s;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: center;
            text-decoration: none;
            background-color: #ade2df;
          }
          .navbar-sign-up-btn:hover {
            background-color: rgba(173, 226, 223, 0.5);
          }
          .navbar-sign-up {
            font-style: normal;
            font-weight: 500;
          }
          .navbar-hamburger-menu {
            width: 20px;
            height: 12px;
            display: none;
          }
          .navbar-mobile {
            gap: var(--dl-space-space-fourunits);
            top: 0px;
            left: 0px;
            width: 100vw;
            height: 100vh;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            z-index: 200;
            position: fixed;
            transform: translateX(100%);
            transition: 0.3s;
            align-items: flex-start;
            flex-direction: column;
            background-color: #ffffff;
          }
          .navbar-top {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .navbar-image1 {
            width: 150px;
            object-fit: cover;
          }
          .navbar-icon {
            width: 28px;
            height: 28px;
          }
          .navbar-links1 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .navbar-link10 {
            text-decoration: none;
          }
          .navbar-link11 {
            text-decoration: none;
          }
          .navbar-link12 {
            text-decoration: none;
          }
          .navbar-link13 {
            text-decoration: none;
          }
          .navbar-buttons {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .navbar-link14 {
            display: contents;
          }
          .navbar-btn {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
            background-color: #ade2df;
          }
          .navbar-text {
            font-style: normal;
            font-weight: 500;
          }
          .navbar-link15 {
            display: contents;
          }
          .navbar-btn1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
            background-color: #ade2df;
          }
          .navbar-text1 {
            font-style: normal;
            font-weight: 500;
          }
          @media (max-width: 991px) {
            .navbar-navbar {
              align-items: center;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .navbar-links {
              display: none;
            }
            .navbar-link08 {
              display: none;
            }
            .navbar-sign-up-btn {
              display: none;
            }
            .navbar-hamburger-menu {
              display: flex;
            }
          }
          @media (max-width: 767px) {
            .navbar-navbar {
              align-items: center;
            }
            .navbar-mobile {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .navbar-btn {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

Navbar.defaultProps = {
  image_src1: '/ValueRouter.png',
  Link_3: 'Process',
  text1: 'Resources',
  text12: 'Process',
  Link_4: 'Our Story',
  Branding_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/4a46e3f6-a2fb-4002-a0ce-bb246bd8698d/afed3d97-066a-440a-a27e-491fdc7ac2b5?org_if_sml=15413',
  Link_1: 'Resources',
  text131: 'Log in',
  image_alt: 'image',
  pastedImage_src: '/pastedimage-8o98.svg',
  text1311: 'START NOW',
  text13: 'Our Story',
  Link_2: 'Inspiration',
  pastedImage_alt: 'pastedImage',
  image_alt1: 'image',
  image_src: '/ValueRouter.png',
  Branding_alt: 'pastedImage',
  text11: 'Inspiration',
}

Navbar.propTypes = {
  image_src1: PropTypes.string,
  Link_3: PropTypes.string,
  text1: PropTypes.string,
  text12: PropTypes.string,
  Link_4: PropTypes.string,
  Branding_src: PropTypes.string,
  Link_1: PropTypes.string,
  text131: PropTypes.string,
  image_alt: PropTypes.string,
  pastedImage_src: PropTypes.string,
  text1311: PropTypes.string,
  text13: PropTypes.string,
  Link_2: PropTypes.string,
  pastedImage_alt: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src: PropTypes.string,
  Branding_alt: PropTypes.string,
  text11: PropTypes.string,
}

export default Navbar
