import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box, Menu, MenuItem } from '@mui/material';
import styled from "@emotion/styled";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { ArrowDownward, ArrowDropDown } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
})


function Topbar() {
    const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
return (
    <AppBar position = "sticky" sx={{ backgroundColor: '#ffffff', height: 54}}>
    <StyledToolbar sx={{ my: 'auto'}}>
    
    <Box>
    <Button
              color="inherit"
              sx={{'&:hover': { backgroundColor: 'inherit'} ,minWidth: 0 , backgroundColor: '#f8f9fc', color: '#3a3b45'}}
            >
              Section:
            </Button>
            <Button variant="contained" color="primary" sx={{ marginRight: 2, backgroundColor: '#f8f9fc', color: '#3a3b45', borderRadius: 0  }}>
              Quantitative Aptitude
            </Button>
            <Button variant="contained" color="primary" sx={{ backgroundColor: '#f8f9fc',borderRadius: 0 ,color: '#3a3b45' }}>
              English Language
            </Button>
    </Box>
          <div>
            <Button
              color="inherit"
              aria-controls="language-menu"
              aria-haspopup="true"
              endIcon={<ArrowDropDown/>}
              onClick={handleMenuOpen}
              sx={{ minWidth: 0 , backgroundColor: '#f8f9fc', color: '#3a3b45'}}
            >
              Select Language
            </Button>
            <Menu
              id="language-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <MenuItem onClick={handleMenuClose}>Hindi</MenuItem>
              <MenuItem onClick={handleMenuClose}>English</MenuItem>
            </Menu>
          </div>
    
    </StyledToolbar>
   
    </AppBar>
)
}
export default Topbar;
