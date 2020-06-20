import React, { Component } from 'react';
import "../Report.css";
import '../../Main.css';
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import figure1 from "../../../assets/Garage/figure1.gif";

class GarageInventory extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="main-container">
                    <h1 className="heading-text">AGKSoft Garage Inventory Reports</h1>
                    <div className="description-text">
                        In order to track inventory for the things you buy for the Garage, click Garage Inventory.
                    </div>
                    <div className="description-text">
                        You will now see the screen shown below.
                        Enter the parts you are buying and click Save when you finish.
                    </div>
                    <table className="report-entry-spacing row-centered center-images">
                        <th className="center-header">Garage Inventory Window</th>
                        <tr className="center-images"><img alt="figure1" className="image-resize image-border" src={figure1}/></tr>
                    </table>
                    <div className="description-text">
                        To see what you have in parts, click Report, you will see the screen shown below.
                    </div>
                    <table className="report-entry-spacing row-centered center-images">
                        <th className="center-header">Garage Parts Report</th>
                        <tr className="center-images"><img alt="figure1" className="image-resize image-border" src={figure1}/></tr>
                    </table>
                    <div className="description-text last-element">For more info please <a href="\contact"><b>contact us</b></a></div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default GarageInventory;
