import React from "react";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { ButtonBase, Box } from "@material-ui/core";
import { Icon } from "@iconify/react";
import { CopyToClipboard } from "react-copy-to-clipboard";
// https://www.npmjs.com/package/react-share
// kakaotalk: http://3B-summer2021.github.io/WhoAmI2019/04/17/kakao-share/
// https://i5i5.tistory.com/345
// https://actumn.tistory.com/13
// https://hello-bryan.tistory.com/176

function Sharing(props) {
  const url = window.location.href;
  // console.log(url);
  const path = window.location.pathname + window.location.hash;
  const size = "30";
  React.useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.REACT_APP_KAKAO_KEY);
    }
    window.Kakao.Link.createCustomButton({
      container: "#btn",
      templateId: 60422,
      templateArgs: {
        path: path,
      },
    });
  }, [path]);
  return (
    <Box display="flex" alignItems="center" width="100%">
      <FacebookShareButton
        url={url}
        hashtag="#내가수능과목이라면"
        style={{ flex: 1 }}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Icon icon="ri:facebook-circle-fill" width={size} color="#505050" />
        </Box>
      </FacebookShareButton>
      <TwitterShareButton url={url} style={{ flex: 1 }}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Icon icon="ri:twitter-fill" width={size} color="#505050" />
        </Box>
      </TwitterShareButton>
      <ButtonBase id="btn" disableRipple style={{ flex: 1 }}>
        <Icon icon="ri:kakao-talk-fill" width={size} color="#505050" />
      </ButtonBase>
      <CopyToClipboard text={url} style={{ flex: 1 }}>
        <ButtonBase>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Icon icon="ri:links-fill" width={size} color="#505050" />
          </Box>
        </ButtonBase>
      </CopyToClipboard>
    </Box>
  );
}

export default Sharing;
