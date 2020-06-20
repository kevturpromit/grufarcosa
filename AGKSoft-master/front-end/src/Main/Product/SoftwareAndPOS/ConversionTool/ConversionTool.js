import React, { Component } from 'react';
import '../../Product.css';
import '../../../Main.css';
import Footer from "../../../Shared/Footer/Footer";
import Header from "../../../Shared/Header/Header";
import figure1 from "../../../../assets/ConversionTool/ConversionFirstTime.gif";
import figure2 from "../../../../assets/ConversionTool/UploadToGsite.gif";

class ConversionTool extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="main-container">
                    <h1 className="heading-text">AGKSoft Conversion Tool</h1>
                    <div className="description-text">The AGKSoft Conversion Tool Software can be used to convert registers such as a Gilbarco G-Site, Ruby VeriFone/Sapphire/Topaz/Commander/Ruby 2, Gilbarco Passport, Dresser Wayne Nucleus, ComData Smart Solutions POS and the AGKSoft POS System all using the same software.</div>
                    <div className="description-text"><a href="/demos/ConversionTool/ConversionTool.html">Click here for a demo</a></div>

                    <div className="description-text">The process is simple and it's done as follows:</div>
                    <div className="sub-heading-product">Selecting the register you want to convert from:</div>
                    <ul>
                        <li>After installing AGKSoft and opening the software you will see the First Time User window.
                            Select the Register you want to convert from and click <b>"Configure"</b></li>
                    </ul>
                    <table className="product-entry-spacing row-centered center-block">
                        <tr className="center-images"><img alt="Figure 1 (Front)" className="pos-images image-border" src={figure1}/></tr>
                    </table>
                    <ul>
                        <li>Click <b>"Test Connection"</b> and then <b>"Diagnostics".</b></li>
                        <li>Open the <b>"Cash Register Interface"</b> and click <b>"Products Download"</b>. After this, you should have all the Departments, PLUs and UPC-Codes.</li>
                    </ul>

                    <div className="sub-heading-product">Selecting the register you want to convert to:</div>
                    <ul>
                        <li>Open the <b>"First Time User"</b> window and select the Register you want to convert to and click <b>"Configure"</b>.</li>
                        <li>Click <b>"Test Connection"</b> and then <b>"Diagnostics".</b></li>
                        <li>Open the <b>"Cash Register Interface"</b> and click <b>"Upload Products to Cash Register"</b></li>
                    </ul>
                    <table className="product-entry-spacing row-centered center-block">
                        <tr className="center-images"><img alt="Figure 2 (Back)" className="pos-images image-border" src={figure2}/></tr>
                    </table>
                    <ul>
                        <li>Select <b>"All Products"</b> and click <b>"Upload"</b>.</li>
                    </ul>

                    <div className="description-text last-element">For more info please <a href="\contact">contact us</a></div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default ConversionTool;
