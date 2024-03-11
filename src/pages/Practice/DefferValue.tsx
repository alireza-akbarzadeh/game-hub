import { Input } from "@chakra-ui/react";
import React, { ChangeEvent, useDeferredValue, useMemo, useState } from "react";

export const DefferValue = () => {
  const [input, setInput] = useState<string>("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <Input type="text" onChange={handleChange} value={input} />
      <List input={input} />
    </div>
  );
};

const List = ({ input }: { input: string }) => {
  const LIST_SIZE = 20000;
  const defferValue = useDeferredValue(input);
  const list = useMemo(() => {
    let l = [];
    for (let index = 0; index <= LIST_SIZE; index++) {
      l.push(<div key={index}>{defferValue}</div>);
    }
    return l;
  }, [defferValue]);

  return list;
};
