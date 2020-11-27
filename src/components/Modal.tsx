import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { hideModal } from '../store/actions';
import { RootState } from '../store/reducers';
import './Modal.css';

const mapStateToProps = (state: RootState) => ({
  modal: state.modal.modal,
});

const mapDispatchToProps = {
  dispatchHideModal: hideModal,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type ModalProps = {} & ConnectedProps<typeof connector>;

function Modal(props: ModalProps) {
  const { dispatchHideModal, modal } = props;

  if (!modal) {
    return null;
  }

  const onCloseButtonClick = () => {
    dispatchHideModal();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <span className="modal-close" onClick={onCloseButtonClick}>
          &#10005; {/* HTML code for a multiplication sign */}
        </span>
        <h1>{modal.title}</h1>
        <p>{modal.description}</p>
        <button type="button" onClick={modal.onButtonClick}>
          Do something
        </button>
      </div>
    </div>
  );
}

export default connector(Modal);
