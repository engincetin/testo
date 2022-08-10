import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container text-center">
          <div className="row">
            <div className="col-12">
              <nav className="footer-nav">
                <a href="#">
                  <i className="fab fa-discord" />
                </a>
                <a href="#" className="position-relative">
                  <i className="fab fa-telegram" />
                  <span className="supscript">chat</span>
                </a>
                <a href="#" className="position-relative">
                  <i className="fab fa-telegram" />
                  <span className="supscript">news</span>
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
                <a href="#">
                  <i className="fab fa-linkedin" />
                </a>
                <a href="#">
                  <i className="fab fa-medium" />
                </a>
              </nav>
              <p className="footer-copyright">
                Copyright © 2022 The BoomBit Group. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
