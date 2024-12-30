import { useState, useRef,useEffect, useLayoutEffect } from "react";

export default function UseLayoutEffecthook3() {
    const [show, setShow] = useState(false);
    const popup = useRef(null);
    const button = useRef(null);

    // useEffect(() => {
    //     // Ensure both refs are initialized before accessing them
    //     if (!button.current || !popup.current) return;

    //     const { bottom } = button.current.getBoundingClientRect();
    //     popup.current.style.top = `${bottom + 25}px`;
    // }, [show]);

    useLayoutEffect(() => {
        // Ensure both refs are initialized before accessing them
        if (!button.current || !popup.current) return;

        const { bottom } = button.current.getBoundingClientRect();
        popup.current.style.top = `${bottom + 25}px`;
    }, [show]);

    return (
        <>
            <button ref={button} onClick={() => setShow((prev) => !prev)}>
                Click here
            </button>
            {show && (
                <div style={{ position: "absolute" }} ref={popup}>
                    Popup block
                </div>
            )}
        </>
    );
}
