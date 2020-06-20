import React, { Component } from 'react';
import './Introduction.css';
import logo from '../../assets/AGKlogo.png';

class Introduction extends Component {
    render() {
        return(
            <div className="home-container-background">
                <div className="home-container">
                    <table>
                        <td>
                            <tr rowspan="3"><img className="home-logo" src={logo} alt="logo"/></tr>
                        </td>
                        <td className="logo-spacing">
                            <tr><div className="home-heading-text">AGKSoft</div></tr>
                            <tr><div className="description-text">AGKSoft offers the C-Store industry a product that is able to cater to every stage of running a C-Store.</div></tr>
                            <tr align="left"><a href="/contact"><button className="sales-button">CONTACT A SALES REP</button></a></tr>
                        </td>
                    </table>
                </div>
            </div>
        );
    }
}

export default Introduction;
