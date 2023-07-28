import Rightbar from "./components/rightbar";
import Feed from "./components/feed";
import { Box, Stack, ThemeProvider } from "@mui/material";
import Navbar from "./components/navbar";
import Topbar from "./components/topbar";
import Sidebar from "./components/sidebar";
import Bottombar from "./components/bottombar";
import theme from "./theme";
import Middlebar from "./components/middlebar";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
      <Navbar/>
      <Topbar/>
      <Middlebar />
      <Stack direction="row" spacing={0} justifyContent="space-between" maxHeight="520px">
        <Feed/>
        <Rightbar/>
        <Sidebar/>
        </Stack>
        <Bottombar/>
      </Box>
    </ThemeProvider>
  );
}

export default App;
