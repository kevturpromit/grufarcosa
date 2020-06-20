import React, { Component } from 'react';
import '../../Product.css';
import '../../../Main.css';
import Footer from "../../../Shared/Footer/Footer";
import Header from "../../../Shared/Header/Header";
import scanner1 from "../../../../assets/RegisterScanner/scanner1.jpg";
import scanner2 from "../../../../assets/RegisterScanner/scanner2.gif";
import scanner3 from "../../../../assets/RegisterScanner/scanner3.jpg";
class RegisterScanner extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="main-container">
                    <h1 className="heading-text">AGKSoft Register Scanners</h1>
                    <div className="description-text">The Honeywell/Metrologic Orbit Scanner can be used with any Point Of Sale system.
                        The (RS232 style) can be used for the VeriFone Ruby, Gilbarco G-Site/Passport and Dresser Wayne Nucleus.
                        The  (USB style) can be used for the AGKSoft Point Of Sale system.
                    </div>
                    <div className="description-text">This scanner scans automatically using a "20 scan line Omni directional pattern".</div>

                    <table className="product-entry-spacing row-centered center-block">
                        <th className="center-header"></th>
                        <tr className="center-images">
                            <div>
                                <img alt="scanner3" src={scanner3}/>
                                <img alt="scanner2" src={scanner2}/>
                                <img alt="scanner1" src={scanner1}/>
                            </div>
                        </tr>
                    </table>

                    <h4 className="sub-heading-product">SCANNER BENEFITS</h4>
                    <div className="description-text">Cashier guessing</div>
                    <ul>
                        <li>Cashiers sometimes have to guess prices, taxes and departments</li>
                        <li>Detailed cash register receipts could improve customer confidence</li>
                        <li>More accurate, consistent prices could result in better customer service and improved margins</li>
                    </ul>
                    <div className="description-text">Training time</div>
                    <ul>
                        <li>Complex tax laws and increasing product variety make the cashier's job harder. A well maintained price file could reduce demands on cashiers</li>
                        <li>Faster, easier cashier training means new and part time employees could be productive sooner</li>
                    </ul>
                    <div className="description-text">Inventory turns</div>
                    <ul>
                        <li>Track item sales with Stock Sales Analysis report</li>
                        <li>Identify fast and slow moving items</li>
                        <li>Identify items with "zero sales"</li>
                    </ul>
                    <div className="description-text">Product shrink</div>
                    <ul>
                        <li>Compare items sold (Stock Sales Analysis report) to items missing or reordered</li>
                    </ul>
                    <div className="description-text">Vendor cooperation</div>
                    <ul>
                        <li>Reduce vendor "product creep" by spotting unauthorized products prices</li>
                        <li>Improve customer service with higher scan rates</li>
                    </ul>


                    <div className="sub-heading-product">Before you install</div>
                    <ul>
                        <li>Which counter top scanner to purchase</li>
                        <li>How many departments to use</li>
                        <li>If you change Departments, anticipate any accounting implications</li>
                        <li>How you will ring up items that do not have bar codes</li>
                        <li>How you will ring up items with bar codes that won't read</li>
                        <li>Which Price Groups and PLUs to set-up</li>
                        <li>How and when to train your employees</li>
                        <li>If vendor check-in procedures need to change</li>
                        <li>If any product substitutions will be accepted from vendors</li>
                        <li>Your "Scanning Accuracy Policy"</li>
                        <li>Whether to use priced shelf labels or to price individual item</li>
                        <li>Enter new items into your Back Office Software and send them to your Cash Register before they are placed on shelves</li>
                    </ul>

                    <div className="sub-heading-product">Training Preparation</div>
                    <div className="description-text">If needed, re-learn these Cash Register skills:</div>
                    <ul>
                        <li>Add items; delete items, change item prices</li>
                        <li>Add Price Groups, change Departments, and assign tax rates</li>
                        <li>Set-up item specials and multi-pack sales</li>
                    </ul>
                    <div className="description-text">Teach cashiers how you want to handle sales exceptions</div>
                    <ul>
                        <li>Singles vs. 6 packs of the same item</li>
                        <li>Manual UPC sales</li>
                        <li>PLU usage</li>
                    </ul>
                    <div className="sub-heading-product">Before you install</div>

                </div>
                <Footer/>
            </div>
        );
    }
}

export default RegisterScanner;
