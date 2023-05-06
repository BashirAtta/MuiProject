import React, { useState } from "react";
import FeedBar from "./component/FeedBar";
import RightBar from "./component/RightBar";
import SideBar from "./component/SideBar";
import Stack from '@mui/material/Stack';
import Appbar from "./component/AppBar";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box } from "@mui/system";

import Divider from '@mui/material/Divider';

function App() {
  const [mode, setMode] = useState("light");


  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  function changeMode(){
    setMode(preVal=>{
      if (preVal==="dark")
      return "light"
      else
      return "dark"
    });
  }

  return (
   
      
      <ThemeProvider theme={darkTheme} >
      <Box bgcolor={"background.default"} color={"text.primary"} margin={0} >
        <Appbar />
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-between"
          divider=<Divider orientation="vertical" flexItem />
        >
          <SideBar setMode={changeMode} mode={mode} />
          <FeedBar />
          <RightBar />
        </Stack>
        </Box>
        </ThemeProvider>

    
   
  );
}

export default App;
