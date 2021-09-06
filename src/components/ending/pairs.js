import { Box } from "@material-ui/core";
import React from "react";

function Pairs({ type }) {
  var pair = [];
  if (type === "korean") pair = ["math", "history"];
  else if (type === "english") pair = ["foreign", "career"];
  else if (type === "social") pair = ["career", "foreign"];
  else if (type === "history") pair = ["science", "korean"];
  else if (type === "science") pair = ["history", "math"];
  else if (type === "career") pair = ["history", "english"];
  else pair = ["english", "social"];

  return (
    <Box display="flex" flexDirection="row" alignItems="center" width="100%">
      <Box mr={2} flex={1}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Box my={0.5} textAlign="center">
            찾았다...
            <br />
            마이 데.스.티.니.♥
          </Box>
          <Box my={0.5}>
            <img
              src={process.env.PUBLIC_URL + "/image/d1.jpg"}
              width="100%"
              alt={pair[0]}
            />
          </Box>
          <Box my={0.5}> {pair[0]}</Box>
        </Box>
      </Box>
      <Box flex={1}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Box my={0.5} textAlign="center">
            이번 생엔...
            <br />
            운명이 아닌가봐요...★
          </Box>
          <Box my={0.5}>
            <img
              src={process.env.PUBLIC_URL + "/image/d1.jpg"}
              width="100%"
              alt={pair[1]}
            />
          </Box>
          <Box my={0.5}> {pair[1]}</Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Pairs;
