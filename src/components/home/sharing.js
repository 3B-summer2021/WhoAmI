import React from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import { ButtonBase, Box } from "@material-ui/core";
import { Icon } from "@iconify/react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import KakaoShare from "./kakaoshare";
// https://www.npmjs.com/package/react-share
// kakaotalk: http://3B-summer2021.github.io/WhoAmI2019/04/17/kakao-share/
// https://i5i5.tistory.com/345
// https://actumn.tistory.com/13
// https://hello-bryan.tistory.com/176

function Sharing(props) {
  const url = window.location.href;
  console.log(url);
  const path = window.location.pathname + window.location.hash;
  const size = 36;
  return (
    <Box display="flex" alignItems="center">
      <FacebookShareButton url={url} hashtag="#내가수능과목이라면">
        <FacebookIcon size={size} />
      </FacebookShareButton>
      <TwitterShareButton url={url}>
        <TwitterIcon size={size} />
      </TwitterShareButton>
      <KakaoShare url={path} size={size} />
      <CopyToClipboard text={url}>
        <ButtonBase height={size}>
          <Icon icon="akar-icons:link-chain" width={size} />
        </ButtonBase>
      </CopyToClipboard>
    </Box>
  );
}

export default Sharing;
