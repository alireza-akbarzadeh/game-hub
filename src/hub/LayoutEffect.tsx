import { Button } from "@chakra-ui/react";
import { useLayoutEffect, useRef, useState } from "react";

export const LayoutEffect = () => {
  const [show, setShow] = useState(false);
  const popup = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    if (popup.current == null || button.current == null) return;
    const { bottom } = button.current.getBoundingClientRect();
    popup.current.style.top = `${bottom + 25}px`;
  }, [show]);

  //   useEffect(() => {
  //     if (popup.current == null || button.current == null) return;
  //     const { bottom } = button.current.getBoundingClientRect();
  //     popup.current.style.top = `${bottom + 25}px`;
  //   }, [show]);

  return (
    <div>
      <Button onClick={() => setShow((prev) => !prev)} ref={button}>
        popup
      </Button>
      {show && (
        <div style={{ position: "absolute" }} ref={popup}>
          this is popup
        </div>
      )}
    </div>
  );
};
