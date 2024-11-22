import React from "react";
import UserNav from "../Common/UserNav";
import Pricing from "../Pricing/Pricing";
import PricingData from "../../data/pricing.json";
import Compare from "../Pricing/Compare";
import AccordionItem from "../Accordion/AccordionItem";

const PlansBilling = () => {
  return (
    <>
      <div className="rbt-main-content mb-0 w-75">
        <div className="rbt-daynamic-page-content center-width">
          <div className="rbt-dashboard-content">
            <UserNav title="Plans & Billing" />
            <div className="content-page pb--50">
              <div className="aiwave-pricing-area wrapper">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <nav className="aiwave-tab">
                        <div
                          className="tab-btn-grp nav nav-tabs text-center justify-content-center col-lg-4"
                          id="nav-tab"
                          role="tablist"
                        >
                          {PricingData &&
                            PricingData.pricing.map((data, index) => (
                              <button
                                className={`col nav-link ${
                                  data.isSelect ? "active" : ""
                                }`}
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
                    isHeading={false}
                    isBadge={true}
                    gap="mt_dec--40"
                  />
                </div>
              </div>
            </div>
            <div className="rbt-sm-separator"></div>

            {/* <Compare subTitle="" title="Detailed Compare" postion="left" /> */}

            <div className="row rainbow-section-gap row--20">
              <div className="col-lg-12">
                <AccordionItem />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlansBilling;
