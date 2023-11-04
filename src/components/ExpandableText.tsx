import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";
interface Props {
  children: String;
}
const ExpandableText = ({ children }: Props) => {
  const [expanded, setexpanded] = useState<boolean>(false);
  const limit = 300;
  if (!children) return null;
  if (children.length <= 300) return <Text>{children}</Text>;
  const summary = expanded ? children : children.substring(0, limit) + "...";
  return (
    <Text>
      {summary}
      <Button
        marginLeft={1}
        colorScheme="yellow"
        size={"xs"}
        fontWeight={"bold"}
        onClick={() => setexpanded(!expanded)}
      >
        {expanded ? "show less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
