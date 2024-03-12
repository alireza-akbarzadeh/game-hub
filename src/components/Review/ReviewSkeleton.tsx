import {
  Card,
  CardBody,
  CardHeader,
  GridItem,
  Skeleton,
  Text,
} from "@chakra-ui/react";

export const SkeletonCard = () => (
  <GridItem w="100%" mt={4}>
    <Card>
      <CardHeader mt={2}>
        <Skeleton height={"20px"} width="100px" />
      </CardHeader>
      <CardBody>
        <Text my={2}>
          <Skeleton height={"20px"} width="100px" />
        </Text>
        <Text>
          <Skeleton height={"40px"} width="100%" />
        </Text>
      </CardBody>
    </Card>
  </GridItem>
);
