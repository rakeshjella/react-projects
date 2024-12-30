import React, { useEffect, useLayoutEffect, useState } from "react";

const UseLayoutEffectHook1 = () => {
  const [color, setColor] = useState("red");

  useEffect(() => {
    console.log("useEffect running");
    setColor("blue");
  }, []);

  useLayoutEffect(() => {
    console.log("useLayoutEffect running");
    setColor("green");
  }, []);

  return <div style={{ color }}>Text Color</div>;
};

export default UseLayoutEffectHook1;
