import React from 'react';
import './App.css';

// External Components
import Draggable from 'react-draggable';

// My Components
import Footer from './components/footer/footer';

function App() {
  const Draggable1: any = Draggable;

  return (
    <div className='App'>
      <div className='DragZone'>
        <Draggable1 bounds="parent">
          <div className='Draggable'>SHORTCUT 1</div>
        </Draggable1>
        <Draggable1 bounds="parent">
          <div className='Draggable'>SHORTCUT 1</div>
        </Draggable1>

      </div>
      <Footer color="red" />
    </div>
  );
}

export default App;
