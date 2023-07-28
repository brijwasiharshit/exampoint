import React from "react";
import { Avatar, AvatarGroup, Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
function Rightbar() {
return (
  <Box border={0.5} flex={4} p={2} sx={{ display: { xs: 'none', sm: 'block' }, margin: 0, maxHeight: '412px', overflow: 'hidden' }}>
  {/* Your content goes here */}
        <Typography >Quetion :</Typography>
        <Typography ><br /></Typography>
        <Typography>
        Content of a page when looking layout. The point of using Lorem Ipsum is ?<br />
        </Typography>

        <Typography ><br /></Typography>
        <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="val1"
        name="radio-buttons-group"
      >
        <FormControlLabel value="val1" control={<Radio />} label="esktop publishing packages and web page editors" />
        <FormControlLabel value="val2" control={<Radio />} label="sometimes on purpose (injected humour and the like)" />
        <FormControlLabel value="val3" control={<Radio />} label="publishing packages and web page" />
        <FormControlLabel value="val4" control={<Radio />} label="over the years, sometimes by accident" />
      </RadioGroup>
    </FormControl>
       
    </Box>
)
}
export default Rightbar;