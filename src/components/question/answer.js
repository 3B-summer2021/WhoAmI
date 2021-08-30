import React from "react";
import { useHistory } from "react-router-dom";
import {a_list_1, a_list_2} from "./answer_list";

function Answer({ answer, setAnswer, id }) {
  const history = useHistory();
  const NextPage = (a) => {
    if (id < 8) {
      const len = id + 1;
      console.log(a);
      setAnswer(answer.concat(a));
      history.push("/question/" + len);
    } else {
      history.push("/ending");
    }
  };
  console.log(answer);
  return (
      <div>
        <button onClick={()=>NextPage(0)}>{a_list_1[id-1]}</button>
        <button onClick={()=>NextPage(1)}>{a_list_2[id-1]}</button>
      </div>
  );
}


export default Answer;