import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box, Menu, MenuItem, useMediaQuery } from '@mui/material';
import styled from "@emotion/styled";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { ArrowDownward, ArrowDropDown } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
});

function Topbar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    // Use a media query hook to check if the screen size is small
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    return (
        <AppBar position="sticky" sx={{ backgroundColor: '#ffffff', height: 54 }}>
            <StyledToolbar sx={{ my: 'auto' }}>

                <Box>
                    <Button
                        color="inherit"
                        sx={{
                            '&:hover': { backgroundColor: 'inherit' },
                            minWidth: 0,
                            backgroundColor: '#f8f9fc',
                            color: '#3a3b45',
                            fontSize: isSmallScreen ? '8px' : 'inherit', // Reduce font size on small screens
                        }}
                    >
                        Section:
                    </Button>
                    <Button variant="contained" color="primary" sx={{
                        marginRight: 2,
                        backgroundColor: '#f8f9fc',
                        color: '#3a3b45',
                        borderRadius: 0,
                        fontSize: isSmallScreen ? '8px' : 'inherit', // Reduce font size on small screens
                    }}>
                        {isSmallScreen ? 'QA' : 'Quantitative Aptitude'}
                    </Button>
                    <Button variant="contained" color="primary" sx={{
                        backgroundColor: '#f8f9fc',
                        borderRadius: 0,
                        color: '#3a3b45',
                        fontSize: isSmallScreen ? '8px' : 'inherit', // Reduce font size on small screens
                    }}>
                        {isSmallScreen ? 'Eng.' : 'English'}
                    </Button>
                </Box>
                <div>
                    <Button
                        color="inherit"
                        aria-controls="language-menu"
                        aria-haspopup="true"
                        endIcon={<ArrowDropDown />}
                        onClick={handleMenuOpen}
                        sx={{
                            minWidth: 0,
                            backgroundColor: '#f8f9fc',
                            color: '#3a3b45',
                            fontSize: isSmallScreen ? '8px' : 'inherit', // Reduce font size on small screens
                        }}
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
