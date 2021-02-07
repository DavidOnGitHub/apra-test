import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import Modal from '@material-ui/core/Modal';

export const ModalContainer = styled(Modal)`
  width: 100vw;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  outline: none;
  position: relative;
`;

export const CloseButton = styled(IconButton)`
  position: absolute !important;
  top: 16px;
  right: 16px;

  @media (max-width: 768px) {
    top: 8px;
    right: 8px;
  }
`;

export const Image = styled.img`
  object-fit: contain;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
