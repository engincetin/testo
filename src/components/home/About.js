import React from "react";
import AboutSwiperMeet from "./AboutSwiperMeet";

class About extends React.Component {
  render() {
    return (
      <section className="section section-home section-about">
        <div className="container">
          <div className="row section-header">
            <div className="col-lg-12 col-10 offset-1 offset-lg-0">
              <h2 className="section-title">MEET BOOMLAND</h2>
              <p className="section-paragraph">
                Our vision is to create a fresh Web 3.0 Community for players by
                players with its own Marketplace and Play And Earn ecosystem
                that is accessible for all. In BoomLand's Metaverse, players
                will connect directly with game developers and with one another
                and help steer the course for the future of the Platform. Fun
                Blockchain games are finally here! 🤟⚡️.
              </p>
            </div>
          </div>
        </div>
        <div className="container d-block d-lg-none">
          <div className="row">
            <div className="col-12">
              <AboutSwiperMeet></AboutSwiperMeet>
            </div>
          </div>
        </div>
        <div className="container d-none d-lg-block">
          <div className="row justify-content-center align-items-center my-5 py-5">
            <div className="col-xl-4 col-lg-5 col-12 order-2 order-lg-1">
              <p className="about-subtitle-counter">01</p>
              <h3 className="about-subtitle my-3">
                SEAMLESS ENTRY TO WEB3 WORLD
              </h3>
              <p className="about-paragraph">
                With ease of onboarding and great first time user experience,
                BoomLand aims to onboard Web2 players without a friction.
              </p>
            </div>
            <div className="col-xl-4 col-lg-5 offset-lg-1 col-8 order-1 order-lg-2 mb-3 mb-lg-0">
              <img
                className="about-img"
                src="https://www.shopimia.com/assets/www/boomland.io/202207/media/about-1.png"
              />
            </div>
          </div>
          <div className="row justify-content-center align-items-center my-5 py-5">
            <div className="col-xl-4 col-lg-5 col-8 mb-3 mb-lg-0">
              <img
                className="about-img"
                src="https://www.shopimia.com/assets/www/boomland.io/202207/media/about-2.png"
              />
            </div>
            <div className="col-xl-4 col-lg-5 offset-lg-1 col-12">
              <p className="about-subtitle-counter">02</p>
              <h3 className="about-subtitle my-3">FOCUS ON INTEROPERABILITY</h3>
              <p className="about-paragraph">
                An initial series of 6 games with inter-operable assets. Play
                with the same NFT in several places!
              </p>
            </div>
          </div>
          <div className="row justify-content-center align-items-center my-5 py-5">
            <div className="col-xl-4 col-lg-5 col-12 order-2 order-lg-1">
              <p className="about-subtitle-counter">03</p>
              <h3 className="about-subtitle my-3">
                For Players, By Players:
                <br />
                <small>Decentralized Publishing Organization (DPO)</small>
              </h3>
              <p className="about-paragraph">
                BoomLanders decide what BoomLand publishes or produces. With
                DPO, only the games that the players wish to play are published.
              </p>
            </div>
            <div className="col-xl-4 col-lg-5 offset-lg-1 col-8 order-1 order-lg-2 mb-3 mb-lg-0">
              <img
                className="about-img"
                src="https://www.shopimia.com/assets/www/boomland.io/202207/media/about-3.png"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
