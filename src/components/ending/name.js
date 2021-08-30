import { Box, Typography } from "@material-ui/core";
import React from "react";
import description from "../../data/description";
function Name(props) {
  const name = props.type;
  return (
    <Box display="flex" flexDirection="column">
      <h2>{description[name][0]}</h2>
      <Box>{description[name][1]}</Box>
    </Box>
  );
}

export default Name;
