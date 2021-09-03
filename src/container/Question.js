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
  const { width } = useWindowDimensions();
  const boxWidth = width * 0.9 >= 600 ? 600 : width * 0.9;
  // console.log(boxWidth);
  var btnHeight = "";
  // 600 - 504:84, 504-388: 108, 387-323: 132, 156
  if (boxWidth > 504) btnHeight = "84px";
  else if (boxWidth > 388) btnHeight = "108px";
  else if (boxWidth > 323) btnHeight = "132px";
  else btnHeight = "156px";
  return (
    <Box display="flex" flexDirection="column" alignItems="center" width="100%">
      <Box
        maxWidth="600px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="90%"
      >
        <Box my={2} alignSelf="flex-start">
          <Title size={10}></Title>
        </Box>
        <Box
          my={2}
          width="100%"
          textAlign="center"
          style={{ wordWrap: "break-word" }}
          minHeight="50px"
        >
          Question {id} {q_list[id - 1]}
        </Box>
        <Box my={2} width="100%">
          <Answer
            answer={answer}
            setAnswer={setAnswer}
            id={id}
            btnHeight={btnHeight}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Question;
