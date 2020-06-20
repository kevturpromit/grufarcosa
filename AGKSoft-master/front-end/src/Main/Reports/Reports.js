import React, { Component } from 'react';
import "./Reports.css";
import "../Main.css";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import register from "../../assets/register.png";
import vendor from "../../assets/vender.png";
import gasPump from "../../assets/gas-pump.png";
import shortOver from "../../assets/shortOver.jpg";
import netIncome from "../../assets/net-income.png";
import balanceSheet from "../../assets/balance.png";
import clientAccounts from "../../assets/clientAccount.png";
import creditCards from "../../assets/creditCard.png";
import lotto from "../../assets/lotto.png";
import checking from "../../assets/checking.png";
import electronicAccounts from "../../assets/electronicAccount.png";
import inventory from "../../assets/inventory.png";
import payroll from "../../assets/payroll.png";
import expenses from "../../assets/expenses.png";
import workOrders from "../../assets/workOrder.png";
import garage from "../../assets/garage.png";
import carWash from "../../assets/carWash.png";
import POS from "../../assets/POS.png";

class Reports extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="main-container">
                    <div className="reports-heading row-centered">Reports</div>
                    <div className="reports">
                        <div className="reports-entry">
                            <a href="/reports/gasLoad">
                                <img className="reports-image" src={gasPump} alt="Scale With Confidence"/>
                                <h4>Gas Load, Gas Sale & Tank Monitoring</h4>
                            </a>
                        </div>

                        <div className="reports-entry">
                            <a href="/reports/salesRoom">
                                <img className="reports-image" src={register} alt="Scale With Confidence"/>
                                <h4>Sales Room & Point Of Sale</h4>
                            </a>
                        </div>

                        <div className="reports-entry">
                            <a href="/reports/edi">
                                <img className="reports-image" src={vendor} alt="Scale With Confidence"/>
                                <h4>Vendors & Electronic Invoice (EDI)</h4>
                            </a>
                        </div>

                        <div className="reports-entry">
                            <a href="/reports/shortOver">
                                <img className="reports-image" src={shortOver} alt="Scale With Confidence"/>
                                <h4>Short/Over (Daily-Books)</h4>
                            </a>
                        </div>

                        <div className="reports-entry">
                            <a href="/reports/netIncome">
                                <img className="reports-image" src={netIncome} alt="Scale With Confidence"/>
                                <h4>Net Income & General Ledger</h4>
                            </a>
                        </div>

                        <div className="reports-entry">
                            <a href="/reports/balanceSheet">
                                <img className="reports-image" src={balanceSheet} alt="Scale With Confidence"/>
                                <h4>Balance Sheet</h4>
                            </a>
                        </div>

                        <div className="reports-entry">
                            <a href="/reports/clientAcct">
                                <img className="reports-image" src={clientAccounts} alt="Scale With Confidence"/>
                                <h4>Client Accounts & Invoices</h4>
                            </a>
                        </div>

                        <div className="reports-entry">
                            <a href="/reports/electronicCC">
                                <img className="reports-image" src={creditCards} alt="Scale With Confidence"/>
                                <h4>Electronic Credit Cards</h4>
                            </a>
                        </div>

                        <div className="reports-entry">
                            <a href="/reports/lotto">
                                <img className="reports-image" src={lotto} alt="Scale With Confidence"/>
                                <h4>Lottery Tickets & Lottery Machine</h4>
                            </a>
                        </div>

                        <div className="reports-entry">
                            <a href="/reports/checkingAcct">
                                <img className="reports-image" src={checking} alt="Scale With Confidence"/>
                                <h4>Checking Accounts & QIF</h4>
                            </a>
                        </div>

                        <div className="reports-entry">
                            <a href="/reports/electronicAcct">
                                <img className="reports-image" src={electronicAccounts} alt="Scale With Confidence"/>
                                <h4>Electronic Accounts & QIF</h4>
                            </a>
                        </div>

                        <div className="reports-entry">
                            <a href="/reports/inventory">
                                <img className="reports-image" src={inventory} alt="Scale With Confidence"/>
                                <h4>Inventory & Purchase Orders</h4>
                            </a>
                        </div>
                        <div className="reports-entry">
                            <a href="/reports/payroll">
                                <img className="reports-image" src={payroll} alt="Scale With Confidence"/>
                                <h4>Payroll, 941 & Timecard</h4>
                            </a>
                        </div>


                        <div className="reports-entry">
                            <a href="/reports/expenses">
                                <img className="reports-image" src={expenses} alt="Scale With Confidence"/>
                                <h4>Expenses</h4>
                            </a>
                        </div>
                        <div className="reports-entry">
                            <a href="/reports/carWash">
                                <img className="reports-image" src={carWash} alt="Scale With Confidence"/>
                                <h4>Car Wash</h4>
                            </a>
                        </div>
                        <div className="reports-entry">
                            <a href="/reports/workOrders">
                                <img className="reports-image" src={workOrders} alt="Scale With Confidence"/>
                                <h4>Work Orders & Garage Inventory</h4>
                            </a>
                        </div>
                        <div className="reports-entry">
                            <a href="/reports/garageInventory">
                                <img className="reports-image" src={garage} alt="Scale With Confidence"/>
                                <h4>Garage Inventory</h4>
                            </a>
                        </div>
                        <div className="reports-entry">
                            <a href="/reports/POS">
                                <img className="reports-image" src={POS} alt="Scale With Confidence"/>
                                <h4>Point Of Sale (POS) All-in-One</h4>
                            </a>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>

        );
    }
}

export default Reports;
