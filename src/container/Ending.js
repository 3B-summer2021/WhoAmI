import React from "react";
import { useParams } from "react-router-dom";
import Sharing from "../components/home/sharing";
import StartBtn from "../components/home/startbtn";
import Name from "../components/ending/name";
function Ending() {
  const type = useParams().type;
  console.log(type);
  return (
    <div>
      <Name type={type} />
      <br />
      <StartBtn sentence="RESTART" />
      <br />
      <Sharing />
    </div>
  );
}

export default Ending;
