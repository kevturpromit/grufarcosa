import React, { Component } from 'react';
import '../../Product.css';
import '../../../Main.css';
import Footer from "../../../Shared/Footer/Footer";
import Header from "../../../Shared/Header/Header";
import figure1 from "../../../../assets/HOS/HOSSetup.JPG";
import figure1A from "../../../../assets/HOS/HOSSetupLocation.JPG";
import figure2 from "../../../../assets/HOS/CashRegisterInterface.gif";
import figure3 from "../../../../assets/HOS/HOSImport.gif";
import figure4 from "../../../../assets/HOS/short.gif";
import figure5 from "../../../../assets/HOS/ZoneSetup.gif";
import figure6 from "../../../../assets/HOS/UploadZonegif.gif";
class BackOffice extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="main-container">
                    <h1 className="heading-text">AGKSoft Home Office Software</h1>
                    <div className="sub-header">
                        <a className="dividers-first" href="/gasdesk.html">EXPLORE THE SOFTWARE</a>
                        <a className="dividers" href="/stnweb.html">DOCUMENTATION</a>
                    </div>
                    <div className="description-text">
                        The AGKSoft Home Office main purpose is for Central Pricebook and Central Reporting.  
                        You will be able to change the price of one or more products once and send it to one or more stores.
                        Your daily sales data from multiple back office locations will be consolidated into one centralized location (The Home Office).
                        To Synchronize the Home Office with the Back Office, we can use Google Drive, Microsoft OneDrive or direct FTP using IIS.                        
                    </div>
                    
                    <div className="description-text">First Time User can easily help you setup muyltiple locations as follows:</div>
                    <table className="product-entry-spacing row-centered center-block">
                        <tr className="center-images"><img alt="figure1" className="image-border" src={figure1}/></tr>
                    </table>
                    <table className="product-entry-spacing row-centered center-block">
                        <tr className="center-images"><img alt="figure1A" className="image-border" src={figure1A}/></tr>
                    </table>

                    <div className="description-text">Click "Cash Register Interface" from the AGKSoft desktop or press F5 and you will see the following:</div>
                    <table className="product-entry-spacing row-centered center-block">
                        <tr className="center-images"><img alt="figure2" className="image-border" src={figure2}/></tr>
                    </table>

                    <div className="sub-header">Cash Register Interface Options:</div>
                    <ul>
                        <li>"Send to Back Office" allows you to choose which products to send to one or more Back Office Locations.</li>
                        <li>"Product Wizard" helps you make multiple price changes easily.</li>
                        <li>"Departments" will display the current list of departments.</li>
                        <li>"Price Groups" allows you to Create/Modify one or more price groups.</li>
                        <li>"Categories" allows you to Create/Modify one or more Category.</li>
                        <li>"Sub-Categories" allows you to Create/Modify one or more Sub-Category.</li>
                        <li>"Products Download" will manually import a Price Book file from another location that is saved on a disk file.</li>
                        <li>"View products" is a list of the price book file including departments, UPC's and PLU's.</li>
                        <li>"Validate" is used to make sure your Price Book is valid.</li>
                        <li>"Buy Down" is where you can configure the discount from the cigarette manufactures and send to the back office.</li>
                        <li>"Mix Match" is used to configure items that would sell normally 1 for .59 and 2 for 1.00.</li>
                        <li>"Create/Modify Products" will allow working with one UPC-Code, Dept or PLU at a time.  Changing pricing, updating names etc.</li>
                        <li>"Change" under Gas Selling Prices will allow all prices to be raised or lowered a certain amount, and then hit Send to Register to send these new prices to a zone or folder for the back office to import.</li>
                        <li>"Setup Zones" is where to configure the Zone names and folders that the back office will pick up the price changes from.</li>
                        <li>"Auto" will open the Home Office Automatic Import screen to allow the home office to import the data sent from the back office.</li>
                        <li>"Help" opens up a help document with information on this window.</li>
                        <li>"Quit" will close the window.</li>
                    </ul>
                    <div className="sub-header">AGKSoft Home Office Automatic Import:</div>
                    <div className="description-text">The AGKSoft Home Office Import window is used to setup a folder for each location.  This window will monitor each folder for new data sent from the Back Office and will automatically import the data into the Home Office Software.</div>
                    <div className="description-text">The Home Office Software is pretty much the same as the Back Office Software in addition to being able to send price changes from the Home Office to your Back Office.</div>
                    <div className="description-text">For more info. on what the software can do, please see the Back Office Software.</div>
                    <div className="description-text">To import data from your Back Office locations, click "Auto" from the Cash Register Interface and you will see the following:</div>
                    <table className="product-entry-spacing row-centered center-block">
                        <tr className="center-images"><img alt="figure3" className="image-border" src={figure3}/></tr>
                    </table>
                    <ul>
                        <li>Click on "Add Folder" to add the folders that were configured in Internet Information Services (IIS), if you have not created these folders please refer to the Home Office Guide that was sent with your package and configure them now.  If you have configured them, please continue.</li>
                        <li>The "Add Folder" dialog box should now appear; Browse to where the folders were created and choose the folder name (e.g. C:\Inetpub\FtpRoot\Location1) Note:  In our example we used Location1, when setting up your Home Office, replace Location1 with your folder name.</li>
                        <li>Repeat the steps for "Adding a Folder" for each location.</li>
                        <li>Once all folders are added for all locations, choose how often you would like the software to check to see if any data has been exported from the back office locations into these folders, under where it says "Import Interval".</li>
                        <li>Click "Start Auto-Import" to start monitoring the folders.</li>
                    </ul>

                    <div className="sub-header">Other AGKSoft Home Office Automatic Import options:</div>
                    <ul>
                        <li>"Remove Folder"  will eliminate/remove a folder from the list.</li>
                        <li>"View Auto-Log" opens a log of the information of what is happening at the back office.</li>
                        <li>"Stop Auto-Import" will stop the monitoring and importing of data until Start is pressed.</li>
                        <li>Clicking on the   , will open a log of the Home Office Importing activity.</li>
                        <li>Clicking on the AGKSoft icon, will allow a support engineer to log onto the PC for remote support, if needed.</li>
                        <li>"Quit" will close the Home Office Import window.</li>
                    </ul>

                    <div className="description-text">After all that data gets imported, what do I do with it?</div>
                    <div className="description-text">When the home office is finished importing click "Stop Auto Import" to stop the importing process and press Quit.  Open up the Cash Register Interface screen to "log into" a specific location to see their sales info, inventory info. etc...  There always is the option to view all information for "All Locations" as well.  Click on the location name to see the information for that location and then click Quit.  Note:  On the title bar of the software you will see the location name you are "logged into".</div>
                    <div className="description-text">After you have made your selection you are now ready to browse to the various windows to see the information for your selected location.  To see information for the shift / day click on the Short/Over screen and you will see the window shown below.</div>

                    <table className="product-entry-spacing row-centered center-block">
                        <tr className="center-images"><img alt="figure4" className="image-border" src={figure4}/></tr>
                    </table>

                    <div className="description-text">To see previously saved data that has been imported from the back office location (s) click on "History", select a date range and press ok and then choose the specific shift or day.  The information will show directly on the short over screen and allow changes if necessary.  Once all the changes have been made, click on "Close Shift (Save)" to save the changes.  The report button can also be used to view certain shifts / days as well as all days saved in the software.</div>
                    <div className="description-text">It is also possible to see sales, inventory, cost of goods information etc... for "All Locations" or a "Selected Location".</div>
                    <div className="description-text">For example: To view sales information for location 1 only; open the cash register interface, choose location 1 and hit quit.  Then, open the sales room screen from the AGKSoft desktop, click on report and choose a report.  The reports can be limited to a department, UPC, category, profit margin, etc... A date range can be selected as well. Once the report is generated you will see on the left margin the location name you are viewing.</div>

                    <div className="sub-header">Working with price changes in the Home Office:</div>
                    <div className="description-text">The Home Office portion of the software has the ability to control the price book for one store location or multiple, by using zones. By creating a zone, we are grouping multiple locations under a master folder; referenced as a “Zone”. Once store’s are placed in a “Zone”, any changes to that “Zone” will apply to all locations contained in that “Zone”.</div>

                    <table className="product-entry-spacing row-centered center-block">
                        <tr className="center-images"><img alt="figure5" className="image-border" src={figure5}/></tr>
                    </table>
                    <div className="description-text">In our example above, we have created 3 different zones.</div>
                    <ul>
                        <li>Zone1, is for Location1 only</li>
                        <li>Zone2, is for Location2 only</li>
                        <li>Zone3, is for Location1 and 2 together.</li>
                    </ul>
                    <div className="description-text">Creating separate zones for Location1 and 2, will allow us to keep price changes specific to each location. A good example of this: Location1 requires a price change on product 123, but Location2 does not, and vice versa.  In the case where Location1 and 2 would require identical price changes on product 123, we would use Zone 3.  By using Zone 3, the software would automatically apply the price changes into the Location1 and 2 folders accordingly, saving time, and not having to go back and forth choosing multiple destination folders.</div>
                    <div className="description-text">Please follow the steps below to configure new zones.</div>
                    <ul>
                        <li>Open the "Setup Zones" by clicking on "Setup Zones" in the Cash Register Interface.</li>
                        <li>Click on "New Zone", you will be asked " Please enter the Zone name for Zone number 1".  Enter a name (e.g. Zone1) and press OK.  You should now see the newly configured Zone name shown in the list, like in the example above.</li>
                        <li>Click on "Add Folder" and you should see the select folder dialog box; browse to where the folders  were created earlier in the Internet Information Services (IIS) and choose the folder name that you would like added  (e.g. C:\Inetpub\FtpRoot\PriceChange1), if you have not yet created these folders please refer to the Home Office Guide that came with your package and configure them now.</li>
                        <li>Continue the above steps until there are as many zones configured as needed.</li>
                    </ul>
                    <div className="description-text">Note: For the price changes to import correctly at the Back Office, please be sure to configure automation with the same folder name that was used at the Home Office (e.g. PriceChange1)</div>
                    <div className="sub-header">Setup Zones Options:</div>
                    <div className="description-text">1 - Zone List</div>
                    <ul>
                        <li>"New Zone" will allow you to create new zones.</li>
                        <li>"Edit" allows you to make changes to an exiting zone.</li>
                        <li>"Delete" will delete the current zone selected.  Note: Delete is Permanent.</li>
                        <li>"List Zones" opens up the list of all zones configured shown in a grid.</li>
                    </ul>
                    <div className="description-text">1 - Zone Folders</div>
                    <ul>
                        <li>"Add Folder" will allow folders to be added to exiting zones or when creating new zones.</li>
                        <li>"Delete" will delete the current folder selected. Note: Delete is Permanent.</li>
                        <li>"List Zone Folders" opens up a list of all zones folder paths configured shown in a grid.</li>
                        <li>"Quit" closes the window.</li>
                    </ul>
                    <div className="description-text">After all the zones are created you have the option of choosing which zone or zones to upload the prices to before or after making any price changes.  To make this selection, click on the Cash Register Interface; Upload Products to Cash Register and finally Zone Selection,  and you will see the window shown below.</div>

                    <table className="product-entry-spacing row-centered center-block">
                        <tr className="center-images"><img alt="figure6" className="image-border" src={figure6}/></tr>
                    </table>

                    <ul>
                        <li>Choose which zone you would like to upload the price changes to. Note: if the zone selection is made before price changes are made the software will automatically send the price changes into the appropriate folders and will not prompt for a folder.</li>
                        <li>If you would like all the zones to have the same price changes exported to them press the "Select All" button and all the zones will be selected.  Note: Holding the CTRL key and using the mouse to select, will allow different zones to be chosen, like zone 1 and 3.</li>
                        <li>If you need to add more zones you can click on Setup Zones and it will bring you to the "Setup Zone" window to create more.</li>
                    </ul>

                    <div className="sub-header">Other Home Office features:</div>
                    <div className="description-text">The Home office has the ability to download gas invoices and credit card fee invoices from oil companies such as Shell and export them directly to the back office locations.  Please contact your Oil Company to find out if they supply XML invoices.</div>
                    <div className="description-text">Please follow the steps below on how to load XML invoices.</div>

                    <div className="description-text">Loading Gas XML Invoices</div>
                    <ul>
                        <li>Log into your oil companies website (e.g. www.ShellSource.com)</li>
                        <li>Choose the invoice you would like to download to export to the back office location</li>
                        <li>Save the XML invoice into a folder on the hard drive (e.g. C:\Inetpub\FtpRoot\Location1\GasInvoice.XML)</li>
                    </ul>
                    <div className="description-text">Loading Credit Card Fee Invoices</div>
                    <ul>
                        <li>Log into your Oil Companies website (e.g. www.ShellSource.com)</li>
                        <li>Choose the invoice you would like to download to export to the back office.</li>
                        <li>Save the XML invoice into a folder on the hard drive  (e.g. C:\Inetpub\FtpRoot\Location1\CreditCardsFees.XML)</li>
                        <li>Note: If working with more then one back office,  each locations invoices will have to be saved in their own unique folders.</li>
                        <li>Note: The folder that the invoices are being saved into, has to be the same folder that is configured at the back office.</li>
                    </ul>
                    <div className="description-text">Exporting Gas Selling Prices to the Back Office</div>
                    <ul>
                        <li>Open the Cash Register Interface Screen.</li>
                        <li>Change the gas selling prices for any and all grades.</li>
                        <li>Hit Send to Register, and you will be prompted to choose a folder, if you have already selected a zone it will automatically be entered into the zone selected.</li>
                    </ul>
                    <div className="description-text last-element">For more info please <a href="\contact"><b>contact us</b></a></div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default BackOffice;
