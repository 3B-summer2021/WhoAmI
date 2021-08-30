import React from "react";
import { useHistory } from "react-router-dom";
import a_list_1 from "./answer_list_1";
import a_list_2 from "./answer_list_2";

function Answer({ answer, setAnswer, id }) {
  const history = useHistory();
  const NextPage = () => {
    if (id < 8) {
      const len = id + 1;
      /*setAnswer(answer.concat(0));*/
      history.push("/question/" + len);
    } else {
      history.push("/ending");
    }
  };
  // console.log(id);
  return (
      <div>
        <button onClick={() => {NextPage(); setAnswer(answer.concat(0));}}>{a_list_1[id-1]}</button>
        <button onClick={() => {NextPage(); setAnswer(answer.concat(1));}}>{a_list_2[id-1]}</button>
      </div>
  );
}

console.log(answer)
export default Answer;