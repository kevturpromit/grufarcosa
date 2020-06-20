import React, { Component } from 'react';
import "../Report.css";
import '../../Main.css';
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import figure1 from "../../../assets/ShortOver/shortover.gif";
import figure2 from "../../../assets/ShortOver/shortreport.gif";
import figure3 from "../../../assets/ShortOver/FuelRecon.gif";

class ShortOver extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="main-container">
                    <h1 className="heading-text">AGKSoft Short/Over</h1>
                    <div className="description-text">
                        To see the Daily Summary Report, click Daily Summary
                        When you download your shifts from your Cash Register, the Short/Over screen shown below gets automatically populated.
                        You look it over and make sure the Cash & Checks do match.  You click [Close Shift (SAVE)] when you finish
                    </div>


                    <table className="report-entry-spacing row-centered center-images">
                        <th className="center-header">Short/Over Window</th>
                        <tr className="center-images"><img alt="figure1" className="image-resize image-border" src={figure1}/></tr>
                    </table>

                    <div className="description-text">After Closing your Shift, you may want to look at some reports.</div>
                    <u1>
                        <li>Click the Report button to see some reports as shown below.</li>
                    </u1>

                    <table className="report-entry-spacing row-centered center-images">
                        <th className="center-header">Short/Over Report</th>
                        <tr className="center-images"><img alt="figure2" className="image-resize image-border" src={figure2}/></tr>
                        <tr className="center-header description-text">Note that the Report shown above can show every shift, every day, your monthly totals and your grand total for the selected dates.</tr>
                    </table>

                    <div className="description-text">When you receive your Fuel Delivery, you click GAS LOAD.</div>
                    <ul>
                        <li>You will now see the GAS LOAD screen shown below.</li>
                        <li>You enter the Volume and Price for each grade, we calculate the rest.</li>
                        <li>You click Save when you finish.</li>
                        <li>If your vendor provides XML invoices such as the one provided by Shell, you can click "Load Invoice" to load it.</li>
                    </ul>



                    <table className="report-entry-spacing row-centered center-images">
                        <th className="center-header">Fuel Reconciliation</th>
                        <tr className="center-images"><img alt="figure3" className="image-resize image-border" src={figure3}/></tr>
                    </table>

                    <div className="description-text last-element">For more info please <a href="\contact"><b>contact us</b></a></div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default ShortOver;
