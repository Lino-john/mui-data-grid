import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export const ErrorMessage = (props) => {
  return (
    <div style={{ marginTop: '50px' }}>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an error alert — <strong>{props.error.message}</strong>
      </Alert>
    </div>
  )
}
