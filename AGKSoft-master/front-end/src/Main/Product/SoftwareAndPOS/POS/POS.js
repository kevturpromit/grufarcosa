import React, { Component } from 'react';
import '../../Product.css';
import '../../../Main.css';
import './POS.css';
import ProductCarousel from '../../../Shared/ProductCarousel/ProductCarousel';
import Footer from "../../../Shared/Footer/Footer";
import Header from "../../../Shared/Header/Header";
import figure1 from "../../../../assets/POS/figure1.jpg";
import figure2 from "../../../../assets/POS/POSALL2-Front.jpg";
import figure3 from "../../../../assets/POS/POSALL2-Back.jpg";
import figure4 from "../../../../assets/POS/POSALL2-Side2.jpg";
import figure5 from "../../../../assets/POS/figure2.jpg";
import figure6 from "../../../../assets/POS/figure3.jpg";
import figure7 from "../../../../assets/POS/figure4.jpg";
import figure8 from "../../../../assets/POS/POSALL2-Bottom-Small.jpg";
import figure9 from "../../../../assets/POS/figure5.jpg";
import figure10 from "../../../../assets/POS/figure6.jpg";
import figure11 from "../../../../assets/POS/figure10.gif";
import figure12 from "../../../../assets/POS/figure11.jpg";
const photos = [figure1, figure2, figure3, figure4, figure5, figure6, figure7, figure8, figure9, figure10, figure11, figure12];
const photoCaptions = [
    'Front View Black (Receipt Printer built-in)',
    'Front View White (Receipt Printer built-in)',
    'Back View White (Customer Display/Adds)',    
    'Side View White',
    'Side View Black',
    'Back View Black (Customer Display/Adds)',    
    'Front View Black with Cash Drawer',
    'Bottom View White',
    'Bottom View Black',
    'VeriFone VX805 Pin Pad',
    'POS Interface',
    'POS with Scanner/Scale'
];

class POS extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="main-container">
                    <h1 className="heading-text">AGKSoft Point Of Sale Software (POS)</h1>
                    <div className="description-text">
                        AGKSoft Point Of Sale Software (POS) is for Gas Stations, Convenience Stores (C-Stores), Liquor Stores and most general retail stores.
                        Our POS is easy to use with an intuitive graphical user interface and can be installed on a network and access the system from multiple PCs.</div>
                    <ProductCarousel photos={photos} photoCaptions={photoCaptions}/>

                    <div className="sub-heading-product">FEATURES</div>
                    <ul>
                        <li>Point of Sale (POS) with Scanning and Touch Screen Support</li>
                        <li>Integrated Credit/Debit/Gift Card Processing</li>
                        <li>Portable Scanner Support for Inventory Control</li>
                        <li>Electronic Invoice (EDI)</li>
                        <li>Accounts Payable/Receivable</li>
                        <li>Integrated Labeling and Bar-Code Printing</li>
                        <li>Timecard and Payroll</li>
                        <li>Unlimited Departments, PLUs and UPC-Codes.</li>
                        <li>Inventory Control and Electronic Data Invoice (EDI)</li>
                        <li>Balance Sheet, Net Income and General Ledger</li>
                        <li>Short/Over</li>
                        <li>Expense and Vendor Tracking</li>
                        <li>Garage, Gas and Lottery</li>
                        <li>Traffic, Voids and No-Sale Reports</li>
                        <li>Setup new clients, create new work orders or pay for pending work orders</li>
                    </ul>
                    <div className="sub-heading-product">HARDWARE INCLUDED</div>
                    <ul>
                        <li>Point of Sale Register (Touch Screen + PC)</li>
                        <li>Cash Drawer</li>
                        <li>2nd Monitor as Customer Display</li>
                        <li>USB Receipt Printer</li>
                        <li>USB Scanner + USB or Wireless Mouse + USB or Wireless Keyboard</li>
                        <li>POS Software and Back Office Software all integrated</li>
                    </ul>
                    <div className="description-text last-element">For more info please <a href="\contact">contact us</a></div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default POS;
