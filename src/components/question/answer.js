import React from "react";
import { useHistory } from "react-router-dom";
import a_list_1 from "./answer_list_1";
import a_list_2 from "./answer_list_2";

var e_list = []

function Answer({ answer, setAnswer, id }) {
  const history = useHistory();
  const NextPage = () => {
    if (id < 8) {
      const len = id + 1;
      setAnswer(answer.concat("hi"));
      history.push("/question/" + len);
    } else {
      history.push("/ending");
    }
  };
  // console.log(id);
  return (
    <div>
      <button onClick={() => {NextPage(); e_list.push("T");}}>{a_list_1[id-1]}</button>
      <button onClick={() => {NextPage(); e_list.push("F");}}>{a_list_2[id-1]}</button>
    </div>
  );
}

export default Answer;

console.log(e_list)