import React from "react";
import { ButtonBase } from "@material-ui/core";
function KakaoShare(props) {
  React.useEffect(() => {
    const link = props.url;
    console.log(link);

    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.REACT_APP_KAKAO_KEY);
    }
    window.Kakao.Link.createCustomButton({
      container: "#btn",
      templateId: 60422,
      templateArgs: {
        path: link,
      },
    });
  }, []);

  return (
    <ButtonBase size={props.size} id="btn">
      <img
        src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"
        height={props.size}
      />
    </ButtonBase>
  );
}

export default KakaoShare;
