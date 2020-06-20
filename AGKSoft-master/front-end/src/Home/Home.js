import React, { Component } from 'react';
import Row from "./Row/Row";
import "./Home.css";
import Introduction from "./Introduction/Introduction";
import Footer from "../Main/Shared/Footer/Footer";
import Header from "../Main/Shared/Header/Header";
import home from "../assets/home.png";
import POS from "../assets/POS.png";
import conversion from "../assets/conversion.png";
import data from "../assets/data.png";
import gilbarco from "../assets/gilbarco.jpg";
import verifone from "../assets/verifone.png";
import comdata from "../assets/comdata.png";
import backoffice from "../assets/backoffice.png";
import wayne from "../assets/wayne.png";
import scandata from "../assets/scandata.png";
import diebold from "../assets/Diebold.JPG";

class Home extends Component {
    render() {
        return(
            <div>
                <Header/>
                <Introduction/>
                <div className="partners-background">
                    <div className="partners row-centered">
                        <a href="https://www.gilbarco.com/us/products/point-sale/passport-c-store-pos-display"><img className="logos" src={gilbarco} alt="gilbarco"/></a>
                        <a href="https://www.verifone.com/petro"><img className="logos" src={verifone} alt="verifone"/></a>
                        <a href="https://www.comdata.com/merchants/SmartDESQ/index"><img className="logos" src={comdata} alt="comdata"/></a>
                        <a href="https://www.wayne.com/"><img className="logos" src={wayne} alt="wayne"/></a>
                        <a href="https://www.dieboldnixdorf.com/en-us"><img className="logos" src={diebold} alt="diebold"/></a>
                    </div>
                </div>
                <div className="home">
                    <Row title="OUR PRODUCTS"/>
                    <div className="solutions">
                        <div className="solution-large">
                            <a href="/products/software/backOffice">
                                <h3>Back Office</h3>
                                <img className="solution-image" src={backoffice} alt="backoffice"/>
                                <p>Our Gas Station Software is a fully-featured Windows Accounting Software that works either in the back office as BOS (Back Office Software), in your Garage, as a Point Of Sale or all combinations with support for headquarter consolidation as well as dialing into multi-locations.</p>
                            </a>
                        </div>
                        <div className="solution-large">
                            <a href="/products/software/pos">
                                <h3>POS</h3>
                                <img className="solution-image" src={POS} alt="POS"/>
                                <p>For C-Stores, Liquor Stores, Grocery Stores, General Stores, Hardware Stores, Flower shops or any store that requires scanning.</p>
                            </a>
                        </div>
                        <div className="solution-large">
                            <a href="/products/software/homeOffice">
                                <h3>Home Office</h3>
                                <img className="solution-image" src={home} alt="home"/>
                                <p>The AGKSoft Home Office allows data from multiple back office locations to be consolidated into one centralized location.</p>
                            </a>
                        </div>
                        <div className="solution-large">
                            <a href="/products/software/conversionTool">
                                <h3>Conversion Tool</h3>
                                <img className="solution-image" src={conversion} alt="conversion"/>
                                <p>The AGKSoft Conversion Tool Software can be used to convert registers such as a Gilbarco G-Site, Ruby VeriFone/ Sapphire/ Topaz/ Commander/ Ruby 2, Gilbarco Passport, Dresser Wayne Nucleus, ComData Smart Solutions POS and the AGKSoft POS System all using the same software.</p>
                            </a>
                        </div>
                        <div className="solution-large">
                            <a href="/products/software/dataEntry">
                                <h3>Data Entry</h3>
                                <img className="solution-image" src={data} alt="data"/>
                                <p>Services for maintaining your price book or your complete Sales Download, Shift Balancing, Accounting and Inventory.</p>
                            </a>
                        </div>
                        <div className="solution-large">
                            <a href="/scandata.html">
                                <h3>Scan Data</h3>
                                <img className="solution-image" src={scandata} alt="scandata"/>
                                <p>Benefits of Scan Data and how to sign up for Altria/PM USA and RJR.</p>
                            </a>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Home;
