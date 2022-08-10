import React, { useEffect, useState } from "react";
import { useAccount } from "../hooks"

function Header() {

    const { connect, isConnected, account } = useAccount();

    return (
      <header id="header" className="header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-5 col-md-4 col-lg-3 col-xl-2">
              <a
                href="#"
                className="header-logo-link d-inline-block py-1 py-lg-0"
              >
                <img
                  className="header-logo-image"
                  src="https://www.shopimia.com/assets/www/boomland.io/202207/media/logo.svg"
                />
              </a>
            </div>
            <div className="col-7 col-md-8 d-lg-none">
              <nav className="header-nav d-flex justify-content-end align-items-center">
                <button
                  id="nav-toggle"
                  className="header-nav-item cta"
                  data-target="nav-header"
                >
                  <i className="fa-solid fa-bars" />
                </button>
              </nav>
            </div>
            <div className="col-12 col-lg-9 col-xl-10">
              <nav
                id="nav-header"
                className="d-none d-lg-flex w-100 justify-content-end align-items-center header-nav"
                data-toggle="false"
              >
                <button
                  id="btn-golden-ticket"
                  className="header-nav-item cta-golden cta"
                  type="button"
                >
                  Get Golden Ticket
                </button>
                <a className="header-nav-item position-relative" href="#games">
                  Games
                </a>
                <a className="header-nav-item position-relative" href="#">
                  Marketplace
                  <span className="soon">soon</span>
                </a>
                <a className="header-nav-item position-relative" href="#">
                  DeFi
                  <span className="soon">soon</span>
                </a>
                <div className="header-nav-separator" />
                <a className="header-nav-item" href="#team">
                  Team
                </a>
                <a className="header-nav-item" href="#community">
                  Community
                </a>
                {!isConnected &&
                <button
                  id="btn-connect-wallet"
                  className="header-nav-item cta-wallet cta"
                  type="button"
                  onClick={connect}
                >
                  Connect Wallet
                </button>
                }
                {isConnected && 
                <button
                  id="btn-connect-wallet"
                  className="header-nav-item cta-wallet cta"
                  type="button"
                  disabled={true}
                >
                 {account.substring(0, 16)}...
                </button>
                }
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  
}

export default Header;
