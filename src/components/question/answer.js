import React from "react";
import { useHistory } from "react-router-dom";

function Answer({ answer, setAnswer, id }) {
  const history = useHistory();
  const NextPage = () => {
    if (id < 8) {
      const len = id + 1;
      setAnswer(answer.concat("hi"));
      history.push("/question/" + len);
    } else {
      history.push("/ending/shy");
    }
  };
  // console.log(id);
  return (
    <div>
      <button onClick={() => NextPage()}>click</button>
    </div>
  );
}

export default Answer;
