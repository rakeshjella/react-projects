import React, { useRef } from "react";
import MyInput from "./MyInput";


// const MyInput = forwardRef((props, ref) => {
//     const inputRef = useRef();
  
//     useImperativeHandle(ref, () => ({
//       focus: () => {
//         inputRef.current.focus();
//       },
//       clear: () => {
//         inputRef.current.value = "";
//       },
//     }));
  
//     return <input ref={inputRef} {...props} />;
//   });
// Parent Component
const UseImperativeHandle1 = () => {
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus();
  };

  const handleClear = () => {
    inputRef.current.clear();
  };

  return (
    <div>
      <MyInput ref={inputRef} />
      <button onClick={handleFocus}>Focus Input</button>
      <button onClick={handleClear}>Clear Input</button>
    </div>
  );
};

export default UseImperativeHandle1;
