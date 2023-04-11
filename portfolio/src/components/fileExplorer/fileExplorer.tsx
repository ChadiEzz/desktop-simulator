import React, { Component } from "react";

// External Components
import Draggable from 'react-draggable';
import { Publikeco } from "../../projects/publikeco/publikeco";

//CSS Style
import './fileExplorer.css';

interface FileExplorerProps {
}

export class FileExplorer extends Component<FileExplorerProps> {

    render() {
        return (
            <Draggable /*bounds="parent"*/ handle=".handle">
                <div className="FileExplorer">
                    <div className="handle ExplorerHead">
                        <div className="TitleHead">VSCode</div>
                        <span className="InteractionsHead">
                            <div className="ResizeButton">❒</div>
                            <div className="CloseButton">✕</div>
                        </span>
                    </div>
                    <div className="ExplorerBody">
                        {
                            Publikeco()
                        }
                    </div>
                </div>
            </Draggable>
        );
    }
} export default FileExplorer;