import { Button, Input, List, ListItem, Spacer, Text } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";

export const Callback = () => {
  const [number, setNumber] = useState(1);
  const [darkTheme, setDarkTheme] = useState(false);
  const getItems = useCallback(
    (num: number) => {
      return [number, number + num, number + (num + 2)];
    },
    [number]
  );

  const themeStyle = {
    color: darkTheme ? "white" : "black",
    backgroundColor: darkTheme ? "black" : "white",
  };
  return (
    <Spacer gap={7} flexDirection={"column"}>
      <Input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <Button onClick={() => setDarkTheme((prevDark) => !prevDark)}>
        Change Theme
      </Button>
      <Text fontSize={"6xl"} color={"whiteAlpha.200"} style={themeStyle}>
        <List spacing={4}>
          <ListBox getItems={getItems} />
        </List>
      </Text>
    </Spacer>
  );
};

const ListBox = ({ getItems }: { getItems: (num: number) => number[] }) => {
  const [items, setItems] = useState<number[]>([]);

  useEffect(() => {
    console.log("checkout the render");
    setItems(getItems(5));
  }, [getItems]);

  return items.map((items) => <ListItem key={items}>{items}</ListItem>);
};
