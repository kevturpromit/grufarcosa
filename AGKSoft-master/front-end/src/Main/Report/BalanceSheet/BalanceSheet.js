import React, { Component } from 'react';
import "../Report.css";
import '../../Main.css';
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import figure1 from "../../../assets/BalanceSheet/balancesheetreport.gif";

class BalanceSheet extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="main-container">
                    <h1 className="heading-text">AGKSoft Balance Sheet</h1>

                    <table className="report-entry-spacing row-centered center-images">
                        <th className="center-header">Balance Sheet</th>
                        <tr className="center-images"><img alt="figure1" className="image-resize image-border" src={figure1}/></tr>
                    </table>

                    <div className="description-text last-element">For more info please <a href="\contact"><b>contact us</b></a></div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default BalanceSheet;
