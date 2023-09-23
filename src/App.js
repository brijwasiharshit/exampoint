import Rightbar from "./components/rightbar";
import Feed from "./components/feed";
import { Box, Stack, ThemeProvider, useMediaQuery } from "@mui/material";
import Navbar from "./components/navbar";
import Topbar from "./components/topbar";
import Sidebar from "./components/sidebar";
import Bottombar from "./components/bottombar";
import theme from "./theme";
import Middlebar from "./components/middlebar";

function App() {
  // Use a media query hook to check if the screen size is mobile
  const isMobile = useMediaQuery('(max-width:600px)'); // Adjust the breakpoint as needed

  return (
    <ThemeProvider theme={theme}>
      <Box>
        {!isMobile && <Navbar />} {/* Render Navbar only if not on a mobile device */}
        <Topbar />
        <Middlebar />
        
        {isMobile ? (
          <Stack spacing={0} maxHeight="520px">
            <Feed />
            <Rightbar />
            <Sidebar />
          </Stack>
        ) : (
          <Stack direction="row" spacing={0} justifyContent="space-between" maxHeight="520px">
            <Feed />
            <Rightbar />
            <Sidebar />
          </Stack>
        )}
        
        <Bottombar />
      </Box>
    </ThemeProvider>
  );
}

export default App;
