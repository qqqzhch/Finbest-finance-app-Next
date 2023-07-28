import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Announcement from '../components/announcement'
import Navbar from '../components/navbar'
import Feature from '../components/feature'
import Highlight from '../components/highlight'
import Point from '../components/point'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Valuerouter</title>
          <meta name="description" content="Description of the website" />
          <meta property="og:title" content="Finbest" />
          <meta
            property="og:description"
            content="Description of the website"
          />
        </Head>
        <div className="home-header">
          <div className="home-heading">
            <div id="notifcation" className="home-notification">
              <Link href="/">
                <a>
                  <Announcement
                    rootClassName="announcement-root-class-name"
                    className="home-component"
                  ></Announcement>
                </a>
              </Link>
            </div>
            <Navbar></Navbar>
          </div>
          <div className="home-hero">
            <div className="home-content">
              <h1 className="home-title">Value Router for Web3.</h1>
              <span className="home-caption">
              Valuerouter is a value routing protocol that supports
                any2any@any asset swaps by aggregating CCTP and DEX aggregators,
                enabling developers to build multi-chain dApps and enabling
                users to route valuable assets to any DeFi protocol.
              </span>
              <div className="home-hero-buttons">
                <a
                  href="https://app.valuerouter.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link1"
                >
                  <div className="home-io-btn">
                    
                    <span className="home-caption1">START NOW</span>
                  </div>
                </a>
              </div>
            </div>
            <img
              alt="pastedImage"
              src="/LandingPage/vr1.jpeg"
              className="home-pasted-image"
            />
            <div className="home-images">
              <div className="home-column"></div>
              <div className="home-column1"></div>
              <div className="home-column2">
                <img
                  alt="pastedImage"
                  src="/pastedimage-06e.svg"
                  className="home-pasted-image1"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="home-features">
          <div className="home-header1">
            <div className="home-heading1">
              <h2 className="home-text">
                Unlocking a new world of DeFi with RWA and crypto native assets
              </h2>
            </div>
          </div>
          <div className="home-feature-list">
            <Feature
              Title="Virtual Card"
              Thumbnail="/vector6113-lvvs.svg"
              rootClassName="feature-root-class-name3"
            ></Feature>
            <Feature
              Title="Safe Transactions"
              Thumbnail="/vector6114-cupp.svg"
              rootClassName="feature-root-class-name4"
            ></Feature>
            <Feature
              Title="Milestones"
              Thumbnail="/vector6114-6m1e.svg"
              rootClassName="feature-root-class-name5"
            ></Feature>
          </div>
        </div>
        <div className="home-sections">
          <div className="home-section">
            <div className="home-image">
          
            </div>
            <div className="home-content1">
              <h2 className="home-text04">Value Router</h2>
              <Highlight Description="Value Router that not only for the crypto native assets, but is ready for the RWA from permissioned pools or securities trading based on certain attributes, such as accredited investor status"></Highlight>
              <div className="home-explore"></div>
            </div>
          </div>
          <div className="home-section1">
            <div className="home-content2">
              <div className="home-heading2">
                <h2 className="home-text05">RWA with DeFi</h2>
                <span className="home-text06">
                  The opportunity for individuals and entities who may not have
                  access to traditional forms of identification to participate
                  in decentralized finance (DeFi) with RWA. This helps to
                  promote a more globally inclusive financial system by enabling
                  a wider range of individuals to engage with DeFi protocols and
                  access the economic benefits RWA provided.
                </span>
              </div>
              <div className="home-content3">
                <div className="home-points">
                  <Point></Point>
                  <Point text="Quis nostrud exercitation ullamco"></Point>
                  <Point text="Reprehenderit qui in ea voluptate velit"></Point>
                </div>
                <Link href="/">
                  <a>
                    <div className="home-get-started">
                      <span className="home-sign-up">Get started now</span>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
            <div className="home-image1"></div>
          </div>
          <div className="home-section2">
            <div className="home-image2">
          
            </div>
            <div className="home-content4">
              <h2 className="home-text10">RWA Tokenization</h2>
              <Highlight Description="The potential to significantly improve capital efficiency by leveraging crypto assets for more RWA tokenization. RWA assets issuers can raise capital more efficiently than the traditional way."></Highlight>
              <div className="home-explore1"></div>
            </div>
          </div>
        </div>
        <div className="home-features1">
          <div className="home-header2">
            <div className="home-tag">
              <span className="home-text11">Features</span>
            </div>
            <div className="home-heading3">
              <h2 className="home-text12">
                Connecting TradFi to DeFi with one protocol
              </h2>
            </div>
          </div>
          <div className="home-feature-list1">
            <Feature
              Title="Security Prioritized"
              Description="Security is paramount in MultiCircle. Our security team is working with top talents in the industry to ensure the security."
            ></Feature>
            <Feature
              Title="No Gap in DeFi"
              Thumbnail="/vector6113-r6dl.svg"
              Description="Swap any asset for any asset in the supported chains in one transaction, routing the value for your valuable assets."
            ></Feature>
            <Feature
              Title="Flexible Customization"
              Thumbnail="/vector6113-6zj.svg"
              Description="All the dApp partners can customize their own user value swap experience with our API and SDK."
            ></Feature>
            <Feature
              Title="Virtual Card"
              Thumbnail="/vector6113-lvvs.svg"
              rootClassName="feature-root-class-name2"
            ></Feature>
            <Feature
              Title="Safe Transactions"
              Thumbnail="/vector6114-cupp.svg"
              rootClassName="feature-root-class-name"
            ></Feature>
            <Feature
              Title="Milestones"
              Thumbnail="/vector6114-6m1e.svg"
              rootClassName="feature-root-class-name1"
            ></Feature>
          </div>
        </div>
        <div className="home-faq">
          <div className="home-content5">
            <div className="home-header3">
              <div className="home-tag1">
                <span className="home-text13">
                  <span>FAQ</span>
                  <br></br>
                </span>
              </div>
              <div className="home-heading4">
                <h2 className="home-text16">Frequently Asked Questions</h2>
              </div>
            </div>
            <div className="home-rows">
              <div className="home-column3">
                <div className="Question">
                  <span className="home-title1">
                    What is sit amet, consectetur adipiscing elit, sed do?
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Excepteur sint occaecat cupidatat non proident, sunt
                    in culpa qui officia deserunt mollit anim id est laborum.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
                <div className="Question">
                  <span className="home-title2">
                    What is sit amet, consectetur adipiscing elit, sed do?
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-description1">
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Excepteur sint occaecat cupidatat non proident,
                      sunt in culpa qui officia deserunt mollit anim id est
                      laborum.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>
                      tempor incididunt ut labore et dolore magna aliqua.
                      Excepteur sint occaecat
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </div>
                <div className="home-question2 Question">
                  <span className="home-title3">
                    What is sit amet, consectetur adipiscing elit, sed do?
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-description2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </span>
                </div>
              </div>
              <div className="home-column4">
                <div className="home-question3 Question">
                  <span className="home-title4">
                    What is sit amet, consectetur adipiscing elit, sed do?
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-description3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </span>
                </div>
                <div className="home-question4 Question">
                  <span className="home-title5">
                    What is sit amet, consectetur adipiscing elit, sed do?
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-description4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </span>
                </div>
                <div className="home-question5 Question">
                  <span className="home-title6">
                    What is sit amet, consectetur adipiscing elit, sed do?
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-description5">
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Excepteur sint occaecat cupidatat non proident,
                      sunt in culpa qui officia deserunt mollit anim id est
                      laborum.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>
                      tempor incididunt ut labore et dolore magna aliqua.
                      Excepteur sint occaecat
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-get-started1">
          <div className="home-content6">
            <div className="home-heading5">
              <h2 className="home-text23">Get started with finbest now!</h2>
              <span className="home-text24">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore magna.
              </span>
            </div>
            
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            flex-direction: column;
          }
          .home-header {
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-heading {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .home-notification {
            width: 100%;
            display: none;
          }
          .home-component {
            text-decoration: none;
          }
          .home-hero {
            flex: 1;
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1200px;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-content {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 0.5;
            display: flex;
            z-index: 20;
            align-items: flex-start;
            padding-top: var(--dl-space-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .home-title {
            font-size: 64px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 76px;
          }
          .home-caption {
            font-size: 18px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 400;
            line-height: 27px;
          }
          .home-hero-buttons {
            gap: var(--dl-space-space-unit);
            display: flex;
            z-index: 15;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-link1 {
            display: contents;
          }
          .home-io-btn {
            gap: var(--dl-space-space-halfunit);
            fill: white;
            color: white;
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: center;
            text-decoration: none;
            background-color: #000000;
          }
          .home-io-btn:hover {
            background-color: rgba(0, 0, 0, 0.75);
          }
          .home-apple {
            width: 16px;
            height: 20px;
          }
          .home-caption1 {
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
          }
          .home-pasted-image {
            width: 240px;
          }
          .home-images {
            gap: var(--dl-space-space-oneandhalfunits);
            right: -210px;
            bottom: -300px;
            margin: auto;
            display: flex;
            overflow: hidden;
            position: absolute;
            transform: rotate(-30deg);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-column {
            gap: var(--dl-space-space-oneandhalfunits);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-column1 {
            gap: var(--dl-space-space-oneandhalfunits);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-column2 {
            gap: var(--dl-space-space-oneandhalfunits);
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-pasted-image1 {
            width: 240px;
          }
          .home-features {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-start;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 16px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: flex-start;
          }
          .home-header1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-heading1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text {
            width: 100%;
            height: auto;
            font-size: 40px;
            max-width: 100%;
            font-style: normal;
            font-weight: 600;
            line-height: 56px;
          }
          .home-feature-list {
            gap: var(--dl-space-space-fourunits);
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-sections {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
          }
          .home-section {
            gap: var(--dl-space-space-sixunits);
            width: 100%;
            display: flex;
            z-index: 10;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            flex-direction: row;
            justify-content: center;
          }
          .home-image {
            width: 400px;
            height: 540px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            background-size: contain;
            justify-content: flex-end;
            background-image: url('/LandingPage/vr0.png');
            background-repeat: no-repeat;
            background-position: center;
          }
          .home-image-highlight {
            top: 0px;
            right: 0px;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: center;
            background-color: #375ee0;
          }
          .home-text01 {
            color: rgb(193, 255, 252);
            width: 100%;
            max-width: 90px;
            font-style: normal;
            text-align: center;
            font-family: Poppins;
            font-weight: 500;
          }
          .home-content1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text04 {
            font-size: 40px;
            max-width: 535px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 56px;
          }
          .home-explore {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            cursor: pointer;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            transition: 0.3s;
            align-items: flex-start;
            border-width: 0px;
            flex-direction: column;
            padding-bottom: 4px;
            border-bottom-width: 1px;
          }
          .home-explore:hover {
            color: rgba(0, 0, 0, 0.5);
            border-color: rgba(0, 0, 0, 0.3);
          }
          .home-section1 {
            gap: var(--dl-space-space-sixunits);
            width: 100%;
            display: flex;
            z-index: 10;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            flex-direction: row;
            justify-content: center;
          }
          .home-content2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-heading2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text05 {
            font-size: 40px;
            max-width: 535px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 56px;
          }
          .home-text06 {
            font-size: 18px;
            max-width: 535px;
            font-family: Poppins;
            line-height: 27px;
          }
          .home-content3 {
            gap: var(--dl-space-space-threeunits);
            display: none;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-points {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-get-started {
            display: flex;
            transition: 0.3s;
            align-items: flex-start;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: center;
            text-decoration: none;
            background-color: #ade2df;
          }
          .home-get-started:hover {
            background-color: rgba(173, 226, 223, 0.5);
          }
          .home-sign-up {
            font-style: normal;
            font-weight: 500;
          }
          .home-image1 {
            width: 370px;
            height: 600px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            background-size: cover;
            justify-content: flex-end;
            background-image: url('/LandingPage/vr1.jpeg');
            background-repeat: no-repeat;
            background-position: center;
          }
          .home-section2 {
            gap: var(--dl-space-space-sixunits);
            width: 100%;
            display: flex;
            z-index: 10;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            flex-direction: row;
            justify-content: center;
          }
          .home-image2 {
            width: 400px;
            height: 540px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            background-size: contain;
            justify-content: flex-end;
            background-image: url('/LandingPage/vr3.jpeg');
            background-repeat: no-repeat;
            background-position: center;
          }
          .home-image-highlight1 {
            top: 0px;
            right: 0px;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: center;
            background-color: #375ee0;
          }
          .home-text07 {
            color: rgb(193, 255, 252);
            width: 100%;
            max-width: 90px;
            font-style: normal;
            text-align: center;
            font-family: Poppins;
            font-weight: 500;
          }
          .home-content4 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text10 {
            font-size: 40px;
            max-width: 535px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 56px;
          }
          .home-explore1 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            cursor: pointer;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            transition: 0.3s;
            align-items: flex-start;
            border-width: 0px;
            flex-direction: column;
            padding-bottom: 4px;
            border-bottom-width: 1px;
          }
          .home-explore1:hover {
            color: rgba(0, 0, 0, 0.5);
            border-color: rgba(0, 0, 0, 0.3);
          }
          .home-features1 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-start;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 16px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: flex-start;
          }
          .home-header2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-tag {
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: center;
            background-color: #d6f1f0;
          }
          .home-text11 {
            font-style: normal;
            font-weight: 500;
          }
          .home-heading3 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text12 {
            width: 100%;
            font-size: 40px;
            max-width: auto;
            font-style: normal;
            font-weight: 600;
            line-height: 56px;
          }
          .home-feature-list1 {
            gap: var(--dl-space-space-fourunits);
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-faq {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 16px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            background-color: #f3f5fa;
          }
          .home-content5 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
          }
          .home-header3 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-tag1 {
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: center;
            background-color: #d6f1f0;
          }
          .home-text13 {
            font-style: normal;
            font-weight: 500;
          }
          .home-heading4 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text16 {
            width: 100%;
            font-size: 40px;
            max-width: 600px;
            font-style: normal;
            text-align: center;
            font-family: Poppins;
            font-weight: 600;
            line-height: 56px;
          }
          .home-rows {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-column3 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-title1 {
            font-size: 18px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
          }
          .home-description {
            font-family: Poppins;
            line-height: 24px;
          }
          .home-title2 {
            font-size: 18px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
          }
          .home-description1 {
            font-family: Poppins;
            line-height: 24px;
          }
          .home-question2 {
            border-bottom-width: 0px;
          }
          .home-title3 {
            font-size: 18px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
          }
          .home-description2 {
            font-family: Poppins;
            line-height: 24px;
          }
          .home-column4 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-question3 {
            border-right-width: 0px;
          }
          .home-title4 {
            font-size: 18px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
          }
          .home-description3 {
            font-family: Poppins;
            line-height: 24px;
          }
          .home-question4 {
            border-right-width: 0px;
          }
          .home-title5 {
            font-size: 18px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
          }
          .home-description4 {
            font-family: Poppins;
            line-height: 24px;
          }
          .home-question5 {
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-title6 {
            font-size: 18px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
          }
          .home-description5 {
            font-family: Poppins;
            line-height: 24px;
          }
          .home-get-started1 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            background-color: #375ee0;
          }
          .home-content6 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: column;
          }
          .home-heading5 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text23 {
            color: #c1fffc;
            font-size: 64px;
            font-style: normal;
            text-align: center;
            font-family: Poppins;
            font-weight: 600;
          }
          .home-text24 {
            color: #ffffff;
            font-size: 20px;
            text-align: center;
            font-family: Poppins;
            line-height: 30px;
          }
          .home-hero-buttons1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            z-index: 15;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-io-btn1 {
            gap: var(--dl-space-space-halfunit);
            fill: white;
            color: white;
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: center;
            background-color: #000000;
          }
          .home-io-btn1:hover {
            background-color: rgba(0, 0, 0, 0.75);
          }
          .home-apple1 {
            width: 16px;
            height: 20px;
          }
          .home-caption2 {
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
          }
          .home-android-btn {
            gap: var(--dl-space-space-halfunit);
            fill: white;
            color: white;
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: center;
            background-color: #000000;
          }
          .home-android-btn:hover {
            background-color: rgba(0, 0, 0, 0.75);
          }
          .home-android {
            width: 18px;
            height: 20px;
          }
          .home-caption3 {
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
          }
          @media (max-width: 991px) {
            .home-hero {
              flex-direction: column;
            }
            .home-content {
              gap: var(--dl-space-space-unit);
              flex: 0 0 auto;
              padding-top: var(--dl-space-space-unit);
              padding-bottom: 0px;
            }
            .home-title {
              font-size: 50px;
              text-align: left;
              line-height: 58px;
            }
            .home-caption {
              font-size: 16px;
            }
            .home-hero-buttons {
              width: 100%;
            }
            .home-io-btn {
              flex: 1;
            }
            .home-pasted-image {
              width: 200px;
            }
            .home-images {
              left: 0px;
              right: -100px;
              bottom: -325px;
              margin: auto;
            }
            .home-pasted-image1 {
              width: 200px;
            }
            .home-section {
              gap: var(--dl-space-space-oneandhalfunits);
              padding-top: var(--dl-space-space-fourunits);
              flex-direction: column-reverse;
            }
            .home-content1 {
              gap: var(--dl-space-space-unit);
            }
            .home-explore {
              margin-top: var(--dl-space-space-halfunit);
            }
            .home-section1 {
              padding-top: var(--dl-space-space-fourunits);
              border-color: #dbdbdb;
              flex-direction: column;
              border-top-width: 1px;
            }
            .home-content2 {
              gap: var(--dl-space-space-unit);
            }
            .home-content3 {
              gap: var(--dl-space-space-twounits);
            }
            .home-section2 {
              gap: var(--dl-space-space-oneandhalfunits);
              padding-top: var(--dl-space-space-fourunits);
              flex-direction: column-reverse;
            }
            .home-content4 {
              gap: var(--dl-space-space-unit);
            }
            .home-explore1 {
              margin-top: var(--dl-space-space-halfunit);
            }
            .home-get-started1 {
              padding-top: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-content6 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-heading5 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-text23 {
              font-size: 40px;
            }
            .home-text24 {
              font-size: 18px;
            }
          }
          @media (max-width: 767px) {
            .home-title {
              font-size: 40px;
              line-height: 48px;
            }
            .home-caption {
              font-size: 16px;
              line-height: 24px;
            }
            .home-images {
              bottom: -250px;
            }
            .home-features {
              gap: var(--dl-space-space-threeunits);
            }
            .home-header1 {
              gap: var(--dl-space-space-unit);
            }
            .home-text {
              font-size: 32px;
              line-height: 44px;
            }
            .home-feature-list {
              gap: var(--dl-space-space-twounits);
              width: 100%;
              flex-direction: column;
            }
            .home-text04 {
              font-size: 32px;
              line-height: 44px;
            }
            .home-text05 {
              font-size: 32px;
              line-height: 44px;
            }
            .home-text06 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-get-started {
              display: none;
            }
            .home-text10 {
              font-size: 32px;
              line-height: 44px;
            }
            .home-features1 {
              gap: var(--dl-space-space-threeunits);
            }
            .home-header2 {
              gap: var(--dl-space-space-unit);
            }
            .home-text11 {
              font-size: 14px;
            }
            .home-text12 {
              font-size: 32px;
              line-height: 44px;
            }
            .home-feature-list1 {
              gap: var(--dl-space-space-twounits);
              width: 100%;
              flex-direction: column;
            }
            .home-faq {
              width: 100%;
            }
            .home-content5 {
              gap: var(--dl-space-space-twounits);
            }
            .home-text13 {
              font-size: 14px;
            }
            .home-text16 {
              font-size: 32px;
              line-height: 44px;
            }
            .home-rows {
              flex-direction: column;
            }
            .home-title1 {
              font-size: 16px;
            }
            .home-get-started1 {
              display: none;
            }
          }
          @media (max-width: 479px) {
            .home-hero-buttons {
              width: 100%;
              flex-direction: column;
            }
            .home-io-btn {
              width: 100%;
            }
            .home-pasted-image {
              width: 150px;
            }
            .home-images {
              bottom: -300px;
            }
            .home-pasted-image1 {
              width: 150px;
            }
            .home-image {
              width: 100%;
              max-width: 400px;
            }
            .home-image2 {
              width: 100%;
              max-width: 400px;
            }
            .home-hero-buttons1 {
              width: 100%;
              flex-direction: column;
            }
            .home-io-btn1 {
              width: 100%;
            }
            .home-android-btn {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
