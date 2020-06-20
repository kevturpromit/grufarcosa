import React, { Component } from 'react';
import "../Report.css";
import '../../Main.css';
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import figure1 from "../../../assets/CreditCards/figure1.gif";
import figure2 from "../../../assets/CreditCards/figure2.gif";

class ElectronicAcct extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="main-container">
                    <h1 className="heading-text">AGKSoft Credit Card Reports</h1>
                    <div className="description-text">
                        When you download your Shift from the Cash Register, the Credit Card details get posted to the Electronic Credit Cards (Pending) window.
                    </div>
                    <div className="description-text">
                        <div className="description-text">
                            When you receive the Credit Card money, start the Electronic Credit Cards window and enter the Batch Settlement Number in the [Batch #] column and click Save when you finish.                    </div>
                    </div>
                    <table className="report-entry-spacing row-centered center-images">
                        <th className="center-header">Electronic Credit Cards Window</th>
                        <tr className="center-images"><img alt="figure1" className="image-resize image-border" src={figure1}/></tr>
                    </table>
                    <div className="description-text">
                        After settling your Credit Card batches, you may want to look at some reports.
                        Click the Report button to see some reports as shown below.
                    </div>
                    <table className="report-entry-spacing row-centered center-images">
                        <th className="center-header">Electronic Credit Cards Report</th>
                        <tr className="center-images"><img alt="figure2" className="image-resize image-border" src={figure2}/></tr>
                    </table>
                    <div className="description-text last-element">For more info please <a href="\contact"><b>contact us</b></a></div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default ElectronicAcct;
