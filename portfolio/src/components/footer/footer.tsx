import React, { Component } from "react";

//CSS Style
import './footer.css';

interface FooterProps {
    color: string
}

export class Footer extends Component<FooterProps> {
    render () {
        return (
            <div className="Footer" style={{ "backgroundColor": this.props.color }}>
            </div>
        );
    }
} export default Footer;