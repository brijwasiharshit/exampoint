import React, { useState } from 'react';
import { Avatar, Box, Button, Drawer, IconButton, Stack, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import RectangularButton from './buttons/rectangular';
import SemiCircularButton from './buttons/Semicircular';
import InvertedSemiButton from './buttons/invertedsemi';
import CircleButton from './buttons/Circular';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      {!isOpen ? (
        <IconButton
          onClick={handleToggle}
          style={{
            position: 'fixed',
            right: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 1,
          }}
        >
          <MenuIcon />
        </IconButton>
      ) : (
        <IconButton
          onClick={handleToggle}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            zIndex: 1,
          }}
        >
          <MenuIcon />
        </IconButton>
      )}
      <Drawer
        sx={{ width: '300px', flexShrink: 0, '& .MuiDrawer-paper': { width: '300px' } }}
        anchor="right"
        open={isOpen}
        onClose={handleToggle}
        style={{ position: 'fixed', right: 0, top: 0, height: '100vh', width: '240px' }}
      >
        <IconButton
          onClick={handleToggle}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            zIndex: 1,
          }}
        >
          <MenuIcon />
        </IconButton>
        <Box
          sx={{
            backgroundColor: '#f0f0f0', // Grey background color
            padding: '16px', // Add some padding to the box
            borderBottom: '1px solid #ccc',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Avatar src="https://i.pravatar.cc/150?img=24" />
          <Typography style={{ marginLeft: '10px' }}>
            CHIRAJ PRAJAPATI
          </Typography>
        </Box>
        <Box sx={{ backgroundColor: '#f0f0f0', height: 74 }}>
        <Stack direction="row" spacing={1} justifyContent="space-between" maxHeight="520px" sx={{ marginTop: '10px', marginBottom: '10px' }}>
        <InvertedSemiButton number = "14" />
        <Typography variant="body2" fontSize="12px">Answered</Typography>
        <CircleButton number = "10" />
        <Typography variant="body2" fontSize="12px">Marked</Typography>
        <RectangularButton number = "15" sx={{ minWidth: '25px' }} />
        <Typography variant="body2" fontSize="12px">Not Visited</Typography>
      </Stack>
      <Stack direction="row" spacing={1} justifyContent="space-between" maxHeight="520px" sx={{ marginTop: '10px', marginBottom: '10px' }}>
      <CircleButton number="10" sx = {{ backgroundColor : 'gold' }} />
        <Typography variant="body2" fontSize="12px">Marked and Answered</Typography>
        <SemiCircularButton number = "15" />
        <Typography variant="body2" fontSize="12px">Not Answered</Typography>
      </Stack>
    </Box>
        <Box
          sx={{
            backgroundColor: '#e0dede',
            padding: '10px',
            color: '#000', 
            paddingLeft: '20px', 
          }}
        >
          SECTION: English Language
        </Box>

        <Box
          sx={{
            border: '1px solid #ccc', // Add a border around the box
            padding: '16px', // Add some padding to the box
            height: 404,
            backgroundColor: '#f0f0f0'
          }}
        >
         <Stack direction="row" spacing={2}>
        <SemiCircularButton number = "1"/>
        <SemiCircularButton number = "2"/>
        <SemiCircularButton number = "3"/>
        <SemiCircularButton number = "4"/>
        <SemiCircularButton number = "5"/>
    </Stack>
    <Stack direction="row" spacing={2} sx={{ marginTop: '10px', marginBottom: '10px' }}>
      <SemiCircularButton number = "6" />
      <SemiCircularButton number = "7" />
      <SemiCircularButton number = "8" />
      <SemiCircularButton number = "9" />
      <SemiCircularButton number = "10" />
    </Stack>
    <Stack direction="row" spacing={2} sx={{ marginTop: '10px', marginBottom: '10px' }}>
      <SemiCircularButton number = "11" />
      <SemiCircularButton number = "12" />
      <SemiCircularButton number = "13" />
      <SemiCircularButton number = "14" />
      <SemiCircularButton number = "15" />
    </Stack>
    <Stack direction="row" spacing={2} sx={{ marginTop: '10px', marginBottom: '10px' }}>
        <SemiCircularButton number = "16" />
        <SemiCircularButton number = "17" />
        <SemiCircularButton number = "18" />
        <SemiCircularButton number = "19" />
        <SemiCircularButton number = "20" />
    </Stack>
    <Stack direction="row" spacing={2} sx={{ marginTop: '10px', marginBottom: '10px' }}>
        <RectangularButton number = "21"/>
        <RectangularButton number = "22"/>
        <RectangularButton number = "23"/>
        <RectangularButton number = "24"/>
        <RectangularButton number = "25"/>
    </Stack>
    <Stack direction="row" spacing={2} sx={{ marginTop: '10px', marginBottom: '10px' }}>
        <RectangularButton number = "26"/>
        <RectangularButton number = "27"/>
        <RectangularButton number = "28"/>
        <RectangularButton number = "29"/>
        <RectangularButton number = "30"/>
    </Stack>
          
        </Box>
        <Box>

       <Stack direction="row" spacing={0}>
       <Button variant="contained" color="primary" sx={{ marginRight: 2, backgroundColor: '#FF9AAE' }}>
             Quituion paper
            </Button>
      <Button variant="contained" color="primary" sx={{ marginRight: 2, backgroundColor: '#FF9AAE'  }}>
             Instruction
            </Button>
       </Stack>
          <Box>
          <Button variant="contained" color="primary" sx={{ marginLeft: '25%', marginTop: '10px', marginRight: '2px', backgroundColor: '#FF9AAE' }}>n
             Submit Test
            </Button>
          </Box>
        
          </Box>
        
      </Drawer>
    </div>
  );
}

export default Sidebar;
