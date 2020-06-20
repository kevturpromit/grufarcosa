import React, { Component } from 'react';
import '../../Product.css';
import '../../../Main.css';
import Footer from "../../../Shared/Footer/Footer";
import Header from "../../../Shared/Header/Header";
import barcode1 from "../../../../assets/BarcodePrinter/barcode1.gif";
import barcode2 from "../../../../assets/BarcodePrinter/barcode2.gif";
import barcode3 from "../../../../assets/BarcodePrinter/barcode3.gif";
import barcode4 from "../../../../assets/BarcodePrinter/barcode4.gif";

class BarcodePrinter extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="main-container">
                    <h1 className="heading-text">AGKSoft Barcode Printer</h1>
                    <div className="description-text">Shown below are some barcode samples that you can print.  You can print on [2" X 0.75"]  or  [3.5" X 1.1"] or  [4" X 2.31"] or any other custom size you want</div>
                    <div className="description-text">The portable can be used to create your price book, scan your Inventory or Invoices as well as take your orders if needed.</div>

                    <table className="product-entry-spacing row-centered center-block">
                        <th className="center-header">Figure 1 (4" X 2.31")</th>
                        <tr className="center-images"><img alt='Figure 1 (4" X 2.31")' className="product-images image-border" src={barcode1}/></tr>
                    </table>
                    <table className="product-entry-spacing row-centered center-block">
                        <th className="center-header">Figure 2 (4" X 2.31")</th>
                        <tr className="center-images"><img alt='Figure 2 (4" X 2.31")' className="product-images image-border" src={barcode2}/></tr>
                    </table>
                    <table className="product-entry-spacing row-centered center-block">
                        <th className="center-header">Figure 3 (3.5" X 1.1")</th>
                        <tr className="center-images"><img alt='Figure 3 (3.5" X 1.1")' className="product-images image-border" src={barcode3}/></tr>
                    </table>
                    <table className="product-entry-spacing row-centered center-block">
                        <th className="center-header">Figure 4 (2" X 0.75")</th>
                        <tr className="center-images"><img alt='Figure 4 (2" X 0.75")' className="product-images image-border" src={barcode4}/></tr>
                    </table>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default BarcodePrinter;
