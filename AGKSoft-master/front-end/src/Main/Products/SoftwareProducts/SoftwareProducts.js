import React, { Component } from 'react';
import "./SoftwareProducts.css";
import '../../Main.css';
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import home from "../../../assets/home.png";
import POS from "../../../assets/POS.png";
import conversion from "../../../assets/conversion.png";
import data from "../../../assets/data.png";
import scandata from "../../../assets/scandata.png";
import backoffice from "../../../assets/backoffice.png";

class SoftwareProducts extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="main-container">
                    <div className="product-page-heading row-centered">Software</div>

                    <div className="solutions">
                    
                        <div className="product-entry-software">
                            <a href="/products/software/backOffice">
                                <h3>Back Office</h3>
                                <img className="solution-image" src={backoffice} alt=""/>
                                <p>Our Gas Station Software is a fully-featured Windows Accounting Software that works either in the back office as BOS (Back Office Software), in your Garage, as a Point Of Sale or a combination with support for headquarter consolidation as well as dialing into multi-locations.</p>
                            </a>
                        </div>
                        <div className="product-entry-software">
                            <a href="/products/software/pos">
                                <h3>Point Of Sale</h3>
                                <img className="solution-image" src={POS} alt=""/>
                                <p>For C-Stores, Liquor Stores, Grocery Stores, General Stores, Hardware Stores, Flower shops or any store that requires scanning.</p>
                            </a>
                        </div>
                        <div className="product-entry-software">
                            <a href="/products/software/homeOffice">
                                <h3>Home Office</h3>
                                <img className="solution-image" src={home} alt=""/>
                                <p>The AGKSoft Home Office allows data from multiple back office locations to be consolidated into one centralized location.</p>
                            </a>
                        </div>
                        <div className="product-entry-software">
                            <a href="/products/software/conversionTool">
                                <h3>Conversion Tool</h3>
                                <img className="solution-image" src={conversion} alt=""/>
                                <p>The AGKSoft Conversion Tool Software can be used to convert registers such as a Gilbarco G-Site, Ruby VeriFone/Sapphire/Topaz/Commander/Ruby 2, Gilbarco Passport, Dresser Wayne Nucleus, ComData Smart Solutions POS and the AGKSoft POS System all using the same software.</p>
                            </a>
                        </div>
                        <div className="product-entry-software">
                            <a href="/products/software/dataEntry">
                                <h3>Data Entry</h3>
                                <img className="solution-image" src={data} alt=""/>
                                <p>Services for maintaining your price book or your complete Sales Download, Shift Balancing, Accounting and Inventory.</p>
                            </a>
                        </div>
                        <div className="product-entry-software">
                            <a href="/scandata.html">
                                <h3>Scan Data</h3>
                                <img className="solution-image" src={scandata} alt=""/>
                                <p>Services for maintaining your price book or your complete Sales Download, Shift Balancing, Accounting and Inventory.</p>
                            </a>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>

        );
    }
}

export default SoftwareProducts;
