import { classes } from "istanbul-lib-coverage";
import React from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
// https://www.npmjs.com/package/react-share
// kakaotalk: https://cheonmro.github.io/2019/04/17/kakao-share/
// https://i5i5.tistory.com/345
// https://actumn.tistory.com/13

function Sharing(props) {
  return (
    <div>
      <FacebookShareButton
        url={"http://3B-summer2021.github.io/WhoAmI"}
        hashtag="#내가수능과목이라면"
      >
        <FacebookIcon size={36} />
      </FacebookShareButton>
      <TwitterShareButton url={"http://3B-summer2021.github.io/WhoAmI"}>
        <TwitterIcon size={36} />
      </TwitterShareButton>
    </div>
  );
}

export default Sharing;
