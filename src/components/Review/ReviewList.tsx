import { Card, CardBody, CardHeader, GridItem, Text } from "@chakra-ui/react";
import { Comment } from "../../hooks/useGetComment";

export const ReviewList = (props: Comment) => {
  const { body, email, name } = props;

  return (
    <GridItem w="100%">
      <Card>
        <CardHeader>
          <Text fontSize={"xl"}>{name.toUpperCase()}</Text>
        </CardHeader>
        <CardBody>
          <Text fontSize={"2xl"}>{email}</Text>
          <Text>{body}</Text>
        </CardBody>
      </Card>
    </GridItem>
  );
};
