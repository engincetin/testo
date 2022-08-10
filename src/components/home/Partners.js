import React from "react";

class Partners extends React.Component {
  render() {
    return (
      <section className="section section-home section-partners">
        <div className="container">
          <div className="row section-header">
            <div className="col-lg-12 col-10 offset-1 offset-lg-0">
              <h2 className="section-title">CONTRIBUTORS & PARTNERS</h2>
              <p className="section-paragraph">
                Our core contributors represent a wide range of expertise and
                backgrounds from large enterprise and technology start-ups and
                the professional services industry around the world.
              </p>
            </div>
          </div>
          <div className="row justify-content-around">
            <div className="col-lg-3 col-7 mb-4">
              <img
                className="partners-image"
                src="https://www.shopimia.com/assets/www/boomland.io/202207/media/partners-polygon.png"
              />
            </div>
            <div className="col-lg-3 col-7 mb-4">
              <img
                className="partners-image"
                src="https://www.shopimia.com/assets/www/boomland.io/202207/media/partners-sequence.png"
              />
            </div>
            <div className="col-lg-3 col-7 mb-4">
              <img
                className="partners-image"
                src="https://www.shopimia.com/assets/www/boomland.io/202207/media/partners-certik.png"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Partners;
