import React, { Component } from 'react';
import '../../Product.css';
import '../../../Main.css';
import Footer from "../../../Shared/Footer/Footer";
import Header from "../../../Shared/Header/Header";
import figure1 from "../../../../assets/ShuttlePC/AGKShuttleFront.jpg";
import figure2 from "../../../../assets/ShuttlePC/AGKShuttleRear.jpg";

class ShuttlePC extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="main-container">
                    <h1 className="heading-text">AGKSoft Windows 10 Shuttle Slim PC</h1>
                    <div className="description-text">Shown below is the AGKSoft Shuttle Slim PC AGKSoft offers with SSD is about 6" x 6" in size and the unit boots in about 5 seconds.</div>
                    <table className="product-entry-spacing row-centered center-images">
                        <th className="center-header">Figure 1 (Front)</th>
                        <tr className="center-images"><img alt="figure1" className="product-images image-border" src={figure1}/></tr>
                    </table>

                    <table className="product-entry-spacing row-centered center-images">
                        <th className="center-header">Figure 2 (Back)</th>
                        <tr className="center-images"><img alt="figure2" className="product-images image-border" src={figure2}/>
                        </tr>
                    </table>
            
                    <div className="sub-heading-product">FEATURES</div>
                    <ul>
                        <li>Fanless Design - Intel Skylake Celeron 3855U</li>                        
                        <li>Dual Gigabit LAN + Wireless</li>
                        <li>2 Serial Ports</li>
                        <li>1 HDMI + 1 Display Port</li>
                        <li>6 USB Ports (4 USB 2.0, 2 USB 3.0)</li>
                        <li>8-GB Ram</li>                        
                        <li>240GB SSD</li>
                        <li>10w Power Consumption</li>
                        <li>Manufacturer 3-Year Warranty + Free lifetime technical support</li>
                    </ul>
                    <div className="description-text last-element">Note: Keyboard/Mouse/Monitor are not included.</div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default ShuttlePC;
