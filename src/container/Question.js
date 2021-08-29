import React from "react";
import { useParams } from "react-router-dom";
import Answer from "../components/question/answer";
import q_list from "../components/question/question_list";
function Question(props) {
  const id = parseInt(useParams().id);
  // console.log(id);

  return (
    <div>
      Question {id} {q_list[id-1]}
      <Answer answer={props.answer} setAnswer={props.setAnswer} id={id} />
    </div>
  );
}

export default Question;
