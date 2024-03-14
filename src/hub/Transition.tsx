import { Input, List, ListItem, Spinner } from "@chakra-ui/react";
import React, { ChangeEvent, useState, useTransition } from "react";

export const Transition = () => {
  const [isPending, startTransition] = useTransition();
  const [list, setList] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    startTransition(() => {
      let box = [];
      for (let index = 0; index < 2000; index++) {
        box.push(e.target.value);
      }
      setList(box);
    });
  };
  return (
    <div>
      <Input onChange={handleChange} value={input} />
      {isPending ? (
        <Spinner />
      ) : (
        <List spacing={4}>
          {list.map((item, index) => (
            <ListItem key={item + index + Math.random() * 1000}>
              {item}
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};
