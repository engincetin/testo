import React from "react";
import GamingSwiperGaming from "./GamingSwiperGaming";

class Gaming extends React.Component {
  render() {
    return (
      <section id="games" className="section section-home section-gaming">
        <div className="container">
          <div className="row section-header">
            <div className="col-lg-12 col-10 offset-1 offset-lg-0">
              <h2 className="section-title">BLOCKCHAIN GAMING</h2>
              <p className="section-paragraph">
                Boomland has partnered with leading gaming studios to secure a
                pipeline of fun and exciting games.
              </p>
            </div>
          </div>
        </div>
        <div className="container d-block d-lg-none">
          <div className="row">
            <div className="col-12 mb-5">
              <GamingSwiperGaming></GamingSwiperGaming>
            </div>
          </div>
        </div>
        <div className="container d-none d-lg-block">
          <div className="row mb-5 pb-5">
            <div className="col-12 col-lg-4 mb-5">
              <img
                className="gaming-img-subtitle mb-2"
                src="https://www.shopimia.com/assets/www/boomland.io/202207/media/gaming-1.png"
              />
              <h3 className="gaming-subtitle mb-2">Hunters On Chain</h3>
              <p className="gaming-paragraph-2">
                The hunt is on! Enter hunting grounds as one of 4 warriors and
                survive in combat against awesome and unique fantasy enemies!
              </p>
            </div>
            <div className="col-12 col-lg-4 mb-5">
              <img
                className="gaming-img-subtitle mb-2"
                src="https://www.shopimia.com/assets/www/boomland.io/202207/media/gaming-2.png"
              />
              <h3 className="gaming-subtitle mb-2">Mighty Chain Heroes</h3>
              <p className="gaming-paragraph-2">
                Collect awesome cards, create your deck and duel other players
                online in exciting 1on1 battles!
              </p>
            </div>
            <div className="col-12 col-lg-4 mb-5">
              <img
                className="gaming-img-subtitle mb-2"
                src="https://www.shopimia.com/assets/www/boomland.io/202207/media/gaming-3.png"
              />
              <h3 className="gaming-subtitle mb-2">Archery On Chain</h3>
              <p className="gaming-paragraph-2">
                A multiplayer archery game with a collectible twist! Become a
                master archer, collect & upgrade awesome equipment.
              </p>
            </div>
          </div>
          <div className="row">
            <img
              className="gaming-img-hero"
              src="https://www.shopimia.com/assets/www/boomland.io/202207/media/gaming-hero.png"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Gaming;
