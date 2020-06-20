import React, { Component } from 'react';
import "../Report.css";
import '../../Main.css';
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import figure1 from "../../../assets/POSreports/figure1.GIF";
import figure2 from "../../../assets/POSreports/figure2.GIF";
import figure3 from "../../../assets/POSreports/figure3.gif";
import figure4 from "../../../assets/POSreports/figure4.gif";

class POSreport extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="main-container">
                    <h1 className="heading-text">AGKSoft Point Of Sale (POS) All-in-One</h1>
                    <table className="report-entry-spacing row-centered center-images">
                        <th className="center-header"> POS Sales Room by Count Report</th>
                        <tr className="center-images"><img alt="figure1" className="image-resize image-border" src={figure1}/></tr>
                    </table>

                    <table className="report-entry-spacing row-centered center-images">
                        <th className="center-header">POS Traffic Report</th>
                        <tr className="center-images"><img alt="figure2" className="image-resize image-border" src={figure2}/></tr>
                    </table>

                    <table className="report-entry-spacing row-centered center-images">
                        <th className="center-header">Sales Room Summary by Dept. Report</th>
                        <tr className="center-images"><img alt="figure3" className="image-resize image-border" src={figure3}/></tr>
                    </table>

                    <table className="report-entry-spacing row-centered center-images">
                        <th className="center-header">Sales Room Summary by Product Report</th>
                        <tr className="center-images"><img alt="figure4" className="image-resize image-border" src={figure4}/></tr>
                    </table>
                    <div className="description-text last-element">For more info please <a href="\contact"><b>contact us</b></a></div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default POSreport;
