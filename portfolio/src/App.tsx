import React from 'react';
import './App.css';

// My Components
import Footer from './components/footer/footer';
import Shortcut from './components/shortcut/shortcut';
import FileExplorer from './components/fileExplorer/fileExplorer';

function App() {

  return (
    <div className='App'>
      <div className='DragZone'>
        <Shortcut title='RecycleBin' icon='./images/shortcut-icons/bin-icon.png' />
        <Shortcut title='VSCodebutlongerversion.exe' icon='./images/shortcut-icons/vscode-icon.png' />
        <Shortcut title='VSCode longg but splitted.exe' icon='./images/shortcut-icons/vscode-icon.png' />
        <Shortcut title='Publikeco' icon='./images/shortcut-icons/publikeco-icon.png' />
        <FileExplorer />
      </div>
      <Footer color="#c01739" />
    </div>
  );
}

export default App;
