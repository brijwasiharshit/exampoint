import React from "react";
import { Button } from "@mui/material";
export default function CircleButton(props) {
    return (
        <Button variant="contained" sx={{
            width: '25px',
            height: '25px',
            backgroundColor: '#5f00f7',
            color: '#fff !important',
            borderRadius: '50%',
            marginRight: '8px',
            fontWeight: 600,
            paddingTop: '3px',
            marginLeft: '5px',
            minWidth: '25px'
          }}>
            {props.number}
          </Button>
    );
  }