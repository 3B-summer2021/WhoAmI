import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { a_list_1, a_list_2 } from "../../data/answer_list";
import { Box, Button } from "@material-ui/core";
const checkType = (answer) => {
  var name = "";
  var ie = 1;
  if (
    (answer[0] === 0 && answer[1] === 1) ||
    (answer[0] === 0 && answer[4] === 1) ||
    (answer[1] === 1 && answer[4] === 1)
  ) {
    ie = 0;
  }
  if (
    (answer[4] === 1 && answer[5] === 0) ||
    (answer[4] === 1 && answer[6] === 1) ||
    (answer[5] === 0 && answer[6] === 1)
  ) {
    // n
    if (answer[7] === 0) {
      // f
      if (ie === 0) {
        name = "korean";
      } else {
        name = "english";
      }
    } else {
      // t
      if (ie === 0) {
        name = "science";
      } else {
        name = "math";
      }
    }
  } else {
    //s
    if (answer[2] === 0) {
      //j
      if (ie === 0) {
        name = "social";
      } else {
        name = "history";
      }
    } else {
      //p
      if (ie === 0) {
        name = "career";
      } else {
        name = "foreign";
      }
    }
  }
  return name;
};
function Answer({ answer, setAnswer, id, btnHeight }) {
  const history = useHistory();

  useEffect(() => {
    if (answer.length !== 8) {
      const len = answer.length + 1;
      history.push("/question/" + len);
    } else {
      const name = checkType(answer);
      history.push("/ending/" + name);
    }
  }, [answer]);

  // const NextPage = (a) => {
  //   if (id < 8) {
  //     const len = id + 1;
  //     // console.log(a);
  //     history.push("/question/" + len);
  //   } else {
  //     useEffect
  //     setAnswer(answer.concat(a), () => checkType(answer));
  //   }
  // };

  return (
    <Box width="100%" display="flex" flexDirection="column" alignItems="center">
      <Box my={2} width="100%">
        <Button
          variant="contained"
          color="#333333"
          fullWidth={true}
          onClick={() => setAnswer(answer.concat(0))}
          style={{
            fontFamily: "inherit",
            minHeight: btnHeight,
            maxHeight: btnHeight,
          }}
        >
          {a_list_1[id - 1]}
        </Button>
      </Box>
      <Box my={2} width="100%">
        <Button
          variant="contained"
          color="secondary"
          fullWidth={true}
          onClick={() => setAnswer(answer.concat(1))}
          style={{
            fontFamily: "inherit",
            minHeight: btnHeight,
            maxHeight: btnHeight,
          }}
        >
          {a_list_2[id - 1]}
        </Button>
      </Box>
    </Box>
  );
}

export default Answer;
