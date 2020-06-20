import React, { Component } from 'react';
import '../../../Product.css';
import '../../../../Main.css';
import Footer from "../../../../Shared/Footer/Footer";
import Header from "../../../../Shared/Header/Header";

class GettingStarted extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="main-container">
                    <h1 className="heading-text">AGKSoft Getting Started</h1>
                    <div className="sub-header">The following is a quick overview of how you would do your book keeping:</div>

                    <div className="description-text">If you have a Gilbarco G-Site or Passport, a Dresser Wayne Plus, a Wayne Nucleus or a Ruby VeriFone System, you do the following:</div>
                    <ul>
                        <li>Start the Cash Register Interface and click on Sales Down Load, Verify and Update Sales and you will see all your Sales figures as well as Gas Sale and Gas Load and much more will be entered automatically into the Software.</li>
                        <li>There is also an unattended mode to run the Cash Register Interface automatically.  This gives you the ability to go away on vacation, come back a week or two weeks later and see that all your shifts have been automatically downloaded and saved. All you would have to do is the Short/Over for every shift that was saved.</li>
                        <li>See the Common Steps below...</li>
                    </ul>
                    <div className="description-text">If you don't have Gilbarco G-Site or Passport, a Dresser Wayne Plus, a Wayne Nucleus or a Ruby VeriFone System, you do the following:</div>
                    <ul>
                        <li>Enter your Sales figures and whatever you sold in your showroom</li>
                        <li>Enter your Gas Sale Gallon figures in the Gas Sale form.</li>
                        <li>When you buy Gas, start the Gas Load form and enter the number of Gallons and type of gas you bought. (Note that we do support Gas Blending.)</li>
                        <li>If you accept credit cards, start the Electronic Credit form and enter the relevant credit card info.</li>
                        <li>See the Common Steps below...</li>
                    </ul>

                    <div className="description-text">Common Steps are the following:</div>
                    <div className="last-element">
                        <ul>
                            <li>When a Vendor shows up at your station with an Invoice, start the Vendor form and enter the Invoice. We do have the ability to load an Electronic Data Invoice (EDI) file.</li>
                            <li>If you have a Garage and someone shows up for an Oil Change, start the Work Order form, enter the client's name, phone #, and address. Then choose "Oil Change" under the "Problem" field and print a copy for your client and Save the Work Order for future lookup.</li>
                            <li>Lottery Sales are easy to track using our Scratch Ticket forms as well as our support for Lottery Machines and Lottery Settlement.</li>
                            <li>If you have a Car Wash, start our Car Wash form and enter the # of cars that you washed.</li>
                            <li>When you go to the Bank to make a Deposit, you would need to open up the Checking Account form and make a deposit or simply download a Quicken Interchange Format (QIF) file and let us automatically load it.</li>
                            <li>At the end of the day, there is nothing like the peace of mind in knowing if you are Short or Over in the Cash Register.  You can check using our Short/Over form and Close the Shift.  Once the shift is closed, you can still Re-Open it and make changes.</li>
                            <li>If you are eager to know how much money you made in January of this year, simply start the Net Income window and select "January".</li>
                            <li>If you use QuickBooks, you can export all your daily books records into QuickBooks.</li>
                        </ul>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default GettingStarted;