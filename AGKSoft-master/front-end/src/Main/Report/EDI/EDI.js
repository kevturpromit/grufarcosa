import React, { Component } from 'react';
import "../Report.css";
import '../../Main.css';
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import figure1 from "../../../assets/Vendors/VendorInvoiceWindowHTH.gif";
import figure2 from "../../../assets/Vendors/VendorInvoiceWindowJpolep.gif";
import figure3 from "../../../assets/Vendors/VendorInvoiceWindowMcLane.gif";
import figure4 from "../../../assets/Vendors/VendorInvoiceWindowCoreMark.gif";
import figure5 from "../../../assets/Vendors/VendorInvoiceWindowPineState.gif";
import figure6 from "../../../assets/Vendors/MyVendorsWindoe.gif";
import figure7 from "../../../assets/Vendors/vendorreport.gif";
import figure8 from "../../../assets/Vendors/VendorOrderWindow.gif";
import figure9 from "../../../assets/Vendors/Report.PNG";

class EDI extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="main-container">
                    <h1 className="heading-text">AGKSoft Vendors</h1>
                    <div>Invoices can be entered in many ways:</div>

                    <ul>
                        <li>You can download an EDI (Electronic Invoice) from your vendor and it can be automatically loaded into the Vendor Invoice window shown below.</li>
                        <li>You can use a Wireless Portable Scanner.</li>
                        <li>You can get a spreadsheet from your vendor, save it as Tab Separated file and Load it directly into the Vendor Invoice window.  We will prompt you to map each column.</li>
                        <li>You can enter Invoices manually using the UPC-Codes or Vendor Item #.</li>
                    </ul>

                    <div className="description-text">Here's a list of some of the EDI Vendors we have been working with:</div>
                    <table className="vendors-table">
                        <col width="200"/>
                        <col width="200"/>
                        <col width="200"/>
                        <tr>
                            <td>Albert Guarnieri & Co.	Amcon Distributing</td>
                            <td>Garber</td>
                            <td>Merchant's Grocery</td>
                        </tr>
                        <tr>
                            <td>Burk</td>
                            <td>Glidewell Distributing</td>
                            <td>Merril</td>
                        </tr>
                        <tr>
                            <td>BWG</td>
                            <td>GSC - Grocery Supply Company</td>
                            <td>Modern Distributors</td>
                        </tr>
                        <tr>
                            <td>Capitol Distributing</td>
                            <td>Hackney	HH Foods</td>
                            <td>MTC Distributing</td>
                        </tr>
                        <tr>
                            <td>CashWa Distributing</td>
                            <td>HiWay</td>
                            <td>Petrey</td>
                        </tr>
                        <tr>
                            <td>CDH	Centry</td>
                            <td>HLA	Imperial</td>
                            <td>Pine State</td>
                        </tr>
                        <tr>
                            <td>Chambers & Owen	CONCO</td>
                            <td>Jackson Wholesale</td>
                            <td>Saint</td>
                        </tr>
                        <tr>
                            <td>Cooper Booth</td>
                            <td>JPolep</td>
                            <td>SAS	SLEDD</td>
                        </tr>
                        <tr>
                            <td>Core Mark</td>
                            <td>JT Daven Port</td>
                            <td>SouthCo	Stewart</td>
                        </tr>
                        <tr>
                            <td>Doug</td>
                            <td>Klein</td>
                            <td>Thomas & Howard</td>
                        </tr>
                        <tr>
                            <td>E B Brown</td>
                            <td>Layman Candy Company</td>
                            <td>Topicz</td>
                        </tr>
                        <tr>
                            <td>Farner Bocken</td>
                            <td>Liberty USA	Lyons</td>
                            <td>Twin City Wholesale</td>
                        </tr>
                        <tr>
                            <td>Finkle</td>
                            <td>McLane</td>
                            <td>Wease Distributing</td>
                        </tr>
                        <tr>
                            <td>FinTech</td>
                            <td>MCT Wholesale</td>
                            <td>Zuma & Sons.</td>
                        </tr>
                    </table>
                    <table className="report-entry-spacing row-centered center-images">
                        <th className="center-header">Vendor Invoice Window (HT&H Hackney)</th>
                        <tr className="center-images"><img alt="figure1" className="image-resize image-border" src={figure1}/></tr>
                    </table>


                    <table className="report-entry-spacing row-centered center-images">
                        <th className="center-header">Vendor Invoice Window (Jpolep)</th>
                        <tr className="center-images"><img alt="figure2" className="image-resize image-border" src={figure2}/></tr>
                    </table>


                    <table className="report-entry-spacing row-centered center-images">
                        <th className="center-header">Vendor Invoice Window (McLane)</th>
                        <tr className="center-images"><img alt="figure3" className="image-resize image-border" src={figure3}/></tr>
                    </table>


                    <table className="report-entry-spacing row-centered center-images">
                        <th className="center-header">Vendor Invoice Window (CoreMark)</th>
                        <tr className="center-images"><img alt="figure4" className="image-resize image-border" src={figure4}/></tr>
                    </table>


                    <table className="report-entry-spacing row-centered center-images">
                        <th className="center-header">Vendor Invoice Window (PineState)</th>
                        <tr className="center-images"><img alt="figure5" className="image-resize image-border" src={figure5}/></tr>
                    </table>

                    <div className="description-text">When you load an Electronic Invoice, you will see the Vendor Invoice Window shown above as well as the following log:</div>

                    <table className="report-entry-spacing row-centered center-images">
                        <tr className="center-images"><img alt="figure5" className="image-resize image-border" src={figure9}/></tr>
                    </table>

                    <div className="description-text">To see what you owe each vendor, start the "My Vendors" window as shown below:</div>
                    <table className="report-entry-spacing row-centered center-images">
                        <th className="center-header">My Vendors Window</th>
                        <tr className="center-images"><img alt="figure6" className="image-resize image-border" src={figure6}/></tr>
                    </table>

                    <div className="description-text">To see a report of all your vendor charges, click the "Report" button.</div>
                    <table className="report-entry-spacing row-centered center-images">
                        <th className="center-header">Vendors Report</th>
                        <tr className="center-images"><img alt="figure7" className="image-resize image-border" src={figure7}/></tr>
                    </table>

                    <div className="description-text">To place your Purchase Orders, start the Inventory window and click "Vendor Order".</div>
                    <table className="report-entry-spacing row-centered center-images">
                        <th className="center-header">Vendor Order Window</th>
                        <tr className="center-images"><img alt="figure8" className="image-resize image-border" src={figure8}/></tr>
                    </table>

                    <div className="description-text last-element">For more info please <a href="\contact"><b>contact us</b></a></div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default EDI;
