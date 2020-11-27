import ModalProperties from '../interfaces/modal-properties';

export enum ModalActionTypes {
  ShowModal,
  HideModal,
}

export interface ModalAction {
  type: ModalActionTypes;
  payload?: ModalProperties;
}

export function showModal(payload: ModalProperties): ModalAction {
  return {
    type: ModalActionTypes.ShowModal,
    payload,
  };
}

export function hideModal(): ModalAction {
  return {
    type: ModalActionTypes.HideModal,
  };
}
