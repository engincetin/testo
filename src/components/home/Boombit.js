import React from "react";

class Boombit extends React.Component {
  render() {
    return (
      <section id="community" className="section section-home section-boombit">
        <div className="container text-center">
          <div className="row section-header">
            <div className="col-lg-12 col-10 offset-1 offset-lg-0">
              <h2 className="section-title">ABOUT BOOMBIT</h2>
              <p className="section-paragraph">
                The BoomBit group is one of the fastest-growing game studios in
                the world in terms of download numbers.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-lg-3 mb-5">
              <div className="boombit-count boombit-count-1">
                <p className="boombit-count-number">>1B</p>
                <p className="boombit-count-label">Total Downloads</p>
              </div>
            </div>
            <div className="col-6 col-lg-3 mb-5">
              <div className="boombit-count boombit-count-2">
                <p className="boombit-count-number">1M</p>
                <p className="boombit-count-label">Daily Installs</p>
              </div>
            </div>
            <div className="col-6 col-lg-3 mb-5">
              <div className="boombit-count boombit-count-3">
                <p className="boombit-count-number">2.5M</p>
                <p className="boombit-count-label">Daily Active Users</p>
              </div>
            </div>
            <div className="col-6 col-lg-3 mb-5">
              <div className="boombit-count boombit-count-4">
                <p className="boombit-count-number">33M</p>
                <p className="boombit-count-label">Monthly Active Users</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Boombit;
