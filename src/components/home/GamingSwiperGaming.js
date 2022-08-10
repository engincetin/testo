import React from "react";
import SwiperCore, {Navigation, Pagination, Scrollbar, A11y, Lazy} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css/bundle';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Lazy]);

class GamingSwiperGaming extends React.Component {
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
					<img
						className="gaming-img-subtitle mb-2"
						src="https://www.shopimia.com/assets/www/boomland.io/202207/media/gaming-1.png"
					/>
					<h3 className="gaming-subtitle mb-2">Hunters On Chain</h3>
					<p className="gaming-paragraph-2 mb-5">
						The hunt is on! Enter hunting grounds as one of 4 warriors and
						survive in combat against awesome and unique fantasy enemies!
					</p>
				</SwiperSlide>
	      <SwiperSlide>
					<img
						className="gaming-img-subtitle mb-2"
						src="https://www.shopimia.com/assets/www/boomland.io/202207/media/gaming-2.png"
					/>
					<h3 className="gaming-subtitle mb-2">Mighty Chain Heroes</h3>
					<p className="gaming-paragraph-2 bm-5">
						Collect awesome cards, create your deck and duel other players
						online in exciting 1on1 battles!
					</p>
					</SwiperSlide>
	        <SwiperSlide>
						<img
							className="gaming-img-subtitle mb-2"
							src="https://www.shopimia.com/assets/www/boomland.io/202207/media/gaming-3.png"
						/>
						<h3 className="gaming-subtitle mb-2">Archery On Chain</h3>
						<p className="gaming-paragraph-2 mb-5">
							A multiplayer archery game with a collectible twist! Become a
							master archer, collect & upgrade awesome equipment.
						</p>
					</SwiperSlide>
				</Swiper>
    );
  }
}

export default GamingSwiperGaming;
