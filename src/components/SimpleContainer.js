import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { PatientDeatils } from './PatientDeatils';
import { ErrorMessage } from './ErrorMessage'

export const SimpleContainer = (props) => {
  const error = props.error
  let component = null
  if (error && error.hasOwnProperty('message')) {
    component = <ErrorMessage error={error} />
  } else {
    component = props.data.length > 0 ? <PatientDeatils data={props.data} /> : null
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        {component}
      </Container>
    </React.Fragment>
  );
}
