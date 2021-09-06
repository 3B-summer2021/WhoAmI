import React, { useEffect } from "react";
import Sharing from "../components/common/sharing";
import PicBtn from "../components/home/picbtn";
import Title from "../components/common/title";
import { Box } from "@material-ui/core";
import useWindowDimensions from "../utils/useWindow";
import { useHistory } from "react-router-dom";

function Home({ type, setType }) {
  const { height } = useWindowDimensions();
  const history = useHistory();
  React.useEffect(() => {
    setType(0);
  }, []);
  function goto() {
    if (type === 1) {
      history.push("/question/study/1");
    } else {
      history.push("/question/play/1");
    }
  }
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
          {type === 0 ? (
            <img
              src={process.env.PUBLIC_URL + "/image/main_theme.png"}
              width="100%"
              alt="main"
            />
          ) : (
            <video
              src={process.env.PUBLIC_URL + "/image/video" + type + ".mp4"}
              width="100%"
              autoPlay="true"
              poster={process.env.PUBLIC_URL + "/image/main_theme.png"}
              onEnded={() => goto()}
            />
          )}
        </Box>
        <Box my={2} width="100%" display="flex" flexDirection="row">
          <Box mr={2} width="50%">
            <PicBtn
              sentence="수능은 나의 목표 START"
              val={1}
              setType={setType}
            />
          </Box>
          <Box width="50%">
            <PicBtn
              sentence="자유로운 영혼의 소유자 START"
              val={2}
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
