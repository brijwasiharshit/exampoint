import { Grid, Typography } from "@mui/material";
import React from "react";
import RectangularButton from "./buttons/rectangular";
import ReplyIcon from '@mui/icons-material/Reply';
import { Reply } from "@mui/icons-material";

function Middlebar() {
  return (
    <Grid
      container
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '10px',
        marginBottom: '10px'
      }}
    >
      {/* Left Section */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Typography>Questions No. 15</Typography>
      </div>

      {/* Right Section */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
        <Typography>Marks</Typography>
        <RectangularButton number="+1" />
        <RectangularButton number="-0.25" />
        <Typography sx={{ marginLeft: '20px' }}>Time | 15:45</Typography>
        <Reply sx={{ marginLeft: '10px' }} />
        <Typography>Report</Typography>
      </div>
    </Grid>
  );
}

export default Middlebar;
