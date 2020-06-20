import React, { Component } from 'react';
import '../../Product.css';
import '../../../Main.css';
import Footer from "../../../Shared/Footer/Footer";
import Header from "../../../Shared/Header/Header";
import figure1 from "../../../../assets/portable/firgure1.jpg";
import figure2 from "../../../../assets/portable/figure2.jpg";
import figure3 from "../../../../assets/portable/figure3.gif";
import figure4 from "../../../../assets/portable/figure4.gif";
import figure5 from "../../../../assets/portable/figure5.gif";
import figure6 from "../../../../assets/portable/figure6.gif";
import figure7 from "../../../../assets/portable/figure7.gif";
import trigger from "../../../../assets/portable/ppt88trigback.jpg";


class Portable extends Component {
    render() {
        return(
            <div>
                <Header/>
                    <div className="main-container">
                        <h1 className="heading-text">AGKSoft Portable Data Collector</h1>
                        <h4 className="sub-heading-product">To see a list of supported EDI Vendors, <a href="/vendorsreports.html">click here.</a></h4>
                        <div className="description-text">Shown below from left to right is the AGKSoft Inventory Software for the portable, followed by an image of the Portable without a trigger, then with a Trigger and finally an image with the Trigger and Docking Station.</div>
                        <div className="description-text">The portable can be used to create your price book, scan your Inventory or Invoices as well as take your orders if needed.</div>

                        <table className="portable-inline">
                            <th className="portable-table row-centered">AGKSoft Inventory Software</th>
                            <tr className="row-centered"><img alt="portable" className="table-img image-border" src={figure1}/></tr>
                        </table>
                        <table className="portable-inline">
                            <th className="portable-table row-centered">PPT8820 (No Trigger)</th>
                            <tr className="row-centered"><img alt="portable" className="table-img image-border" src={figure2}/></tr>
                        </table>
                        <table className="portable-inline">
                            <th className="portable-table row-centered">PPT8820 (with Trigger)</th>
                            <tr className="row-centered"><img alt="portable" className="table-img image-border" src={figure3}/></tr>
                        </table>
                        <table className="portable-inline">
                            <th className="portable-table row-centered">PPT8820 (with Trigger & Dock)</th>
                            <tr className="row-centered"><img alt="portable" className="table-img image-border" src={figure4}/></tr>
                        </table>

                        <table className="portable-inline">
                            <th className="portable-table row-centered">PPT8820 Trigger</th>
                            <tr className="row-centered"><img alt="trigger" className="table-img image-border" src={trigger}/></tr>
                        </table>


                        <h4 className="sub-heading-product">HOW TO USE</h4>
                        <div className="description-text">Using the Portable Data Collector Interface Window, you can download the current Inventory into your PC.</div>

                        <div className="description-text">There are 4 steps to perform...</div>
                        <ol>
                            <li>Select the Download Type, <b>Inventory</b> or <b>Invoice</b></li>
                            <li>Click <b>"Download"</b> to download the data from your portable.</li>
                            <li>Click <b>"Update"</b> to process the downloaded data.</li>
                            <li>Click <b>"Send To Register"</b> to send all the new items to your Cash Register.</li>
                        </ol>

                        <table className="product-entry-spacing row-centered center-block">
                            <tr className="center-images"><img alt="portable"className="product-images image-border" src={figure5}/></tr>
                        </table>

                        <div className="description-text">If you are scanning a shipment that you received from you vendor, you would do the following:</div>
                        <ol>
                            <li>Select <b>"Invoice"</b> under "Download Type"</li>
                            <li>Click <b>"Download"</b> to download the data from your portable.</li>
                            <li>Click <b>"Update"</b> to see the following Vendor Invoice Window.</li>
                        </ol>

                        <table className="product-entry-spacing row-centered center-block">
                            <tr className="center-images"><img alt="portable" className="product-images image-border" src={figure6}/></tr>
                        </table>

                        <div className="description-text">As you can see, the Vendor Invoice is automatically generated for you.  Make sure it's all OK and your total amount matches and hit "Save".</div>
                        <div className="description-text">Also note the <div className="red-text">"red"</div> lines indicate a price increase and the <div className="blue-text">"blue"</div> lines are price decrease.</div>
                        <div className="description-text">If your Vendor is not able to send you the proper EDI (Electronic Invoice), we can map any spreadsheet file.</div>
                        <div className="description-text">Shown below is the "Vendor Mappings Window" which can map the columns in your spreadsheet to what we need.</div>

                        <table className="product-entry-spacing row-centered center-block">
                            <tr className="center-images"><img alt="portable" className="product-images image-border" src={figure7}/></tr>
                        </table>

                        <div className="sub-heading-product">Portable Videos</div>
                        <ul className="last-element">
                            <li className="link-text"><a href="/demos/PortableSwitch/PortableSwitch.html">How to Scan with the Trigger and Download</a></li>
                            <li className="link-text"><a href="/demos/PortableSetup/PortableSetup.html">How to Setup the Portable</a></li>
                            <li className="link-text"><a href="/Training/Trigger/Trigger.html">How to Remove the Trigger</a></li>
                            <li className="link-text"><a href="/demos/PortableKeysColdstart/PortableKeysColdstart.html">Cold Start With Keys</a></li>
                            <li className="link-text"><a href="/demos/PortableNoKeysColdstart/PortableNoKeysColdstart.html">Cold Start NO Keys</a></li>
                        </ul>
                    </div>
                <Footer/>
            </div>
        );
    }
}

export default Portable;
