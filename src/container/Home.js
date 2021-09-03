import React from "react";
import Sharing from "../components/home/sharing";
import StartBtn from "../components/home/startbtn";
import Title from "../components/common/title";
import { Box } from "@material-ui/core";
function Home() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" width="100%">
      <Box
        maxWidth="600px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="90%"
      >
        <Box my={2}>
          <Title size={20} />
        </Box>
        <Box my={2}>
          <img
            src={process.env.PUBLIC_URL + "/image/d1.jpg"}
            width="100%"
            alt="main"
          />
        </Box>
        <Box my={2} width="100%">
          <StartBtn sentence="START" />
        </Box>
        <Box my={2} width="100%">
          <Sharing />
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
