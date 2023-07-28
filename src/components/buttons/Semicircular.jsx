import * as React from 'react';
import Button from '@mui/material/Button';

export default function SemiCircularButton(props) {
  return (
    <Button variant="contained" sx={{
      width: '40px',
      float: 'left',
      textAlign: 'center',
      height: '25px',
      backgroundColor: 'red',
      color: '#fff !important',
      borderBottomRightRadius: '100px',
      borderBottomLeftRadius: '100px',
      minWidth: '48px',
      fontWeight: 600,
      paddingTop: '2px',

    }}>
      {props.number}
    </Button>
  );
}

