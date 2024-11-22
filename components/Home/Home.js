"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Sal from "sal.js";

import PricingData from "../../data/pricing.json";

import SplitImg from "../../public/images/split/split-6.png";
import SplitLogo from "../../public/images/split/logo.png";
import bannerImg from "../../public/images/bg/slider-main-image.png";
import shapeOne from "../../public/images/bg/icon-shape/icon-shape-one.png";
import shapeTwo from "../../public/images/bg/icon-shape/icon-shape-two.png";
import shapeThree from "../../public/images/bg/icon-shape/icon-shape-three.png";
import shapeFour from "../../public/images/bg/icon-shape/icon-shape-four.png";
import bgShape from "../../public/images/bg/split-bg-shape.png";
import bgShapeOne from "../../public/images/bg/bg-shape-four.png";
import bgShapeTwo from "../../public/images/bg/bg-shape-five.png";
import bgShapeThree from "../../public/images/bg/bg-shape-two.png";

import BrandList from "../Brands/BrandList";
import TabStyleOne from "../TabStyles/TabStyle-One";
import ServiceStyleOne from "../Services/ServiceStyle-One";
import AdvanceTab from "../TabStyles/AdvanceTab";
import CtaOne from "../CallToActions/Cta-One";
import Pricing from "../Pricing/Pricing";
import ServiceTwo from "../Services/Service-Two";
import Testimonial from "../Testimonials/Testimonial";
import BrandTwo from "../Brands/Brand-Two";
import CtaTwo from "../CallToActions/Cta-Two";

const Home = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    Sal();

    const intervalId = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % 12);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div
        className="slider-area slider-style-1 variation-default slider-bg-image bg-banner1 slider-bg-shape"
        data-black-overlay="1"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="inner mt--140">
                <h1 className="title text-center display-one">
                  Discover the Potential of
                  <br />
                  <span className="header-caption w-100 text-center">
                    <span className="cd-headline rotate-1 w-100 text-center">
                      <span className="cd-words-wrapper w-100 text-center ">
                        <b
                          className={
                            visibleIndex === 0
                              ? "is-visible theme-gradient"
                              : "is-hidden theme-gradient"
                          }
                        >
                          Image generator
                        </b>
                        <b
                          className={
                            visibleIndex === 1
                              ? "is-visible theme-gradient"
                              : "is-hidden theme-gradient"
                          }
                        >
                          Chat Assistants
                        </b>
                        <b
                          className={
                            visibleIndex === 2
                              ? "is-visible theme-gradient"
                              : "is-hidden theme-gradient"
                          }
                        >
                          Replace background
                        </b>
                        <b
                          className={
                            visibleIndex === 3
                              ? "is-visible theme-gradient"
                              : "is-hidden theme-gradient"
                          }
                        >
                          Remove background
                        </b>
                        <b
                          className={
                            visibleIndex === 4
                              ? "is-visible theme-gradient"
                              : "is-hidden theme-gradient"
                          }
                        >
                          Text to speech
                        </b>
                        <b
                          className={
                            visibleIndex === 5
                              ? "is-visible theme-gradient"
                              : "is-hidden theme-gradient"
                          }
                        >
                          Speech to text
                        </b>
                        <b
                          className={
                            visibleIndex === 6
                              ? "is-visible theme-gradient"
                              : "is-hidden theme-gradient"
                          }
                        >
                          Graphic editor
                        </b>
                        <b
                          className={
                            visibleIndex === 7
                              ? "is-visible theme-gradient"
                              : "is-hidden theme-gradient"
                          }
                        >
                          Clean up
                        </b>
                        <b
                          className={
                            visibleIndex === 8
                              ? "is-visible theme-gradient"
                              : "is-hidden theme-gradient"
                          }
                        >
                          Upscaler
                        </b>
                        <b
                          className={
                            visibleIndex === 9
                              ? "is-visible theme-gradient"
                              : "is-hidden theme-gradient"
                          }
                        >
                          QR Code Generator
                        </b>
                        <b
                          className={
                            visibleIndex === 10
                              ? "is-visible theme-gradient"
                              : "is-hidden theme-gradient"
                          }
                        >
                          Image Search Engine
                        </b>
                        <b
                          className={
                            visibleIndex === 11
                              ? "is-visible theme-gradient"
                              : "is-hidden theme-gradient"
                          }
                        >
                          Component Library
                        </b>
                      </span>
                    </span>
                  </span>
                  {/* AI Hack */}
                </h1>
                <p className="description w-100 text-center">
                  Unleash the AI potential of MidyAI Design. Use AI tools to
                  empower your work
                </p>
                {/* <div className="form-group"> */}
                {/* <textarea
                    name="text"
                    id="slider-text-area"
                    cols="30"
                    rows="2"
                    placeholder="Enter a prompt, for example: a fundraising deck to a mobile finance app called Intuitive"
                  ></textarea> */}
                {/* <Link className="btn-default " href="/text-generator">
                  Start with AI
                </Link> */}
                <a
                  className="btn-default "
                  href="/text-generator"
                  target="_blank"
                >
                  Start with AI
                </a>
                {/* </div> */}
                <div className="inner-shape">
                  <Image
                    src={shapeOne}
                    width={100}
                    height={95}
                    alt="Icon Shape"
                    className="iconshape iconshape-one"
                  />
                  <Image
                    src={shapeTwo}
                    width={60}
                    height={57}
                    alt="Icon Shape"
                    className="iconshape iconshape-two"
                  />
                  <Image
                    src={shapeThree}
                    width={42}
                    height={31}
                    alt="Icon Shape"
                    className="iconshape iconshape-three"
                  />
                  <Image
                    src={shapeFour}
                    width={100}
                    height={95}
                    alt="Icon Shape"
                    className="iconshape iconshape-four"
                  />
                </div>
              </div>
            </div>
            {/* <div className="col-lg-11 col-xl-11 justify-content-center">
              <div className="slider-frame">
                <Image
                  className="slider-image-effect"
                  src={bannerImg}
                  width={1055}
                  height={898}
                  alt="Banner Images"
                />
              </div>
            </div> */}
          </div>
        </div>

        <div className="bg-shape">
          <Image
            className="bg-shape-one"
            width={640}
            height={949}
            src={bgShapeOne}
            alt="Bg Shape"
          />
          <Image
            className="bg-shape-two"
            src={bgShapeTwo}
            width={626}
            height={1004}
            alt="Bg Shape"
          />
        </div>
      </div>

      <div className="rainbow-brand-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title rating-title text-center sal-animate"
                data-sal="slide-up"
                data-sal-duration="700"
                data-sal-delay="100"
              >
                <p className="b1 mb--0 small-title">
                  Trusted by +500 productive companies
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 mt--10">
              <BrandList />
            </div>
          </div>
        </div>
      </div>

      <div className="rainbow-service-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center pb--60"
                data-sal="slide-up"
                data-sal-duration="700"
                data-sal-delay="100"
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">
                    MidyAI UNLOCKS THE POTENTIAL ai
                  </span>
                </h4>
                <h2 className="title mb--0">
                  Generative AI made for <br /> creators.
                </h2>
              </div>
            </div>
          </div>
          <TabStyleOne />
        </div>
      </div>

      <div className="rainbow-service-area rainbow-section-gap rainbow-section-gapBottom-big">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-left"
                data-sal="slide-up"
                data-sal-duration="400"
                data-sal-delay="150"
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">Chat Assistants</span>
                </h4>
                <h2 className="title mb--60">
                  Chat Smarter, Not <br /> Harder with
                </h2>
              </div>
            </div>
          </div>
        </div>
        <ServiceStyleOne />
      </div>

      <div className="rainbow-advance-tab-area aiwave-bg-gradient rainbow-section-gap-big">
        <div className="container">
          <div className="html-tabs" data-tabs="true">
            <AdvanceTab />
          </div>
        </div>
        <div className="bg-shape">
          <Image src={bgShape} width={630} height={879} alt="Bg Shape" />
        </div>
      </div>

      <div className="rainbow-collobration-area rainbow-section-gap-big">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration="700"
                data-sal-delay="100"
              >
                <h4 className="subtitle ">
                  <span className="theme-gradient">AI Collaboration</span>
                </h4>
                <h2 className="title mb--20">All tools within one</h2>
                <Link
                  className="btn-default btn-large color-blacked"
                  href="/contact"
                >
                  Try It Now{" "}
                  <i className="fa-sharp fa-light fa-arrow-right ml--5"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 mt--60">
              <div className="collabration-image-section">
                <Image
                  src={SplitImg}
                  width={1305}
                  height={712}
                  alt="collabration-image"
                />
                <div className="logo-section">
                  <div className="center-logo p-0">
                    <Image
                      src={SplitLogo}
                      width={200}
                      height={200}
                      alt="Small Logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="rainbow-rn-cta">
        <div className="container">
          <CtaOne />
        </div>
      </div> */}

      <div className="aiwave-pricing-area wrapper rainbow-section-gap-big">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration="400"
                data-sal-delay="150"
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">Pricing</span>
                </h4>
                <h2 className="title w-600 mb--40">
                  Pricing plans for everyone
                </h2>
              </div>

              <nav className="aiwave-tab">
                <div
                  className="tab-btn-grp nav nav-tabs text-center justify-content-center"
                  id="nav-tab"
                  role="tablist"
                >
                  {PricingData &&
                    PricingData.pricing.map((data, index) => (
                      <button
                        className={`nav-link ${data.isSelect ? "active" : ""}`}
                        id={`${data.priceId}-tab`}
                        data-bs-toggle="tab"
                        data-bs-target={`#${data.priceId}`}
                        type="button"
                        role="tab"
                        aria-controls={data.priceId}
                        aria-selected="false"
                        key={index}
                      >
                        {data.priceType}{" "}
                        {data.discount ? (
                          <span className="rainbow-badge-card badge-border">
                            -{data.discount}%
                          </span>
                        ) : (
                          ""
                        )}
                      </button>
                    ))}
                </div>
              </nav>
            </div>
          </div>

          <Pricing
            parentClass="col-xl-4 col-lg-6 col-md-6 col-12 mt--40"
            start={0}
            end={3}
            isBadge={true}
            gap="mt_dec--40"
          />
        </div>
      </div>

      <div className="aiwave-service-area rainbow-section-gap">
        <div className="container">
          <div className="row row--15 service-wrapper">
            <ServiceTwo />
          </div>
        </div>
      </div>

      {/* <div className="rainbow-testimonial-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-left"
                data-sal="slide-up"
                data-sal-duration="400"
                data-sal-delay="150"
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">Assisting individuals</span>
                </h4>
                <h2 className="title mb--60">The opinions of the community</h2>
              </div>
            </div>
          </div>
        </div>
        <Testimonial />
      </div> */}

      <div className="rainbow-brand-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title rating-title text-center sal-animate"
                data-sal="slide-up"
                data-sal-duration="700"
                data-sal-delay="100"
              >
                <div className="rating">
                  <a href="#rating">
                    <i className="fa-sharp fa-solid fa-star"></i>
                  </a>
                  <a href="#rating">
                    <i className="fa-sharp fa-solid fa-star"></i>
                  </a>
                  <a href="#rating">
                    <i className="fa-sharp fa-solid fa-star"></i>
                  </a>
                  <a href="#rating">
                    <i className="fa-sharp fa-solid fa-star"></i>
                  </a>
                  <a href="#rating">
                    <i className="fa-sharp fa-solid fa-star"></i>
                  </a>
                </div>
                <p className="subtitle mb--0">Based on 20,000+ reviews on</p>
              </div>
            </div>
          </div>
          <BrandTwo />
          <div className="bg-shape-left">
            <Image
              src={bgShapeThree}
              width={688}
              height={1055}
              alt="Bg shape"
            />
          </div>
        </div>
      </div>

      {/* <div className="rainbow-cta-area rainbow-section-gap rainbow-section-gapBottom-big">
        <div className="container">
          <CtaTwo />
        </div>
      </div> */}
    </>
  );
};

export default Home;
