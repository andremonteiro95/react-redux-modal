import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './components/Modal';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && (
        <Modal
          onCloseButtonClick={() => {
            setShowModal(false);
          }}
        />
      )}
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button
            onClick={() => {
              setShowModal(true);
            }}
          >
            Show Modal
          </button>
        </header>
      </div>
    </>
  );
}

export default App;
