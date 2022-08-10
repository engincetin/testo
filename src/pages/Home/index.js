import { Fragment } from "react";
import Header from '../../components/Header';
import Welcome from '../../components/home/Welcome';
import About from '../../components/home/About';
import Gaming from '../../components/home/Gaming';
import Team from '../../components/home/Team';
import Roadmap from '../../components/home/Roadmap';
import Partners from '../../components/home/Partners';
import Boombit from '../../components/home/Boombit';
import Footer from '../../components/home/Footer';



function Home() {
    return (
        <Fragment>
            <Header />
            <Welcome />
            <About />
            <Gaming />
            <Team />
            <Roadmap />
            <Partners />
            <Boombit />
            <Footer />
        </Fragment>
    );
}

export {
    Home
};