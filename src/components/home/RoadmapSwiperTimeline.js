import React from "react";
import SwiperCore, {Navigation, Pagination, Scrollbar, A11y, Lazy} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css/bundle';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Lazy]);

class RoadmapSwiperTimeline extends React.Component {
  render() {
    return (
			<Swiper
				spaceBetween={30}
				slidesPerView={1}
				centeredSlides={true}
				autoHeight={true}
				pagination={{ clickable: true }}
				onSlideChange={(data) => {
					var $index = data.realIndex;
					var $timeline = document.getElementById('roadmap-timeline');
					var $fill = document.getElementById('roadmap-timeline-fill');
					var $cursor = document.getElementById('roadmap-timeline-cursor');
					var $cursor_dot = document.getElementById('roadmap-timeline-cursor-dot');
					if ($index === 0) {
						$timeline.setAttribute('data-fill', '25');
						$fill.style.width = '25%';
						$cursor.style.left = '25%';
						$cursor_dot.style.left = '25%';
					} else if ($index === 1) {
						$timeline.setAttribute('data-fill', '50');
						$fill.style.width = '50%';
						$cursor.style.left = '50%';
						$cursor_dot.style.left = '50%';
					} else if ($index === 2) {
						$timeline.setAttribute('data-fill', '75');
						$fill.style.width = '75%';
						$cursor.style.left = '75%';
						$cursor_dot.style.left = '75%';
					} else if ($index === 3) {
						$timeline.setAttribute('data-fill', '100');
						$fill.style.width = '100%';
						$cursor.style.left = '100%';
						$cursor_dot.style.left = '100%';
					}
				}}
				className="text-center"
			>
				<SwiperSlide>
            <h3 className="roadmap-subtitle mb-3">Q1 & Q2 2022</h3>
            <p className="roadmap-lead mb-3">TOKENOMICS WHITEPAPER</p>
            <ul className="roadmap-list list-unstyled mb-5">
              <li>Design Tokenomics</li>
              <li>Launch BoomLand Website</li>
              <li>BoomLand Whitepaper</li>
              <li>Partnership with Polygon</li>
              <li>Smart Contract Audit Start</li>
              <li>Artifacts design</li>
            </ul>

						</SwiperSlide>
						<SwiperSlide>
            <h3 className="roadmap-subtitle mb-3">Q3 2022</h3>
            <p className="roadmap-lead mb-3">
              PLATFORM & HUNTERS
              <br />
              ON-CHAIN SOFT LAUNCH
            </p>
            <ul className="roadmap-list list-unstyled mb-5">
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

						</SwiperSlide>
						<SwiperSlide>
            <h3 className="roadmap-subtitle mb-3">Q4 2022</h3>
            <p className="roadmap-lead mb-3">
              PLATFORM & HUNTERS
              <br />
              ON-CHAIN SOFT LAUNCH
            </p>
            <ul className="roadmap-list list-unstyled mb-5">
              <li>Mighty Heroes Whitepaper draft</li>
              <li>Additional studios onboarding</li>
              <li>BoomLand GAO #2</li>
              <li>Marketplaces NFT listing</li>
              <li>BoomLand Platform v.2</li>
            </ul>
						</SwiperSlide>
						<SwiperSlide>
            <h3 className="roadmap-subtitle mb-3">Q1 2023</h3>
            <p className="roadmap-lead mb-3">
              MIGHTY HEROES GUILDS
              <br />& MULTICHAINS
            </p>
            <ul className="roadmap-list list-unstyled mb-5">
              <li>$BOOM Token Sale</li>
              <li>Hunters On-Chain v.1</li>
              <li>BoomLand Platform v.3</li>
              <li>Mighty Heroes Soft Launch</li>
              <li>Archery Club Whitepaper</li>
              <li>BoomLand GAO #3</li>
              <li>BoomLand Guild Events</li>
              <li>MultiChain Integration</li>
            </ul>

						</SwiperSlide>
						</Swiper>
    );
  }
}

export default RoadmapSwiperTimeline;
