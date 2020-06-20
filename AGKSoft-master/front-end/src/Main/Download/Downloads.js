import React, { Component } from 'react';
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import "../Main.css";
import {Panel, PanelGroup } from 'react-bootstrap';
import myData from "../../assets/JSON/versions";

import IEMoreInfo from "../../assets/AGKDownloadIE_MoreInfo.JPG";
import IERunAnyway from "../../assets/AGKDownloadIE_RunAnyway.JPG";
import ChromeRun from "../../assets/AGKDownloadChrome.JPG";

import FireFox from "../../assets/AGKDownloadFirefox.JPG";
import FireFoxDown from "../../assets/AGKDownloadFirefoxDownloads.JPG";

import DefenderSmartScreen from '../../assets/WindowsDefenderSmartScreen.JPG';
import DefenderSmartScreenDownload from '../../assets/WindowsDefenderSmartScreenDownload.JPG';
import DefenderSmartScreenRun from '../../assets/WindowsDefenderSmartScreenRun.JPG';


const baseUrl = "/images/";

class Downloads extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="main-container">
                    <div className="main-heading row-centered">AGKSoft Downloads</div>
                    <PanelGroup accordion id="accordion-example">
                        <Panel eventKey="1">
                            <Panel.Heading>
                                <Panel.Title toggle>AGKSoft Software</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body collapsible>
                                <table id='downloads'>
                                    <tr>
                                        <th>Full Installation</th>
                                    </tr>
                                    <tr>
                                        <td><a href={baseUrl + "setupstation.exe"}><h3>Click here to install the full AGKSoft software</h3></a></td>
                                    </tr>
                                </table>
                                <table id='downloads'>
                                    <tr>
                                        <th>Latest Update</th>
                                        <th>Updated On</th>
                                        <th>Version</th>
                                    </tr>
                                    <tr>
                                        <td><a href={baseUrl + "updategas.exe"}><h3>Click here to install the latest version</h3></a></td>
                                        <td><h3><agksoftupdatedon>{myData.agksoftupdatedon}</agksoftupdatedon></h3></td>
                                        <td><h3><agksoftversion>{myData.agksoftversion}</agksoftversion></h3></td>
                                    </tr>
                                </table>
                                <table id='downloads'>
                                    <tr>
                                        <th>When using Google Chrome</th>
                                    </tr>
                                    <tr className="row-centered"><img alt="ChromeRun" className="table-img image-border" src={ChromeRun}/></tr>                                            
                                    <tr className="row-centered"><img alt="IEMoreInfo" className="table-img image-border" src={IEMoreInfo}/></tr>
                                    <tr className="row-centered"><img alt="IERunAnyway" className="table-img image-border" src={IERunAnyway}/></tr>
                                    <tr>
                                        <th>When using Firefox</th>
                                    </tr>
                                    <tr className="row-centered"><img alt="FireFox" className="table-img image-border" src={FireFox}/></tr>
                                    <tr className="row-centered"><img alt="FireFoxDown" className="table-img image-border" src={FireFoxDown}/></tr>
                                    <tr className="row-centered"><img alt="IEMoreInfo" className="table-img image-border" src={IEMoreInfo}/></tr>
                                    <tr className="row-centered"><img alt="IERunAnyway" className="table-img image-border" src={IERunAnyway}/></tr>
                                    <tr>
                                        <th>When using Internet Explorer</th>
                                    </tr>
                                    <tr className="row-centered"><img alt="DefenderSmartScreen" className="table-img image-border" src={DefenderSmartScreen}/></tr>
                                    <tr className="row-centered"><img alt="DefenderSmartScreenDownload" className="table-img image-border" src={DefenderSmartScreenDownload}/></tr>
                                    <tr className="row-centered"><img alt="DefenderSmartScreenRun" className="table-img image-border" src={DefenderSmartScreenRun}/></tr>
                                    <tr className="row-centered"><img alt="IEMoreInfo" className="table-img image-border" src={IEMoreInfo}/></tr>
                                    <tr className="row-centered"><img alt="IERunAnyway" className="table-img image-border" src={IERunAnyway}/></tr>
                                </table>
                                                                
                            </Panel.Body>
                        </Panel>
                        <Panel eventKey="2">
                            <Panel.Heading>
                                <Panel.Title toggle>Ruby Downloads</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body collapsible>
                                <table id="downloads">
                                    <tr>
                                        <th>Ruby VeriFone Installation</th>
                                        <th>Video</th>
                                    </tr>
                                    <tr>
                                        <td><a href={baseUrl + "setupruby.exe"}>Click here for the complete Ruby installation</a></td>
                                        <td><a href="Training/Ruby/Ruby.html">Click here to See Video Installation.</a></td>
                                    </tr>
                                </table>
                                <table id="downloads">
                                    <tr>
                                        <th>Ruby VeriFone Sapphire Installation</th>
                                    </tr>
                                    <tr>
                                        <td><a href={baseUrl + "setupsaphire.exe"}>Click here to install the Sapphire Software.</a></td>
                                    </tr>
                                </table>
                                <table id="downloads">
                                    <tr>
                                        <th>Ruby Commander Configuration</th>
                                    </tr>
                                    <tr>
                                        <td><a href={baseUrl + "RubyCommanderShell.JPG"}>Shell Cybera Zone Router</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href={baseUrl + "RubyCyberaZoneRouter.JPG"}>Cybera Zone Router (Single WAN)</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href={baseUrl + "RubyCommanderCyberaZoneRouter.JPG"}>Cybera Zone Router  (Dual WAN)</a></td>
                                    </tr>
                                </table>
                                <table id="downloads">
                                    <tr>
                                        <th>Ruby VeriFone (Phillips 66 Connection)</th>
                                        <th/>
                                    </tr>
                                    <tr>
                                        <td><a href={baseUrl + "java.exe"}>Java Runtime</a></td>
                                        <td>Download to C:\TEMP and run it if you do not have Java already.</td>
                                    </tr>
                                    <tr>
                                        <td><a href={baseUrl + "msxml.msi"}>MSXML (WINHTTP5.DLL)</a></td>
                                        <td>Download to C:\TEMP only</td>
                                    </tr>
                                    <tr>
                                        <td><a href={baseUrl + "gemcom32.msi"}>Latest RubyLink</a></td>
                                        <td>Download to C:\TEMP and run it</td>
                                    </tr>
                                    <tr>
                                        <td><a href={baseUrl + "saphire.exe"}>Sapphire Templates</a></td>
                                        <td>Download to C:\TEMP and run it if you have a Ruby with Sapphire</td>
                                    </tr>
                                    <tr>
                                        <td><a href={baseUrl + "gemcom.exe"}>Gemcom & Templates </a></td>
                                        <td>Download to C:\TEMP and run it if you have a Ruby only</td>
                                    </tr>
                                    <tr>
                                        <td><a href={baseUrl + "rubylink-1.6.1.0.zip"}>RubyLink Windows 7 Patch</a></td>
                                        <td>Download to C:\TEMP, open with WinZip and extract to: C:\GEMCOM\BIN</td>
                                    </tr>
                                </table>
                            </Panel.Body>
                        </Panel>
                        <Panel eventKey="3">
                            <Panel.Heading>
                                <Panel.Title toggle>Dresser Wayne Downloads</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body collapsible>
                                <table id='downloads'>
                                    <tr>
                                        <th>Dresser Wayne Nucleus Software Update</th>
                                        <th/>
                                    </tr>
                                    <tr>
                                        <td><a href={baseUrl + "Blackpipe_1.3.3.198_Install.exe"}>Black Pipe Software 1.3.3/198 Installation</a></td>
                                        <td>Download to C:\TEMP and run it</td>
                                    </tr>
                                </table>

                                <table id='downloads'>
                                    <tr>
                                        <th>Dresser Wayne NAMOS/Beetle POS</th>
                                    </tr>
                                    <tr>
                                        <td><a href={baseUrl + "SecureFTPInstallation.pdf"}>Secure FTP Installation</a></td>
                                    </tr>
                                </table>
                            </Panel.Body>
                        </Panel>
                        <Panel eventKey="4">
                            <Panel.Heading>
                                <Panel.Title toggle>Gilbarco Passport Downloads</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body collapsible>
                                <table id='downloads'>
                                    <tr>
                                        <th>Gilbarco Passport</th>
                                    </tr>
                                    <tr>
                                        <td><a href={baseUrl + "MDE-4859B.pdf"}>V8.03 Network Add. HPS-Dallas or ConocoPhillips</a></td>
                                    </tr>
                                    <tr>
                                        <td>ConocoPhillip Back Office Setup (
                                            <a href={baseUrl + "cp1.gif"}>Image1, </a>
                                            <a href={baseUrl + "cp2.gif"}>Image2, </a>
                                            <a href={baseUrl + "cp3.gif"}>Image3</a>
                                            )
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><a href={baseUrl + "DMZ.JPG"}>Click here to see the DMZ Port</a></td>
                                    </tr>
                                </table>
                            </Panel.Body>
                        </Panel>
                        <Panel eventKey="5">
                            <Panel.Heading>
                                <Panel.Title toggle>Portable Downloads</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body collapsible>
                                <table id='downloads'>
                                    <tr>
                                        <th>AGKSoft Symbol Portable Software</th>
                                        <th>Updated On</th>
                                        <th>Version</th>
                                    </tr>
                                    <tr>
                                        <td><a href={baseUrl + "AGKSoftInv.exe"}>Download PPT88xx/MC5x Software Update ONLY</a></td>
                                        <td>09/10/2018</td>
                                        <td>12.84</td>
                                    </tr>
                                    <tr>
                                        <td><a href={baseUrl + "VBRuntime.exe"}>Download MC70 (Windows Mobile 5.0 Visual Basic Runtime)</a></td>
                                        <td>03/14/2016</td>
                                        <td>N/A</td>
                                    </tr>
                                </table>

                                <table id='downloads'>
                                    <tr>
                                        <th>View AGKSoft Portable Demos</th>
                                        <th>Updated On</th>
                                    </tr>
                                    <tr>
                                        <td><a href="Training/PPT88xx/PPT88xx.html">Connect Portable to PC</a></td>
                                        <td>03/16/2016</td>
                                    </tr>
                                    <tr>
                                        <td><a href="/demos/InventoryInstall/InventoryInstall.html">Inventory Installation</a></td>
                                        <td>03/16/2016</td>
                                    </tr>
                                    <tr>
                                        <td><a href="/demos/PortableSetup/PortableSetup.html">Setup the Portable</a></td>
                                        <td>03/16/2016</td>
                                    </tr>
                                    <tr>
                                        <td><a href="/demos/PortableKeysColdstart/PortableKeysColdstart.html">Cold Start with Keys</a></td>
                                        <td>03/16/2016</td>
                                    </tr>
                                    <tr>
                                        <td><a href="/demos/PortableNoKeysColdstart/PortableNoKeysColdstart.html">Cold Start with No Keys</a></td>
                                        <td>03/16/2016</td>
                                    </tr>
                                </table>
                            </Panel.Body>
                        </Panel>
                        <Panel eventKey="6">
                            <Panel.Heading>
                                <Panel.Title toggle>POS Downloads</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body collapsible>
                                <table id='downloads'>
                                    <tr>
                                        <th>AGKSoft Point Of Sale Downloads (Mercury/Vantiv)</th>
                                    </tr>
                                    <tr>
                                        <td><a href={baseUrl + "VeriFoneUSBUARTDriver_Vx_1.0.0.52_B5.zip"}>Verifone VX805 driver</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href={baseUrl + "dsiEMVUS-100-Install20150831-W8.exe"}>DSI EMVx</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href={baseUrl + "dsiPDCX-142-Install20150420-W8.exe"}>DSI PDCX</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href={baseUrl + "NETePay.exe"}>NETePay</a></td>
                                    </tr>
                                </table>
                                <table id='downloads'>
                                    <tr>
                                        <th>AGKSoft Point Of Sale Downloads (Elavon/Converge)</th>
                                    </tr>
                                    <tr>
                                        <td><a href={baseUrl + "IngenicoUSBDrivers_2.80_setup.exe"}>Ingenico driver</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href={baseUrl + "CommerceWebServicesSetup.exe"}>Commerce Web Services</a></td>
                                    </tr>
                                </table>
                                <table id='downloads'>
                                    <tr>
                                        <th>AGKSoft Point Of Sale Downloads (non-EMV)</th>
                                    </tr>
                                    <tr>
                                        <td><a href={baseUrl + "MetroOPOS.exe"}>MS2320 Scale/Scanner OPOS</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href={baseUrl + "Metroset3.2.48.exe"}>Honeywell MetroSet 2</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href={baseUrl + "MS2320_K141_OPOS.pdf"}>OPOS Instructions</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href={baseUrl + "APD_456E.exe"}>Epson APD Printer Driver Ver. 4.56E</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href={baseUrl + "R180.exe"}>R180 Printer Driver</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href={baseUrl + "DSIClient.exe"}>DSI Client Software Installation</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href={baseUrl + "USB-Scanner-Setup.pdf"}>AGKSoft USB Scanner Sheet</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href={baseUrl + "fixOPOS.exe"}>Fix OPOS</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href={baseUrl + "SNBC-BTP-R880-Win7.zip"}>SNBC BTP-R880 Win 7 Driver</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href={baseUrl + "SNBC-BTP-R880-Win10.zip"}>SNBC BTP-R880 Win 10 Driver</a></td>
                                    </tr>
                                </table>
                            </Panel.Body>
                        </Panel>
                        <Panel eventKey="7">
                            <Panel.Heading>
                                <Panel.Title toggle>External Tools</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body collapsible>
                                <table id='downloads'>
                                    <tr>
                                        <th>External Tools</th>
                                    </tr>

                                    <tr>
                                        <td><a href={baseUrl + "msxml.msi"}>MSXML (WINHTTP5.DLL)</a></td>
                                    </tr>

                                    <tr>
                                        <td><a href={baseUrl +  "googledrivesync.exe"}>Download Google Drive</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href={baseUrl + "OneDriveSetup.exe"}>Download One Drive</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href={baseUrl + "DPSetup.exe"}>Avery DesignPro 5</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href={baseUrl + "Install_PDFR_Pro_v228.exe"}>Download PDF Writer</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href={baseUrl + "cr85win_en_sp3.exe"}>Crystal Reports Service Pack 3</a></td>
                                    </tr>                                    
                                    <tr>
                                        <td>
                                            To download MCMICR font
                                            <a href={baseUrl + "mcmicr2.exe"}> Install MCMICR</a> and then
                                            <a href={baseUrl + "mcmicr.ttf"}> Download MCMICR Font</a>
                                        </td>
                                    </tr>
                                </table>
                            </Panel.Body>
                        </Panel>
                    </PanelGroup>
                </div>
                <Footer/>
            </div>
        );
    }
}
export default Downloads;
