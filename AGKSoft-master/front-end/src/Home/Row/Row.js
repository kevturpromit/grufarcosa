import React, { Component } from 'react';
import "./Row.css";

class Row extends Component {
    render() {
        return (
            <div className="row row-centered">
                <div className="col-md-12 mx-auto no-border">
                    <h3 className="row-text">{this.props.title}</h3>
                </div>
            </div>
        )
    }
}

export default Row;