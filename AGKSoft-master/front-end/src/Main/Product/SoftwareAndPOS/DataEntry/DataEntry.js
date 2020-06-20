import React, { Component } from 'react';
import '../../Product.css';
import '../../../Main.css';
import Footer from "../../../Shared/Footer/Footer";
import Header from "../../../Shared/Header/Header";

class DataEntry extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="main-container">
                    <h1 className="heading-text">AGKSoft Data Entry</h1>
                    <div className="description-text">
                        AGKSoft provides services for maintaining your price book or your complete Sales Download, Shift Balancing, Accounting and Inventory.
                        AGKSoft will provide a 24/7 email, a fax number and a phone number dedicated for Data Entry.
                    </div>
                    <div className="description-text"><b>Pre-requisite:</b>You must be on the AGKSoft Support and Update plans to qualify for this service.</div>

                    <div className="sub-heading-product">Basic Service ($199/month)</div>
                    <div className="description-text">You can email, fax or call us with the price change you want and we will make sure the change takes place and the change is uploaded to your register.</div>
                    <ul>
                        <li>Pricebook Management</li>
                        <li>Daily Short/Over or End of Shift</li>
                        <li>Gas Load Invoices Process</li>
                        <li>Vendor Invoices Process (EDI, PDF)</li>
                        <li>Electronic Credit Cards Settlement</li>
                        <li>Inventory/invoices through PDA</li>
                    </ul>

                    <div className="sub-heading-product">Standard Service ($299/month)</div>
                    <div className="description-text">Includes the [Basic Service] plus the following:.</div>
                    <ul>
                        <li>Fuel Sale and Reconcilation</li>
                        <li>Expenses and Assets tracking.</li>
                        <li>Lottery Paid and Lottery Settlements</li>
                        <li>Maintaining Client Accounts.</li>                        
                    </ul>

                    <div className="sub-heading-product">Full Data Entry Service ($395/month)</div>
                    <div className="description-text">Includes the [Standard Service] plus the following:</div>
                    <ul>                        
                        <li>Salesroom and Inventory Control</li>
                        <li>Multiple Checking Accounts, Electronic and Cash Accounts handling</li>                        
                        <li>Balance Sheet, General Ledger and Net Income</li>
                        <li>Price book Import/Export for multiple locations</li>
                        <li>Consolidate multiple locations into the Home Office</li>                        
                    </ul>

                    <div className="description-text last-element">For more info please <a href="\contact">contact us</a></div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default DataEntry;
