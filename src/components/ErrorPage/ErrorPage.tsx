import React, { FunctionComponent } from 'react';
import { Container } from './ErrorPage.styles';

interface Props {
  message?: string
}

const ErrorPage: FunctionComponent<Props> = ({ message = 'Unknown error happened.'}) => {
  return (
    <Container>
      { message } Please try again later.
    </Container>
  );
};

export default ErrorPage;
