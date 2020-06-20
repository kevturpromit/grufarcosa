import React, { Component } from 'react';
import "../Report.css";
import '../../Main.css';
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import figure1 from "../../../assets/NetIncome/Income.gif";

class NetIncome extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="main-container">
                    <h1 className="heading-text">AGKSoft Net Income</h1>
                    <div className="description-text">
                        To see the General Ledger Report, click <a href="/images/GeneralLedger.gif"><b>General Ledger</b></a>
                    </div>


                    <table className="report-entry-spacing row-centered center-images">
                        <th className="center-header">Net Income</th>
                        <tr className="center-images"><img alt="figure1" className="image-resize image-border" src={figure1}/></tr>
                    </table>

                    <div className="description-text last-element">For more info please <a href="\contact"><b>contact us</b></a></div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default NetIncome;
