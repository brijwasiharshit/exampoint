import React, { useEffect, useState } from "react";
import MenuItem from '@mui/material/MenuItem';
import { Box, Toolbar,AppBar,styled,Typography, InputBase, Badge, Avatar, Menu, Button, Icon, useMediaQuery } from "@mui/material";


const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
})


function Bottombar() {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  return !isSmallScreen ? (
    <StyledToolbar>
      <Box>
        <Button variant="contained" color="primary" sx={{ marginRight: 2, backgroundColor: '#FF9AAE', borderRadius: 0 }}>
          Mark for Review
        </Button>

        <Button variant="contained" color="primary" sx={{ marginRight: 2, backgroundColor: '#FF9AAE', borderRadius: 0 }}>
          Clear Section
        </Button>
      </Box>
      <Box>
        <Button variant="contained" color="primary" sx={{ backgroundColor: '#FF9AAE', borderRadius: 0 }}>
          Save and next
        </Button>
      </Box>
    </StyledToolbar>
  ) : null;
}

export default Bottombar;
