import React from "react";
import { useParams } from "react-router-dom";
import Answer from "../components/question/answer";
import q_list from "../data/question_list";
function Question(props) {
  const id = parseInt(useParams().id);
  // console.log(id);
  const [answer, setAnswer] = React.useState([]);

  return (
    <div>
      Question {id} {q_list[id - 1]}
      <Answer answer={answer} setAnswer={setAnswer} id={id} />
    </div>
  );
}

export default Question;
