import React from "react";
import { useParams } from "react-router-dom";
import Sharing from "../components/common/sharing";
import StartBtn from "../components/ending/startbtn";
import Name from "../components/ending/name";
import Title from "../components/common/title";
import { Box } from "@material-ui/core";
import Pairs from "../components/ending/pairs";
import useWindowDimensions from "../utils/useWindow";

function Ending() {
  const type = useParams().type;
  // console.log(type);
  const { height } = useWindowDimensions();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="100%"
      style={{
        minHeight: height + "px",
        maxHeight: height + "px",
      }}
    >
      <Box
        maxWidth="600px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="90%"
        style={{
          minHeight: height + "px",
          maxHeight: height + "px",
        }}
      >
        <Box my={2} alignSelf="flex-start">
          <Title size={10}></Title>
        </Box>
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
          <Pairs type={type} />
        </Box>
        <Box my={2} width="100%">
          <StartBtn sentence="RESTART" />
        </Box>
        <Box
          width="100%"
          flexGrow={1}
          display="flex"
          flexDirection="column"
          justifyContent="flex-end"
        >
          <Box width="100%">
            <Sharing />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Ending;
