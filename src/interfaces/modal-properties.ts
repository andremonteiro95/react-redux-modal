import React from 'react';
interface ModalProperties {
  title: string;
  description: string;
  onButtonClick: (event: React.MouseEvent) => void;
}
export default ModalProperties;
