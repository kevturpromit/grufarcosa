import React, { Component } from 'react';
import "../Report.css";
import '../../Main.css';
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import figure1 from "../../../assets/CarWash/figure1.gif";
import figure2 from "../../../assets/CarWash/figure2.gif";

class CarWash extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="main-container">
                    <h1 className="heading-text">AGKSoft Car Wash Reports</h1>
                    <div className="description-text">
                        If you are connected to your Cash Register, the Car Wash window shown below gets automatically populated.

                        If you are not connected, you need to enter the enter the data manually.

                        Click Save when you finish.
                    </div>
                    <table className="report-entry-spacing row-centered center-images">
                        <th className="center-header">Car Wash Window</th>
                        <tr className="center-images"><img alt="figure1" className="image-resize image-border" src={figure1}/></tr>
                    </table>

                    <div className="description-text">
                        After saving your data, you may want to look at some reports.

                        Click the Report button to see some reports as shown below.
                    </div>
                    <table className="report-entry-spacing row-centered center-images">
                        <th className="center-header">Car Wash Report</th>
                        <tr className="center-images"><img alt="figure1" className="image-resize image-border" src={figure2}/></tr>
                    </table>

                    <div className="description-text last-element">For more info please <a href="\contact"><b>contact us</b></a></div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default CarWash;
