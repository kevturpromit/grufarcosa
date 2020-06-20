import React, { Component } from 'react';
import '../../Product.css';
import '../../../Main.css';
import Footer from "../../../Shared/Footer/Footer";
import Header from "../../../Shared/Header/Header";
import wireless from "../../../../assets/USBScanner/wirelessScanner.JPG";
import multiline from "../../../../assets/USBScanner/MultilineScanner.jpg";
import singleline from "../../../../assets/USBScanner/SinglelineScanner.jpg";
import SymbolAgeScanner from "../../../../assets/USBScanner/SymbolAgeScanner.jpg";
import IntermecAgeScanner from "../../../../assets/USBScanner/IntermecWithStand.jpg";

class USBScanner extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="main-container">
                    <h1 className="heading-text">Age Scanners and USB Scanners</h1>
                    <div className="description-text">
                        All the scanners shown here can be used with the AGKSoft Point Of Sale or for the Back Office PC.
                        You simply plug the scanner to your USB port and start scanning.
                    </div>

                    <table className="product-entry-spacing row-centered center-block">
                        <th className="sub-heading-product center-header">Symbol Age Scanner for Verifone Ruby Commander or AGKSoft POS</th>
                        <tr className="center-header">This is a 2D scanner to scan products as well as a driver's license to validate Minimum Age.</tr>
                        <tr className="center-images"><img alt="SymbolAgeScanner" className="product-images image-border" src={SymbolAgeScanner}/></tr>
                    </table>

                    <table className="product-entry-spacing row-centered center-block">
                        <th className="sub-heading-product center-header">Intermec Age Scanner for AGKSoft POS</th>
                        <tr className="center-header">This is a 2D scanner to scan products as well as a driver's license to validate Minimum Age.</tr>
                        <tr className="center-images"><img alt="IntermecAgeScanner" className="product-images image-border" src={IntermecAgeScanner}/></tr>
                    </table>

                    <table className="product-entry-spacing row-centered center-block">
                        <th className="sub-heading-product center-header">Wireless USB Single Line Scanner</th>
                        <tr className="center-header">This is a single line trigger scanner which you must hold and press the trigger to scan.</tr>
                        <tr className="center-images"><img alt="wireless" className="product-images image-border" src={wireless}/></tr>
                    </table>

                    <table className="product-entry-spacing row-centered center-block">
                        <th className="sub-heading-product center-header">Multi Line USB Scanner</th>
                        <tr className="center-header">This is a multi line 1-D omni-directional scanner that will scan multiple lines without having to hold it.</tr>
                        <tr className="center-images"><img alt="multiline" className="product-images image-border" src={multiline}/></tr>
                    </table>

                    <table className="product-entry-spacing row-centered center-block">
                        <th className="sub-heading-product center-header">Single Line USB Scanner</th>
                        <tr className="center-header">This is a single line trigger scanner which you must hold and press the trigger to scan.</tr>
                        <tr className="center-images"><img alt="singleline" className="product-images image-border" src={singleline}/></tr>
                    </table>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default USBScanner;
