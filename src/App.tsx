import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Modal from './components/Modal';
import { showModal } from './store/actions';

const mapDispatchToProps = {
  dispatchShowModal: showModal,
};

const connector = connect(undefined, mapDispatchToProps);

type AppProps = {} & ConnectedProps<typeof connector>;

function App(props: AppProps) {
  const { dispatchShowModal } = props;

  return (
    <>
      <Modal />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button
            onClick={() => {
              dispatchShowModal({
                title: 'A new title.',
                description: 'And a new description too.',
              });
            }}
          >
            Show Modal
          </button>
        </header>
      </div>
    </>
  );
}

export default connector(App);
