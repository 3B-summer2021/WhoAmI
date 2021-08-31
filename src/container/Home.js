import React from "react";
import Sharing from "../components/home/sharing";
import StartBtn from "../components/home/startbtn";
import Title from "../components/common/title";
import { Box } from "@material-ui/core";
function Home() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box
        maxWidth="600px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        m={2}
      >
        <Title size={20} />
        <Box mb={2}>
          <img
            src={process.env.PUBLIC_URL + "/image/d1.jpg"}
            width="544px"
            height="396px"
          />
        </Box>

        <StartBtn sentence="START" />
        <Sharing />
      </Box>
    </Box>
  );
}

export default Home;
