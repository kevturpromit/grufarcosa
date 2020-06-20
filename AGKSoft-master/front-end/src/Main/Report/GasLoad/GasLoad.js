import React, { Component } from 'react';
import "../Report.css";
import '../../Main.css';
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import figure1 from "../../../assets/GasLoad/GasLoad.gif";
import figure2 from "../../../assets/GasLoad/gassale.gif";
import figure3 from "../../../assets/GasLoad/GasSaleReport.gif";
import figure4 from "../../../assets/GasLoad/GasSaleWaterReport.gif";
import figure5 from "../../../assets/GasLoad/GasSaleWaterTotalReport.gif";
import figure6 from "../../../assets/GasLoad/FuelRecon.gif";

class BalanceSheet extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="main-container">
                    <h1 className="heading-text">Gas Load and Gas Sale</h1>
                    <div className="description-text">When you receive your Fuel Delivery, you click GAS LOAD.
                        You will now see the GAS LOAD screen shown below.
                        You enter the Volume and Price for each grade, we calculate the rest.
                        You click Save when you finish.
                        If your vendor provides XML invoices such as the one provided by Shell, you can click "Load Invoice" to load it.
                    </div>
                    <table className="report-entry-spacing row-centered center-images">
                        <th className="center-header">Gas Load Window</th>
                        <tr className="center-images"><img alt="figure1" className="image-resize image-border" src={figure1}/></tr>
                    </table>
                    <ul>
                        <li>If you are connected to your Cash Register, the Gas Sale window shown below gets automatically populated with all the info.</li>
                        <li>If you are not connected, you need to enter the Volume Sold for each grade, we calculate the rest.</li>
                        <li>You click Save when you finish.</li>
                    </ul>
                    <table className="report-entry-spacing row-centered center-images">
                        <th className="center-header">Gas Sale Window</th>
                        <tr className="center-images"><img alt="figure1" className="image-resize image-border" src={figure2}/></tr>
                    </table>
                    <ul>
                        <li>After saving your Gas Sale, you may want to look at some reports.</li>
                        <li>Click the Report button to see some reports as shown below.</li>
                    </ul>
                    <table className="report-entry-spacing row-centered center-images">
                        <th className="center-header">Gas Sale Summary Report</th>
                        <tr className="center-images"><img alt="figure1" className="image-resize image-border" src={figure3}/></tr>
                    </table>
                    <table className="report-entry-spacing row-centered center-images">
                        <th className="center-header">Gas Sale Report (by Grade)</th>
                        <tr className="center-images"><img alt="figure1" className="image-resize image-border" src={figure4}/></tr>
                    </table>
                    <table className="report-entry-spacing row-centered center-images">
                        <th className="center-header">Gas Sale Report (by Grade) - Grand Total Page</th>
                        <tr className="center-images"><img alt="figure1" className="image-resize image-border" src={figure5}/></tr>
                    </table>
                    <table className="report-entry-spacing row-centered center-images">
                        <th className="center-header">Fuel Reconciliation</th>
                        <tr className="center-images"><img alt="figure1" className="image-resize image-border" src={figure6}/></tr>
                    </table>
                    <div className="description-text last-element">For more info please <a href="\contact"><b>contact us</b></a></div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default BalanceSheet;
