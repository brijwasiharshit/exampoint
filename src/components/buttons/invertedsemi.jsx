import Button from '@mui/material/Button';
import React from 'react';
export default function InvertedSemiButton(props) {
  return (
    <Button variant="contained" sx={{
      width: '25px',
      height: '25px',
      backgroundColor: '#019012',
      color: '#fff !important',
      borderTopRightRadius: '100px',
      borderTopLeftRadius: '100px',
      marginRight: '8px',
      fontWeight: 600,
      paddingTop: '3px',
      marginLeft: '5px',
      minWidth: '25px',
    }}>
      {props.number}
    </Button>
  );
}
