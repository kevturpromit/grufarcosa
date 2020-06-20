import React, { Component } from 'react';
import "../Report.css";
import '../../Main.css';
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import figure1 from "../../../assets/Inventory/figure1.gif";
import figure2 from "../../../assets/Inventory/figure2.gif";
import figure3 from "../../../assets/Inventory/figure3.gif";
import figure4 from "../../../assets/Inventory/figure4.gif";
import figure5 from "../../../assets/Inventory/figure5.gif";
import figure6 from "../../../assets/Inventory/figure6.gif";

class Inventory extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="main-container">
                    <h1 className="heading-text">AGKSoft Inventory Reports</h1>
                    <div className="description-text">
                        The Inventory Window is used to manually change the inventory for a product.
                    </div>
                    <table className="report-entry-spacing row-centered center-images">
                        <th className="center-header">Inventory Window</th>
                        <tr className="center-images"><img alt="figure1" className="image-resize image-border" src={figure1}/></tr>
                    </table>
                    <div className="description-text">
                        The Quick Inventory Window is used when you want to see the Inventory by Carton or Pack and limit the inventory to any selected date range as well as to any single department or all departments..
                    </div>
                    <table className="report-entry-spacing row-centered center-images">
                        <th className="center-header">Quick Inventory Window</th>
                        <tr className="center-images"><img alt="figure2" className="image-resize image-border" src={figure2}/></tr>
                    </table>
                    <div className="description-text">
                        The Inventory Report by Department is summarized (Single Page) report showing the inventory for each department.
                    </div>
                    <table className="report-entry-spacing row-centered center-images">
                        <th className="center-header">Inventory Report by Department</th>
                        <tr className="center-images"><img alt="figure3" className="image-resize image-border" src={figure3}/></tr>
                    </table>
                    <div className="description-text">
                        The Inventory Report by UPC-Code is a very long report showing the inventory for each product.
                    </div>
                    <table className="report-entry-spacing row-centered center-images">
                        <th className="center-header">Inventory Report by UPC-Code</th>
                        <tr className="center-images"><img alt="figure4" className="image-resize image-border" src={figure4}/></tr>
                    </table>
                    <div className="description-text">
                        You can generate Purchase Orders as shown below.  The Purchase Order can be generated, reviewed and then sent to your vendor.
                    </div>
                    <table className="report-entry-spacing row-centered center-images">
                        <th className="center-header">Vendor Order Window</th>
                        <tr className="center-images"><img alt="figure5" className="image-resize image-border" src={figure5}/></tr>
                    </table>
                    <div className="description-text">
                        The generated Purchase Orders shown below can be modified and saved prior to sending it to your vendor.
                    </div>
                    <table className="report-entry-spacing row-centered center-images">
                        <th className="center-header">Purchase Order Window</th>
                        <tr className="center-images"><img alt="figure6" className="image-resize image-border" src={figure6}/></tr>
                    </table>
                    <div className="description-text last-element">For more info please <a href="\contact"><b>contact us</b></a></div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Inventory;
