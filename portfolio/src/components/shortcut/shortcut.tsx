import React, { Component } from "react";

// External Components
import Draggable from 'react-draggable';

//CSS Style
import './shortcut.css';

interface ShortcutProps {
    title: string,
    icon: string
}

export class Shortcut extends Component<ShortcutProps> {

    render() {
        return (
            <Draggable bounds="parent">
                <div className="Draggable">
                    <img draggable="false" alt="" src={this.props.icon}/>
                    <span className="caption">{this.props.title}</span>
                </div>
            </Draggable>
        );
    }
} export default Shortcut;