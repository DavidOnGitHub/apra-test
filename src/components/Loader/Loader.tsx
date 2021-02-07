import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Container } from './Loader.styles';

const Loader = () => {
  return (
    <Container>
      <CircularProgress />
    </Container>
  );
};

export default Loader;
