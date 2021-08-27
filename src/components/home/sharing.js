import { classes } from "istanbul-lib-coverage";
import React from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import { ButtonBase, Box } from "@material-ui/core";
// https://www.npmjs.com/package/react-share
// kakaotalk: http://3B-summer2021.github.io/WhoAmI2019/04/17/kakao-share/
// https://i5i5.tistory.com/345
// https://actumn.tistory.com/13

function Sharing(props) {
  return (
    <Box display="flex" alignItems="center">
      <FacebookShareButton
        url={"http://3B-summer2021.github.io/WhoAmI"}
        hashtag="#내가수능과목이라면"
      >
        <FacebookIcon size={36} />
      </FacebookShareButton>
      <TwitterShareButton url={"http://3B-summer2021.github.io/WhoAmI"}>
        <TwitterIcon size={36} />
      </TwitterShareButton>
      <ButtonBase id="kakao-link-btn" height={36}>
        <img
          src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"
          height={36}
        />
      </ButtonBase>
    </Box>
  );
}

export default Sharing;
