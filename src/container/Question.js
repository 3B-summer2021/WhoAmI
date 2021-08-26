import React from "react";
import { useParams } from "react-router-dom";
import Answer from "../components/question/answer";
function Question(props) {
  const id = parseInt(useParams().id);
  // console.log(id);
  return (
    <div>
      Qusetion {id}
      <Answer answer={props.answer} setAnswer={props.setAnswer} id={id} />
    </div>
  );
}

export default Question;
