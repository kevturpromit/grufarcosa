import React, { Component } from 'react';
import '../../Product.css';
import '../../../Main.css';
import Footer from "../../../Shared/Footer/Footer";
import Header from "../../../Shared/Header/Header";

class BackOffice extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="main-container">
                    <h1 className="heading-text">AGKSoft Gas Station Software 12.x</h1>
                    <div className="sub-header">
                        <a className="dividers-first" href="/gasdesk.html">EXPLORE THE SOFTWARE</a>
                        <a className="dividers" href="/products/software/backOffice/gettingStarted">GETTING STARTED</a>
                        <a className="dividers" href="/stnweb.html">DOCUMENTATION</a>
                    </div>
                    <div className="description-text">
                        Our Gas Station Software is a fully-featured Windows Accounting Software that works either in the back office as <b>BOS (Back Office Software)</b>, in your Garage,
                        as a <b>Point Of Sale</b> or all combinations with support for headquarter consolidation as well as dialing into multi-locations.
                        The software can be installed on a network and it includes many scanning and inventory management features.
                        We’ve been working on this software since 1991 and we have been improving it ever since.
                        Now it is one of the best and easiest to use programs on the market.
                    </div>
                    <div className="description-text">
                        We have built-in all the inventory control features that you need with the best interface to Gilbarco G-Site, Gilbarco Passport,
                        Wayne Plus, Wayne Nucleus or Ruby VeriFone.
                        Using the software will let you track what you Buy and Sell as well as give you the ability to know how many of each item you have now.
                        We have full support for EDI (Electronic Data Invoice) and Portable Data Collectors/Hand Held Terminals.
                    </div>

                    <div className="sub-heading-product">Our (C-Store Software or Gas Station Software) is sold in one of the following ways:</div>
                    <ul>
                        <a href="/products/software/pos"><li><b>AGKSoft All-in-One Point Of Sale Touch Screen System</b></li></a>
                        <a href="/products/software/homeOffice"><li><b>Home Office Software (HOS)</b></li></a>
                        <li>Connected to a Gilbarco G-Site</li>
                        <li>Connected to a Gilbarco Passport</li>
                        <li>Connected to a Ruby VeriFone/Sapphire/Topaz/Site Controller/Commander/RubyCi/Ruby2</li>
                        <li>Connected to a ComData</li>
                        <li>Connected to a Wayne Nucleus/Wayne NAMOS/Beetle POS</li>
                    </ul>

                    <div className="sub-heading-product">Features:</div>
                    <div className="description-text">
                        <ul>
                            <li>Change Product and Gas Prices from your PC, or from your Cash Register</li>
                            <li>Automatically downloads your Sales by Shift or by Day</li>
                            <li>Pulls the following information:</li>
                            <ul>
                                <li>Gas Sales</li>
                                <li>Gas Loads</li>
                                <li>Sales Room</li>
                                <li>Client Charges</li>
                                <li>Paid In/Out</li>
                                <li>Refunds</li>
                                <li>Electronic Credit Cards</li>
                                <li>Coupons</li>
                                <li>Discounts</li>
                            </ul>
                        </ul>
                    </div>

                    <div className="description-text">
                        We have the ability to allow you to change your product prices from the Back-Office
                        as well as upload all your products to the Cash Register in case your cash register
                        ever crashed and needed to be replaced or upgraded.
                    </div>

                    <div className="description-text">
                        As a Gas Station owner, you need to know how much money your Gas Station is making,
                        what your profit is, who your clients are and how much money each client owes,
                        how to increase sales and pool margin, and much more.
                        Our Gas Station Software will help you in many ways. This program is very easy to use,
                        just click on the picture to get what you want.
                    </div>

                    <div className="description-text">
                        Everything you can imagine is included in this Software to operate your Gas Station.
                    </div>

                    <div className="description-text last-element">For more info please <a href="\contact"><b>contact us</b></a></div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default BackOffice;
