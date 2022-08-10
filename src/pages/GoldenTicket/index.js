import React from "react";
import { GoldenTicketProvider } from "../../context";
import Header from "../../components/Header";
import "./goldenticket.css";
import "./custom.css";
import { useGoldenTicket } from "../../context";
// import Image from "./goldenticket.png";

export function GoldenTicket() {

    const goldenTicket = useGoldenTicket();

    const mint = () => {
        goldenTicket?.mintGoldenTicket();
    }

    return (
        <GoldenTicketProvider>
            <Header />
            <div className="section section-home section-welcome">
                <div className="grid">
                    <div className="description">
                        <div className="description-first-text">
                            Get A <span style={{color: "#ECAD2C"}}>Golden Ticket</span> Into
                        </div>
                        <div className="description-title">BOOMLAND</div>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 20,
                            margin: "30px 20px",
                        }}>
                            <p>Golden Tickets help you get a guaranteed whitelist and a headstart in <strong>BoomLand.</strong></p>
                            <p>Purchase your chest without FOMO, Gas Wars or a worry.</p>
                            <p>Get your Golden Ticket now and become on of <strong>the Founders of BoomLand!</strong></p>
                        </div>
                    </div>
                    <div className="image" style={{backgroundImage: "url(/goldenticket.png)", backgroundSize: 'cover'}}>
                        {/* <img src={Image} width="100%" height="100%" /> */}
                    </div>
                    <div className="time">
                        <div className="time-title">Time limited hurry up</div>
                        <div className="hours">
                            <div className="hour">
                                <span className="time-time-title">01</span>
                                <span className="desc">days</span>
                            </div>
                            <div className="seperator">
                                :
                            </div>
                            <div className="hour">
                                <span className="time-time-title">23</span>
                                <span className="desc">hours</span>
                            </div>
                            <div className="seperator">
                                :
                            </div>
                            <div className="hour">
                                <span className="time-time-title">30</span>
                                <span className="desc">minutes</span>
                            </div>
                        </div>
                        <div className="buttons">
                            <button className="primary" onClick={mint}>Buy Ticket</button>
                            <span>or</span>
                            <button className="sec">Earn for free</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Welcome /> */}
        </GoldenTicketProvider>
    );
}