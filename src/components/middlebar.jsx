import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import RectangularButton from "./buttons/rectangular";
import ReplyIcon from '@mui/icons-material/Reply';
import { Reply } from "@mui/icons-material";

function Middlebar(){
    return(
        <div>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '10px', marginBottom: '10px' }}>
        <Box sx={{ marginRight: '1020px' }}>
      <Typography>Questions No. 15</Typography>
    </Box>
      <Box sx={{ marginLeft: '20px', display: 'flex', alignItems: 'center' }}>
        <Typography>Marks    </Typography> 
        <RectangularButton number="+1"/>
        <RectangularButton number="-0.25" />
        <Typography sx={{ marginLeft: '20px' }}>Time | 15:45</Typography>
        <Reply sx = {{marginLeft : '10px'}}/>
        <Typography>Report</Typography>
      </Box>
    </Box>
        </div>

    )
}
export default Middlebar;