import React, { Component } from 'react';
import "../Report.css";
import '../../Main.css';
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import figure1 from "../../../assets/WorkOrders/figure1.gif";
import figure2 from "../../../assets/WorkOrders/figure2.gif";
import figure3 from "../../../assets/WorkOrders/figure3.gif";
import figure4 from "../../../assets/WorkOrders/figure4.gif";

class WorkOrder extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="main-container">
                    <h1 className="heading-text">AGKSoft Work Order</h1>
                    <div className="description-text">
                        In order to create a Work Order, click Work Order.

                        You will now see the Work Order screen shown below.

                        You click New to create a new work order.

                        You click Save when you finish.
                    </div>


                    <table className="report-entry-spacing row-centered center-images">
                        <th className="center-header">Work Order Window</th>
                        <tr className="center-images"><img alt="figure1" className="image-resize image-border" src={figure1}/></tr>
                    </table>

                    <div className="description-text">When you print the Work Order, you will see the screen shown below.</div>

                    <table className="report-entry-spacing row-centered center-images">
                        <th className="center-header">Work Order Printout</th>
                        <tr className="center-images"><img alt="figure2" className="image-resize image-border" src={figure2}/></tr>
                    </table>

                    <div className="description-text">You can get many reports for all the Work Orders, a sample report is shown below.</div>

                    <table className="report-entry-spacing row-centered center-images">
                        <th className="center-header">Work Order Report</th>
                        <tr className="center-images"><img alt="figure3" className="image-resize image-border" src={figure3}/></tr>
                    </table>

                    <div className="description-text">
                        You can get a list of Pending Work Orders for one of your Employees or all of them, a sample is shown below.
                    </div>

                    <table className="report-entry-spacing row-centered center-images">
                        <th className="center-header">Pending Work Orders Report</th>
                        <tr className="center-images"><img alt="figure4" className="image-resize image-border" src={figure4}/></tr>
                    </table>

                    <div className="description-text last-element">For more info please <a href="\contact"><b>contact us</b></a></div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default WorkOrder;
