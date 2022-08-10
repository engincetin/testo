import React from "react";
import SwiperCore, {Navigation, Pagination, Scrollbar, A11y, Lazy} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css/bundle';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Lazy]);

class AboutSwiperMeet extends React.Component {
  render() {
    return (
			<Swiper
				spaceBetween={30}
				slidesPerView={1}
				centeredSlides={true}
				autoHeight={true}
				pagination={{ clickable: true }}
			>
				<SwiperSlide>
					<div className="container-fluid">
						<div className="row justify-content-center align-items-center my-5 pt-5">
							<div className="col-xl-4 col-lg-5 col-12 order-2 order-lg-1">
								<p className="about-subtitle-counter">01</p>
								<h3 className="about-subtitle my-3">
									SEAMLESS ENTRY TO WEB3 WORLD
								</h3>
								<p className="about-paragraph">
									With ease of onboarding and great first time user
									experience, BoomLand aims to onboard Web2 players without a
									friction.
								</p>
							</div>
							<div className="col-xl-4 col-lg-5 offset-lg-1 col-8 order-1 order-lg-2 mb-3 mb-lg-0">
								<img
									className="about-img"
									src="https://www.shopimia.com/assets/www/boomland.io/202207/media/about-1.png"
								/>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="container-fluid">
						<div className="row justify-content-center align-items-center my-5 pt-5">
							<div className="col-xl-4 col-lg-5 col-8 mb-3 mb-lg-0">
								<img
									className="about-img"
									src="https://www.shopimia.com/assets/www/boomland.io/202207/media/about-2.png"
								/>
							</div>
							<div className="col-xl-4 col-lg-5 offset-lg-1 col-12">
								<p className="about-subtitle-counter">02</p>
								<h3 className="about-subtitle my-3">
									FOCUS ON INTEROPERABILITY
								</h3>
								<p className="about-paragraph">
									An initial series of 6 games with inter-operable assets.
									Play with the same NFT in several places!
								</p>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="container-fluid">
						<div className="row justify-content-center align-items-center my-5 pt-5">
							<div className="col-xl-4 col-lg-5 col-12 order-2 order-lg-1">
								<p className="about-subtitle-counter">03</p>
								<h3 className="about-subtitle my-3">
									For Players, By Players:
									<br />
									<small>Decentralized Publishing Organization (DPO)</small>
								</h3>
								<p className="about-paragraph">
									BoomLanders decide what BoomLand publishes or produces. With
									DPO, only the games that the players wish to play are
									published.
								</p>
							</div>
							<div className="col-xl-4 col-lg-5 offset-lg-1 col-8 order-1 order-lg-2 mb-3 mb-lg-0">
								<img
									className="about-img"
									src="https://www.shopimia.com/assets/www/boomland.io/202207/media/about-3.png?ts=1"
								/>
							</div>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
    );
  }
}


export default AboutSwiperMeet;
/*
var swiper1 = new Swiper('.swiper-meet', {
	centeredSlides: true,
	slidesPerView: 1,
	spaceBetween: 30,
	autoHeight: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});

*/
