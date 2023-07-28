import * as React from 'react';
import Button from '@mui/material/Button';

export default function RectangularButton(props) {
  return (
    <Button variant="contained"  sx={{
        width: '40px',
        height: '25px',
        backgroundColor: '#fff',
        color: '#3a3b45 !important',
        textAlign: 'center',
        minWidth: '48px',
        fontWeight: 600,
        paddingTop: '2px',
        float: 'left',
        borderRadius : '0px',
      }}>
      {props.number}
    </Button>
  );
}