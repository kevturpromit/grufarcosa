import React, { Component } from 'react';
import "../Report.css";
import '../../Main.css';
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import figure1 from "../../../assets/Checking/figure1.gif";
import figure2 from "../../../assets/Checking/figure2.gif";

class CheckingAcct extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="main-container">
                    <h1 className="heading-text">AGKSoft Checking Account</h1>
                    <div className="description-text">
                    </div>
                    <div className="description-text"></div>
                    <table className="report-entry-spacing row-centered center-images">
                        <th className="center-header">Checking Account Window</th>
                        <tr className="center-images"><img alt="figure1" className="image-resize image-border" src={figure1}/></tr>
                    </table>

                    <table className="report-entry-spacing row-centered center-images">
                        <th className="center-header">Checking Account Report</th>
                        <tr className="center-images"><img alt="figure2" className="image-resize image-border" src={figure2}/></tr>
                    </table>

                    <div className="description-text last-element">For more info please <a href="\contact"><b>contact us</b></a></div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default CheckingAcct;
