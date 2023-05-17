/* eslint react-hooks/exhaustive-deps: off */

import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num % 3 === 0) {
      faceShowFlag || setFaceShowFlag(true);
    } else {
      faceShowFlag && setFaceShowFlag(false);
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="orange">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="green">私は私です。</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ！</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>ON / OFF</button>
      <p>{num}</p>
      {faceShowFlag && <p>。・゜・(ノД`)・゜・。</p>}
    </>
  );
};

export default App;
