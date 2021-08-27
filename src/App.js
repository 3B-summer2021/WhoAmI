import "./App.css";
import React from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import Home from "./container/Home";
import Question from "./container/Question";
import Ending from "./container/Ending";
function App() {
  const [answer, setAnswer] = React.useState([]);
  React.useEffect(() => {
    window.Kakao.init(process.env.REACT_APP_KAKAO_KEY);
    window.Kakao.Link.createDefaultButton({
      container: "#kakao-link-btn",
      objectType: "feed",
      content: {
        title: "내가 수능 과목이라면?",
        description:
          "#국어 #수학 #영어 #한국사 #사탐 #과탐 #제2외국어 #직업탐구",
        imageUrl:
          "http://mud-kage.kakao.co.kr/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
        link: {
          mobileWebUrl: "http://3B-summer2021.github.io/WhoAmI",
          webUrl: "http://3B-summer2021.github.io/WhoAmI",
        },
      },
      social: {
        likeCount: 286,
        commentCount: 45,
        sharedCount: 845,
      },
      buttons: [
        {
          title: "웹으로 보기",
          link: {
            mobileWebUrl: "http://3B-summer2021.github.io/WhoAmI",
            webUrl: "http://3B-summer2021.github.io/WhoAmI",
          },
        },
        {
          title: "앱으로 보기",
          link: {
            mobileWebUrl: "http://3B-summer2021.github.io/WhoAmI",
            webUrl: "http://3B-summer2021.github.io/WhoAmI",
          },
        },
      ],
    });
  }, []);
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route
          path="/question/:id"
          render={() => <Question answer={answer} setAnswer={setAnswer} />}
        />
        <Route path="/ending" render={() => <Ending answer={answer} />} />
      </Switch>
    </HashRouter>
  );
}

export default App;
