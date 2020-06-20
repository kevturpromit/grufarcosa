import React, { Component } from 'react';
import "../Report.css";
import '../../Main.css';
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import figure1 from "../../../assets/ClientAcct/figure1.gif";
import figure2 from "../../../assets/ClientAcct/figure2.gif";
import figure3 from "../../../assets/ClientAcct/figure3.gif";
import figure4 from "../../../assets/ClientAcct/figure4.gif";

class ClientAccounts extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="main-container">
                    <h1 className="heading-text">AGKSoft Client Accounts Reportst</h1>
                    <div className="description-text">
                        If you are connected to your Cash Register, we can automatically populate the Client Accounts screen with any new local credit / store credit / house charges.
                    </div>
                    <div className="description-text">
                        To see all your clients and the balance they owe, click Client Accounts to see the window shown below and click the Balance column.
                    </div>
                    <div className="description-text">
                        You can select the Client by First Name, Last Name or Company on the left, the charges are shown on the right instantly.
                    </div>
                    <div className="description-text">
                        You can click INVOICE to display the Invoices for the selected client or all clients that owe you money.
                    </div>
                    <table className="report-entry-spacing row-centered center-images">
                        <th className="center-header">Client Accounts Window</th>
                        <tr className="center-images"><img alt="figure1" className="image-resize image-border" src={figure1}/></tr>
                    </table>
                    <div className="description-text">
                        After making your changes in the Client Accounts, you may want to look at some reports.
                        Click the INVOICE button to see the Invoices due as shown below
                    </div>
                    <table className="report-entry-spacing row-centered center-images">
                        <th className="center-header">Invoice Report</th>
                        <tr className="center-images"><img alt="figure2" className="image-resize image-border" src={figure2}/></tr>
                    </table>
                    <div className="description-text">
                        Click the [Report] button and select [Daily Charges Report] to see the report shown below.
                    </div>
                    <table className="report-entry-spacing row-centered center-images">
                        <th className="center-header">Daily Charges Report</th>
                        <tr className="center-images"><img alt="figure3" className="image-resize image-border" src={figure3}/></tr>
                    </table>
                    <div className="description-text">
                        Click the [Report] button and select [Monthly Charges Report] to see the report shown below.
                    </div>
                    <table className="report-entry-spacing row-centered center-images">
                        <th className="center-header">Monthly Charges Report</th>
                        <tr className="center-images"><img alt="figure4" className="image-resize image-border" src={figure4}/></tr>
                    </table>

                    <div className="description-text last-element">For more info please <a href="\contact"><b>contact us</b></a></div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default ClientAccounts;
