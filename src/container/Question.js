import React from "react";
import { useParams } from "react-router-dom";
import Answer from "../components/question/answer";
import q_list from "../data/question_list";
import { Box } from "@material-ui/core";
function Question(props) {
  const id = parseInt(useParams().id);
  // console.log(id);
  const [answer, setAnswer] = React.useState([]);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" width="100%">
      <Box
        maxWidth="600px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="90%"
      >
        <Box my={2} textAlign="center" style={{wordWrap
        : "break-word"}}>
          Question {id} {q_list[id - 1]}
        </Box>
        <Box my={2} width="100%">
          <Answer answer={answer} setAnswer={setAnswer} id={id} />
        </Box>
      </Box>
    </Box>
  );
}

export default Question;
