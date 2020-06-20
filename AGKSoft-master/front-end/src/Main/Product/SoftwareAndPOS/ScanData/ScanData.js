import React, { Component } from 'react';
import '../../Product.css';
import '../../../Main.css';
import Footer from "../../../Shared/Footer/Footer";
import Header from "../../../Shared/Header/Header";

class ScaData extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="main-container">
                    <h1 className="heading-text">AGKSoft Scan Data</h1>
                    <div className="description-text">
                        Scan Data Program is a Free Service for sending your Scan Data to PM USA and RJR.  
                        This program has the potential to increase your store Sales 10% to 25% on average plus you get paid $0.15 per Carton from RJR, $0.15 per roll from US Smokeless and $0.10 per Carton from PM USA.  
                    </div>

                    <div className="description-text">
                        <b>Pre-requisite:</b>
                        The Scan Data Program is offered to you by Altria/PM USA, RJR and USSTC (US Smokeless Tobacco Company).
                    </div>

                    <div className="sub-heading-product">AGKSoft will automatically send the Scan Data for you on a weekly basis for free.</div>
                    <div className="description-text">How does it work?</div>
                    <ul>
                        <li>Altria/PM USA, RJR and USSTC will ask you to create a promotion such as:</li>
                            <ul>
                                <li>Buy 1 Pack and get $0.50 off.</li>    
                                <li>Buy 2 Packs and get $0.80 off.</li>    
                                <li>Buy 3 Packs and get $0.90 off.</li>    
                            </ul>
                        <li>Customer get the discount.</li>
                        <li>AGKSoft Reports the discount by sending the Scan Data to Altria or RJR.</li>
                        <li>Altria or RJR sends you a quarterly check with all the Discounts you gave.</li>
        			</ul>
        
                    <div className="sub-heading-product">Altria/PM USA, RJR and USSTC will also pay you extra incentive.</div>
                    <div className="description-text">Carton and Rolls Payback:</div>
                    <ul>
                        <li>AGKSoft sends the Scan Data automatically for free.</li>
                        <li>RJR pays you $0.15 per Carton of Cigarettes Sold quarterly.</li>
                        <li>Altria/PM USA pays you $0.10 per Carton of Cigarettes Sold quarterly.</li>
                        <li>USSTC pays you $0.15 per Roll Sold quarterly.</li>                        
                    </ul>

                    <div className="sub-heading-product">Altria/PM USA, RJR and USSTC will pay for Loyalty.</div>
                    <div className="description-text">Loyalty Example:</div>
                    <ul>
                        <li>You give a $1.00 coupon off a pack for next time the customer comes in.</li>
                        <li>The customer redeems the coupon the next time they come in.</li>
                        <li>AGKSoft sends the Loyalty and Coupon data to Altria/PM USA or RJR.</li>
                        <li>Altria/PM USA or RJR will pay you back the whole coupon value quarterly.</li>
                    </ul>

                    <div className="sub-heading-product">Sign up for a Scan Data Account with your Altria or RJR Sales Rep.</div>
                    <div className="description-text">Sign up as follows:</div>
                    <ul>
                        <li>Email: SCANDATAHELPDESK@IRIworldwide.com</li>
                        <li>Web: https://www.surveymonkey.com/r/Newscandata</li>
                    </ul>
                </div>
                <Footer/>
            </div>
        );
    }
}
				
export default ScaData;
