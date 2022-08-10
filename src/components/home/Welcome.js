import React from "react";

class Welcome extends React.Component {
  render() {
    return (
      <section className="section section-home section-welcome">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-12 order-2 order-lg-1">
              <h2 className="welcome-heading mb-2">OUR VISION</h2>
              <p className="welcome-title mb-3">
                Bringing Fun to
                <br />
                "Play and Earn"
              </p>
              <p className="welcome-paragraph mb-4">
                BoomLand is an incredible Blockchain Gaming Platform delivering
                a new gaming experience.
              </p>
              <div className="welcome-actions">
                <a href="#" className="btn welcome-btn-demo">
                  Try Demo
                </a>
                <a href="#" className="btn welcome-btn-white-paper">
                  White Paper
                </a>
              </div>
            </div>
            <div className="col-lg-5 col-8 offset-lg-0 offset-2 mb-5 mb-lg-0 order-1 order-lg-2">
              <img
                className="welcome-img"
                src="https://www.shopimia.com/assets/www/boomland.io/202207/media/welcome-hero.png"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Welcome;
