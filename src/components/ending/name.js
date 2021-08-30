import { Box, Typography } from "@material-ui/core";
import React from "react";
import description from "../../data/description";
function Name(props) {
  const name = props.type;
  return (
    <Box display="flex" flexDirection="column">
      <Typography variant="h2">{description[name][0]}</Typography>
      <Typography variant="body1">{description[name][1]}</Typography>
    </Box>
  );
}

export default Name;
