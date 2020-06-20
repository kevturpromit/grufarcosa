import React, { Component } from 'react';
import "../Report.css";
import '../../Main.css';
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import figure1 from "../../../assets/SalesRoom/SalesSumByDeptReport.gif";
import figure2 from "../../../assets/SalesRoom/SalesSumByProductReport.gif";

class SalesRoom extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="main-container">
                    <h1 className="heading-text">AGKSoft Sales Room</h1>

                    <table className="report-entry-spacing row-centered center-images">
                        <th className="center-header">Sales Room Summary by Dept. Report</th>
                        <tr className="center-images"><img alt="figure1" className="image-resize image-border" src={figure1}/></tr>
                    </table>


                    <table className="report-entry-spacing row-centered center-images">
                        <th className="center-header">Sales Room Summary by Product Report</th>
                        <tr className="center-images"><img alt="figure2" className="image-resize image-border" src={figure2}/></tr>
                    </table>

                    <div className="description-text last-element">For more info please <a href="\contact"><b>contact us</b></a></div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default SalesRoom;
