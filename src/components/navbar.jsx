import React, { useEffect, useState } from "react";
import MenuItem from '@mui/material/MenuItem';
import { Box, Toolbar,AppBar,styled,Typography, InputBase, Badge, Avatar, Menu, Button, Icon } from "@mui/material";

const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
})


function Navbar() {
return (
    <AppBar position = "sticky" sx={{ display: { xs: 'none', sm: 'block' }, backgroundColor: '#ffffff'}}>


    <StyledToolbar>
    <Typography variant="h6" sx={{ flexGrow: 1, color: '#FF0000' }}>
            EXAMPOINT
          </Typography>
            <Box>
            <Button variant="contained" color="primary" sx={{ marginRight: 2, backgroundColor: '#FF9AAE',borderRadius: 0  }}>
              Switch to full screen
            </Button>
            <Button variant="contained" color="primary" sx={{ backgroundColor: '#FF9AAE',borderRadius: 0  }}>
              Pause
            </Button>
            </Box>
    
    </StyledToolbar>
    </AppBar>
)
}
export default Navbar;
