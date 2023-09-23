import React, { useEffect, useState } from "react";
import MenuItem from '@mui/material/MenuItem';
import { Box, Toolbar,AppBar,styled,Typography, InputBase, Badge, Avatar, Menu, Button, Icon } from "@mui/material";
import { useMediaQuery } from '@mui/material';

const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
})


function Navbar() {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
return (
    <AppBar position = "sticky" sx={{ display: { xs: 'none', sm: 'block' }, backgroundColor: '#ffffff'}}>


    {!isSmallScreen && (
      <StyledToolbar>
    {/* <Typography variant="h6" sx={{ flexGrow: 1, color: '#FF0000' }}>
            EXAMPOINT
          </Typography> */}
          <img src="/logo_sample.png" alt="exampoint"/>
      
            <Box>
            <Button variant="contained" color="primary" sx={{ marginRight: 2, backgroundColor: '#FF9AAE',borderRadius: 0  }}>
              Switch to full screen
            </Button>
            <Button variant="contained" color="primary" sx={{ backgroundColor: '#FF9AAE',borderRadius: 0  }}>
              Pause
            </Button>
            </Box>
    
    </StyledToolbar>
    
    )}
    </AppBar>
)
}
export default Navbar;
