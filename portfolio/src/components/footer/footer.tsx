import React, { Component } from "react";
import LiveDate from "../liveDate/liveDate";
import LiveTime from "../liveTime/liveTime";

// External Components

// My Components

//CSS Style
import './footer.css';

interface FooterProps {
    color: string
}

interface State {
    isMenuOpen: boolean;
}

export class Footer extends Component<FooterProps, State> {
    state = {
        isMenuOpen: false,
    };

    handleToggleMenu = () => {
        this.setState((prevState) => ({
            isMenuOpen: !prevState.isMenuOpen,
        }));
    };

    render() {
        return (
            <div className="Footer" style={{ "backgroundColor": this.props.color }}>
                <div className="LeftFooter">
                    <button onClick={this.handleToggleMenu}>
                        {this.state.isMenuOpen ? 'Close' : 'Open'} Menu
                    </button>
                    {this.state.isMenuOpen && (
                        <div className="account-menu">
                            test
                            <div className="account-menu-footer">
                                <div className="account-menu-footer-left">
                                    <span>
                                        Account icon
                                    </span>
                                    <span>
                                        user name
                                    </span>
                                </div>
                                <div className="account-menu-footer-right">
                                    <span>
                                        params
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="RightFooter">
                    <div className="LiveDateTime">
                        <LiveTime />
                        <LiveDate />
                    </div>
                </div>
            </div>
        );
    }
} export default Footer;