import React from "react";
import { useParams } from "react-router-dom";
import Answer from "../components/question/answer";
import q_list from "../data/question_list";
import { Box } from "@material-ui/core";
import Title from "../components/common/title";
import useWindowDimensions from "../utils/useWindow";

function Question(props) {
  const id = parseInt(useParams().id);
  // console.log(id);
  const [answer, setAnswer] = React.useState([]);
  const { height, width } = useWindowDimensions();
  const boxWidth = width * 0.9 >= 600 ? 600 * 0.9 : width * 0.9;
  // console.log(height);
  var btnHeight = "";
  // 600 - 504:84, 504-388: 108, 387-323: 132, 156
  if (props.type === 1) {
    if (boxWidth > 504) btnHeight = "84px";
    else if (boxWidth > 388) btnHeight = "108px";
    else if (boxWidth > 323) btnHeight = "132px";
    else btnHeight = "156px";
  } else {
    if (boxWidth > 478) btnHeight = "108px";
    else if (boxWidth > 392) btnHeight = "132px";
    else if (boxWidth > 335) btnHeight = "156px";
    else btnHeight = "180px";
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
        <Box my={2} alignSelf="flex-start">
          <Title size={10}></Title>
        </Box>
        <Box
          my={2}
          width="100%"
          textAlign="center"
          style={{
            wordWrap: "break-word",
            fontSize: "20px",
            color: "#143A00",
            fontWeight: 600,
          }}
          minHeight="70px"
        >
          Question {id} {q_list[id - 1]}
        </Box>
        <Box my={2} width="100%">
          <Answer
            answer={answer}
            setAnswer={setAnswer}
            id={id}
            btnHeight={btnHeight}
            type={props.type}
          />
        </Box>
        <Box
          my={2}
          flexGrow={1}
          display="flex"
          flexDirection="column"
          justifyContent="flex-end"
        >
          <Box>{id} / 8</Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Question;
