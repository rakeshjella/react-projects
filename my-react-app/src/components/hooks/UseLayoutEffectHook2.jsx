import React, { useLayoutEffect, useRef, useState } from "react";

const UseLayoutEffectHook2 = () => {
  const divRef = useRef(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    // Measure DOM element height
    const rect = divRef.current.getBoundingClientRect();
    setHeight(rect.height);
  }, []);

  return (
    <div>
      <div ref={divRef}>Hello, I am a box!</div>
      <p>Box height: {height}px</p>
    </div>
  );
};

export default UseLayoutEffectHook2;
