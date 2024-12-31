
import React, { useRef, useImperativeHandle } from "react";
function MyInput(props, ref) {
    const inputRef = useRef();
  
    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current.focus();
      },
      clear: () => {
        inputRef.current.value = "";
      },
    }));
  
    return <input ref={inputRef} {...props} />;
  };

  export default React.forwardRef(MyInput)