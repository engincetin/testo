import React from "react";
import RoadmapSwiperTimeline from "./RoadmapSwiperTimeline";

class Roadmap extends React.Component {
  render() {
    return (
      <section className="section section-home section-roadmap">
        <div className="container">
          <div className="row section-header">
            <div className="col-lg-12 col-10 offset-1 offset-lg-0">
              <h2 className="section-title">ROADMAP</h2>
              <p className="section-paragraph">
                Our vision is to create a sustainable world where global players
                are free to play, earn and live by unlocking the value of their
                in-game assets and Metaverse tokens.
              </p>
            </div>
          </div>
        </div>
        <div className="container d-block d-lg-none">
          <div className="row">
            <div className="col-12">
              <div className="d-block mb-5 pb-4">
                <div
                  id="roadmap-timeline"
                  className="roadmap-timeline"
                  data-fill={25}
                >
                  <div
                    id="roadmap-timeline-fill"
                    className="roadmap-timeline-fill"
                    style={{
                      width: "25%"
                    }}
                  />
                  <div className="roadmap-timeline-sq roadmap-timeline-sq-1" />
                  <div className="roadmap-timeline-sq roadmap-timeline-sq-2" />
                  <div className="roadmap-timeline-sq roadmap-timeline-sq-3" />
                  <div className="roadmap-timeline-sq roadmap-timeline-sq-4" />
                  <div
                    id="roadmap-timeline-cursor"
                    className="roadmap-timeline-cursor"
                    style={{
                      left: "25%"
                    }}
                  />
                  <div
                    id="roadmap-timeline-cursor-dot"
                    className="roadmap-timeline-cursor-dot"
                    style={{
                      left: "25%"
                    }}
                  />
                </div>
                <RoadmapSwiperTimeline></RoadmapSwiperTimeline>
              </div>
            </div>
          </div>
        </div>
        <div className="container d-none d-lg-block">
          <div className="row justify-content-center">
            <div className="col-12">
              <img
                className="mb-5 pb-3"
                src="https://www.shopimia.com/assets/www/boomland.io/202207/media/roadmap-timeline.png?ts=1"
              />
            </div>
            <div className="col-lg-3 col-7">
              <h3 className="roadmap-subtitle mb-3">Q1 & Q2 2022</h3>
              <p className="roadmap-lead mb-3">
                TOKENOMICS
                <br />
                WHITEPAPER
              </p>
              <ul className="roadmap-list mb-5">
                <li>Design Tokenomics</li>
                <li>Launch BoomLand Website</li>
                <li>BoomLand Whitepaper</li>
                <li>Partnership with Polygon</li>
                <li>Smart Contract Audit Start</li>
                <li>Artifacts design</li>
              </ul>
            </div>
            <div className="col-lg-3 col-7">
              <h3 className="roadmap-subtitle mb-3">Q3 2022</h3>
              <p className="roadmap-lead mb-3">
                PLATFORM & HUNTERS
                <br />
                ON-CHAIN SOFT LAUNCH
              </p>
              <ul className="roadmap-list mb-5">
                <li>Additional studios engagement</li>
                <li>Golden ticket sale +WL for GAO 1</li>
                <li>Hunters On Chain Video Teaser</li>
                <li>Twitter campaign kick off + giveaways</li>
                <li>Hunters On-Chain Soft Launch</li>
                <li>BoomLand GAO #1</li>
                <li>Smart Contract Audit Completion</li>
                <li>Polygon SuperNet Deployment</li>
                <li>BoomLand Platform v.1</li>
                <li>$BGEM Token Creation</li>
              </ul>
            </div>
            <div className="col-lg-3 col-7">
              <h3 className="roadmap-subtitle mb-3">Q4 2022</h3>
              <p className="roadmap-lead mb-3">
                PLATFORM & HUNTERS
                <br />
                ON-CHAIN SOFT LAUNCH
              </p>
              <ul className="roadmap-list mb-5">
                <li>Mighty Heroes Whitepaper draft</li>
                <li>Additional studios onboarding</li>
                <li>BoomLand GAO #2</li>
                <li>Marketplaces NFT listing</li>
                <li>BoomLand Platform v.2</li>
              </ul>
            </div>
            <div className="col-lg-3 col-7">
              <h3 className="roadmap-subtitle mb-3">Q1 2023</h3>
              <p className="roadmap-lead mb-3">
                MIGHTY HEROES GUILDS
                <br />& MULTICHAINS
              </p>
              <ul className="roadmap-list mb-5">
                <li>$BOOM Token Sale</li>
                <li>Hunters On-Chain v.1</li>
                <li>BoomLand Platform v.3</li>
                <li>Mighty Heroes Soft Launch</li>
                <li>Archery Club Whitepaper</li>
                <li>BoomLand GAO #3</li>
                <li>BoomLand Guild Events</li>
                <li>MultiChain Integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Roadmap;
