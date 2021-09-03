import React from "react";
import { useParams } from "react-router-dom";
import Sharing from "../components/home/sharing";
import StartBtn from "../components/home/startbtn";
import Name from "../components/ending/name";
import { Box } from "@material-ui/core";
function Ending() {
  const type = useParams().type;
  console.log(type);
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
          <img
            src={process.env.PUBLIC_URL + "/image/d1.jpg"}
            width="100%"
            alt="ending"
          />
        </Box>
        <Box my={2}>
          <Name type={type} />
        </Box>
        <Box my={2} width="100%">
          <StartBtn sentence="RESTART" />
        </Box>
        <Box my={2} width="100%">
          <Sharing />
        </Box>
      </Box>
    </Box>
  );
}

export default Ending;
