import React from "react";
import { ButtonBase, Box } from "@material-ui/core";

function PicBtn({ sentence, val, setType }) {
  function goto() {
    if (val === 1) {
      setType(1);
    } else {
      setType(2);
    }
  }
  return (
    <ButtonBase
      variant="contained"
      onClick={() => goto()}
      width="100%"
      style={{ fontFamily: "inherit" }}
    >
      <Box display="flex" flexDirection="column">
        <Box>
          <img
            src={process.env.PUBLIC_URL + "/image/d1.jpg"}
            width="100%"
            alt={sentence}
          />
        </Box>
        <Box>{sentence}</Box>
      </Box>
    </ButtonBase>
  );
}

export default PicBtn;
