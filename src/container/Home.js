import React from "react";
import Sharing from "../components/common/sharing";
import PicBtn from "../components/home/picbtn";
import Title from "../components/common/title";
import { Box } from "@material-ui/core";
import useWindowDimensions from "../utils/useWindow";

function Home({ setType }) {
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
        <Box my={2} width="100%" display="flex" flexDirection="row">
          <Box mr={2} width="50%">
            <PicBtn
              sentence="수능은 나의 목표 START"
              type={1}
              setType={setType}
            />
          </Box>
          <Box width="50%">
            <PicBtn
              sentence="자유로운 영혼의 소유자 START"
              type={2}
              setType={setType}
            />
          </Box>
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

export default Home;
