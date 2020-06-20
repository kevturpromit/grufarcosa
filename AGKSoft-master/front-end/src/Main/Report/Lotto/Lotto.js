import React, { Component } from 'react';
import "../Report.css";
import '../../Main.css';
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import figure1 from "../../../assets/Lottery/figure1.gif";
import figure2 from "../../../assets/Lottery/figure2.gif";
import figure3 from "../../../assets/Lottery/figure3.gif";
import figure4 from "../../../assets/Lottery/figure4.gif";
import figure5 from "../../../assets/Lottery/figure5.gif";

class Lotto extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="main-container">
                    <h1 className="heading-text">AGKSoft Lottery Tickets Reports</h1>

                    <table className="report-entry-spacing row-centered center-images">
                        <th className="center-header">Add Lottery Books Windowt</th>
                        <tr className="center-images"><img alt="figure1" className="image-resize image-border" src={figure1}/></tr>
                    </table>

                    <table className="report-entry-spacing row-centered center-images">
                        <th className="center-header">Lottery Scratch Tickets Window</th>
                        <tr className="center-images"><img alt="figure1" className="image-resize image-border" src={figure2}/></tr>
                    </table>

                    <table className="report-entry-spacing row-centered center-images">
                        <th className="center-header">Lottery Settlement Window</th>
                        <tr className="center-images"><img alt="figure1" className="image-resize image-border" src={figure3}/></tr>
                    </table>

                    <table className="report-entry-spacing row-centered center-images">
                        <th className="center-header">Lottery Machine Window</th>
                        <tr className="center-images"><img alt="figure1" className="image-resize image-border" src={figure4}/></tr>
                    </table>

                    <table className="report-entry-spacing row-centered center-images">
                        <th className="center-header">Lottery Sales Report</th>
                        <tr className="center-images"><img alt="figure1" className="image-resize image-border" src={figure5}/></tr>
                    </table>

                    <div className="description-text last-element">For more info please <a href="\contact"><b>contact us</b></a></div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Lotto;
