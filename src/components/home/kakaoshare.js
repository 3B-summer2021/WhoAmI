import React from "react";
import { ButtonBase } from "@material-ui/core";
function KakaoShare(props) {
  React.useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.REACT_APP_KAKAO_KEY);
    }
    window.Kakao.Link.createScrapButton({
      container: "#create-kakao-link-btn",
      requestUrl: props.url,
    });
  }, []);

  return (
    <ButtonBase size={props.size} id="create-kakao-link-btn">
      <img
        src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"
        height={props.size}
      />
    </ButtonBase>
  );
}

export default KakaoShare;
