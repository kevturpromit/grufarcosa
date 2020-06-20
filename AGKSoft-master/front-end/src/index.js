import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home/Home';
import SoftwareProducts from './Main/Products/SoftwareProducts/SoftwareProducts';
import ProductAccessories from './Main/Products/Accessories/Accessories';
import Contact from './Main/Contact/Contact';
import Downloads from './Main/Download/Downloads';
import Support from './Main/Support/Support';
import Reports from './Main/Reports/Reports';
import BalanceSheet from './Main/Report/BalanceSheet/BalanceSheet';
import CarWash from './Main/Report/CarWash/CarWash';
import CheckingAcct from './Main/Report/CheckingAcct/CheckingAcct';
import ClientAcct from './Main/Report/ClientAccounts/ClientAccounts';
import ElectronicAcct from './Main/Report/ElectronicAcct/ElectronicAcct';
import ElectronicCC from './Main/Report/ElectronicCC/ElectronicCC';
import GasLoad from './Main/Report/GasLoad/GasLoad';
import Lotto from './Main/Report/Lotto/Lotto';
import Payroll from './Main/Report/Payroll/Payroll';
import Expenses from './Main/Report/Expenses/Expenses';
import EDI from './Main/Report/EDI/EDI';
import Inventory from './Main/Report/Inventory/Inventory';
import GarageInventory from './Main/Report/GarageInventory/GarageInventory';
import NetIncome from './Main/Report/NetIncome/NetIncome';
import POSReport from './Main/Report/POS/POSreport';
import SalesRoom from './Main/Report/SalesRoom/SalesRoom';
import ShortOver from './Main/Report/ShortOver/ShortOver';
import WorkOrders from './Main/Report/WorkOrders/WorkOrder';
import Portable from './Main/Product/Accessory/Portable/Portable';
import MicroPC from './Main/Product/PCs/MicroPC/MicroPC';
import ShuttlePC from './Main/Product/PCs/ShuttlePC/ShuttlePC';
import USBScanner from './Main/Product/Accessory/USBScanner/USBScanner';
import BarcodePrinter from './Main/Product/Accessory/BarcodePrinter/BarcodePrinter';
import RegisterScanner from './Main/Product/Accessory/RegisterScanner/RegisterScanner';
import POS from './Main/Product/SoftwareAndPOS/POS/POS';
import HomeOffice from './Main/Product/SoftwareAndPOS/HomeOffice/HomeOffice';
import BackOffice from './Main/Product/SoftwareAndPOS/BackOffice/BackOffice';
import GettingStarted from './Main/Product/SoftwareAndPOS/BackOffice/GettingStarted/GettingStarted';
import DataEntry from './Main/Product/SoftwareAndPOS/DataEntry/DataEntry';
import ConversionTool from './Main/Product/SoftwareAndPOS/ConversionTool/ConversionTool';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

ReactDOM.render((
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/products/software" component={SoftwareProducts}/>
            <Route exact path="/products/software/pos" component={POS}/>
            <Route exact path="/products/software/conversionTool" component={ConversionTool}/>
            <Route exact path="/products/software/homeOffice" component={HomeOffice}/>
            <Route exact path="/products/software/backOffice" component={BackOffice}/>
            <Route exact path="/products/software/backOffice/gettingStarted" component={GettingStarted}/>
            <Route exact path="/products/software/dataEntry" component={DataEntry}/>
            <Route exact path="/products/accessories/portable" component={Portable}/>
            <Route exact path="/products/accessories/microPC" component={MicroPC}/>
            <Route exact path="/products/accessories/ShuttlePC" component={ShuttlePC}/>
            <Route exact path="/products/accessories/usbScanner" component={USBScanner}/>
            <Route exact path="/products/accessories/barcodePrinter" component={BarcodePrinter}/>
            <Route exact path="/products/accessories/registerScanner" component={RegisterScanner}/>
            <Route exact path="/products/accessories" component={ProductAccessories}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/support" component={Support}/>
            <Route exact path="/download" component={Downloads}/>
            <Route exact path="/reports" component={Reports}/>
            <Route exact path="/reports/balanceSheet" component={BalanceSheet}/>
            <Route exact path="/reports/carWash" component={CarWash}/>
            <Route exact path="/reports/checkingAcct" component={CheckingAcct}/>
            <Route exact path="/reports/clientAcct" component={ClientAcct}/>
            <Route exact path="/reports/edi" component={EDI}/>
            <Route exact path="/reports/electronicAcct" component={ElectronicAcct}/>
            <Route exact path="/reports/electronicCC" component={ElectronicCC}/>
            <Route exact path="/reports/expenses" component={Expenses}/>
            <Route exact path="/reports/garageInventory" component={GarageInventory}/>
            <Route exact path="/reports/gasLoad" component={GasLoad}/>
            <Route exact path="/reports/inventory" component={Inventory}/>
            <Route exact path="/reports/lotto" component={Lotto}/>
            <Route exact path="/reports/netIncome" component={NetIncome}/>
            <Route exact path="/reports/payroll" component={Payroll}/>
            <Route exact path="/reports/POS" component={POSReport}/>
            <Route exact path="/reports/salesRoom" component={SalesRoom}/>
            <Route exact path="/reports/shortOver" component={ShortOver}/>
            <Route exact path="/reports/workOrders" component={WorkOrders}/>
        </Switch>
    </BrowserRouter>
),document.getElementById('root'));
registerServiceWorker();


