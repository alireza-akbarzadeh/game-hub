import { Button, Input, Text } from "@chakra-ui/react";
import { useMemo, useState } from "react";

export const Memo = () => {
  const [number, setNumber] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);

  const doubleNumber = useMemo(() => slowFunction(number), [number]);

  const themeStyle = {
    color: darkTheme ? "white" : "black",
    backgroundColor: darkTheme ? "black" : "white",
  };
  return (
    <div>
      <Input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <Button onClick={() => setDarkTheme((prevDark) => !prevDark)}>
        Change Theme
      </Button>
      <Text fontSize={"6xl"} color={"whiteAlpha.200"} style={themeStyle}>
        {doubleNumber}
      </Text>
    </div>
  );
};

function slowFunction(num: number) {
  console.log("calculating number");
  for (let index = 0; index <= 1000000000; index++) {}
  return num * 2;
}
