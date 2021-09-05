import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

function StartBtn(props) {
  const history = useHistory();
  function goto(sentence) {
    if (sentence === "RESTART") {
      history.push("/");
    } else {
      history.push("/question/1");
    }
  }
  return (
    <Button
      variant="contained"
      onClick={() => goto(props.sentence)}
      fullWidth={true}
      style={{ fontFamily: "inherit", backgroundColor: "#279D6F" }}
    >
      {props.sentence}
    </Button>
  );
}

export default StartBtn;
