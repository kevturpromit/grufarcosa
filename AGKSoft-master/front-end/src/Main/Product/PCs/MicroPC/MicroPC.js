import React, { Component } from 'react';
import '../../Product.css';
import '../../../Main.css';
import Footer from "../../../Shared/Footer/Footer";
import Header from "../../../Shared/Header/Header";
import figure1 from "../../../../assets/MicroPC/Figure1.gif";
import figure2 from "../../../../assets/MicroPC/figure2.gif";
import figure3 from "../../../../assets/MicroPC/figure3.jpg";


class MicroPC extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="main-container">
                    <h1 className="heading-text">AGKSoft Micro-PC2 (Windows 10)</h1>
                    <div className="description-text">Shown below is the micro-PC AGKSoft offers with SSD is about 6" x 5" in size and the unit boots in about 5 seconds.</div>
                    <table className="product-entry-spacing row-centered center-images">
                        <th className="center-header">Figure 1 (Front)</th>
                        <tr className="center-images"><img alt="figure1" className="product-images image-border" src={figure1}/></tr>
                    </table>

                    <table className="product-entry-spacing row-centered center-images">
                        <th className="center-header">Figure 2 (Back)</th>
                        <tr className="center-images"><img alt="figure2" className="product-images image-border" src={figure2}/>
                        </tr>
                    </table>

                    <table className="product-entry-spacing row-centered center-images">
                        <th className="center-header">Figure 3 (Mounted on the back of a Monitor)</th>
                        <tr className="center-images"><img alt="figure3" className="product-images image-border" src={figure3}/></tr>
                    </table>

                    <div className="sub-heading-product">FEATURES</div>
                    <ul>
                        <li>2 LANs</li>
                        <li>1 WIFI</li>
                        <li>1 Serial Port</li>
                        <li>1 HDMI</li>
                        <li>4 USB Ports (3 USB 2.0, 1 USB 3.0)</li>
                        <li>8-GB Ram</li>
                        <li>Intel Celeron Quad Core 2.42-GHz</li>
                        <li>256GB SSD</li>
                        <li>10w Power Consumption</li>
                    </ul>
                    <div className="description-text last-element">This Micro-PC includes a 1 year warranty (Keyboard/Mouse/Monitor are not included).</div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default MicroPC;
