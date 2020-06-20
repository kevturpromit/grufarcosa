import React, { Component } from 'react';
import "./Support.css";
import '../Main.css';
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import UPC from "../../assets/UPC.PNG";
const base_url = "/images/";
class Support extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="main-container">
                    <div className="main-heading row-centered">Support</div>
                    <h3 className="row">REMOTE DESKTOP SUPPORT</h3>
                    <h5><a href={base_url + "TeamViewerQS.exe"}>TeamViewer Quick Support</a></h5>
                    <h5><a href={base_url + "TeamViewer11.exe"}>Download TeamViewer 11</a></h5>
                    <table className="support-table">
                        <th className="support-table" colspan="7">TeamViewer Web Support</th>
                        <tr className="support-table">
                            <td className="support-table"><a href="https://get.teamviewer.com/4dzs7n5">1</a></td>
                            <td className="support-table"><a href="https://get.teamviewer.com/6hj3az7">3</a></td>
                            <td className="support-table"><a href="https://get.teamviewer.com/4wgspxy">4</a></td>
                            <td className="support-table"><a href="https://898.tv/pqf46hp">5</a></td>
                            <td className="support-table"><a href="https://get.teamviewer.com/h37k9e8">7</a></td>
                            <td className="support-table"><a href="https://get.teamviewer.com/9tb47uc">8</a></td>
                            <td className="support-table"><a href="https://get.teamviewer.com/6ymm82c">9</a></td>
                        </tr>
                    </table>

                    <h3 className="row">AGKSoft PC Boot Order and Recovery</h3>
                    <h5><a href={base_url + "AGKBootChange.mp4"}>AGKSoft Change PC Boot Order</a></h5>
                    <h5><a href={base_url + "AGKRecoverBackup.mp4"}>AGKSoft PC Recover Backup</a></h5>
                    <h5><a href={base_url + "AGKRestorePC.mp4"}>AGKSoft PC Restore</a></h5>

                    <h3 className="row sub-heading">HELPFUL LINKS</h3>
                    <h5><a href={base_url + "ExcelViewer.exe"}>Excel Viewer</a></h5>
                    <h5><a href="http://www.dslreports.com/whatismyip">What's my IP Address?</a></h5>

                    <h3 className="row">RUBY</h3>
                    <h5><a href={base_url + "RubyCyberaZoneRouter.JPG"}>Cybera Zone Router</a></h5>
                    <h5><a href={base_url + "MicrosoftEasyFix51044.msi"}>Windows 7 HTTPS Patch</a></h5>

                    <h3 className="row">GILBARCO</h3>
                    <h5><a href={base_url + "DMZ.JPG"}>DMZ Port</a></h5>
                    
                    <h3 className="row">UPC Code Guide</h3>
                    <img className="upc-image" alt="UPC" src={UPC}/>
                </div>
                <Footer/>
            </div>

        );
    }
}

export default Support;
