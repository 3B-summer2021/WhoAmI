import React from "react";
import { Avatar, Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

function Title(props) {
  const classes = useStyles();
  return (
    <Box display="flex" flexDirection="row" alignItems="center">
      <Avatar
        alt="cucumber institute"
        src={process.env.PUBLIC_URL + "/image/d1.jpg"}
        className={props.size >= 20 ? classes.large : classes.small}
      />
      <Box ml={2} fontSize={props.size}>
        내가 수능 과목이라면?
      </Box>
    </Box>
  );
}

export default Title;
