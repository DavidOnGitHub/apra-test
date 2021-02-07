import React, { FunctionComponent } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import {
  Container,
  CloseButton,
  Image,
  ModalContainer,
} from './PhotoPopup.styles';

interface Props {
  imageUrl: string | undefined;
  onClose: () => void;
}

const PhotoPopup: FunctionComponent<Props> = ({ imageUrl, onClose }) => (
  <ModalContainer open={!!imageUrl} onClose={onClose}>
    <Container>
      <CloseButton onClick={onClose}>
        <CloseIcon fontSize="large" htmlColor="white" />
      </CloseButton>
      <Image src={imageUrl} alt="" />
    </Container>
  </ModalContainer>
);

export default PhotoPopup;
