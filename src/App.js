import React from "react";
import Navigation from "./Navigation";
import MastHead from "./MastHead";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import PortfolioModal1 from "./PortfolioModal1";
import PortfolioModalTwo from "./PortfolioModalTwo";
import PortfolioModal3 from "./PortfolioModal3";
import PortfolioModal4 from "./PortfolioModal4";
import PortfolioModal5 from "./PortfolioModal5";
import PortfolioModal6 from "./PortfolioModal6";
 

const App = ()=>{
    return(
        <div>
        <Navigation title="My Portfolio"/>
        <MastHead heading="Radhakrishnan" subheading="Web developer - MERN STACK "/>
        <Portfolio/>
        <About lead1="I have been a web developer from the past 3 years working on different requirements" lead2="MERN stack is my favourite flavour to work upon in web development"/>
        <Contact/>
        <Footer/>
        <PortfolioModal1/> 
        <PortfolioModalTwo/>
        <PortfolioModal3/>
        <PortfolioModal4/>
        <PortfolioModal5/>
        <PortfolioModal6/>
</div>      

    );
};

export default App;