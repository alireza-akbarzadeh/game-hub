import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  Grid,
  GridItem,
  Input,
  Skeleton,
  Spinner,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useGetComment } from "../hooks/useGetComment";
import { PostComment, usePostComment } from "../hooks/usePostComment";

const Review = () => {
  const [formData, setFormData] = useState<PostComment>({
    body: "",
    title: "",
    userId: 0,
  });
  const { data, isLoading } = useGetComment();
  const { mutate, isPending } = usePostComment();

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormData = async () => {
    mutate(formData);
  };

  if (isPending) return <Spinner />;

  return (
    <Container maxW="container.lg">
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem w="100%">
          <Input
            onChange={handleChange}
            name="title"
            placeholder="Enter A Title"
          />
        </GridItem>
        <GridItem w="100%">
          <Input
            onChange={handleChange}
            name="userId"
            placeholder="Enter A user Id"
          />
        </GridItem>
        <GridItem w="100%">
          <Textarea
            onChange={handleChange}
            name="body"
            placeholder="Enter A Body"
          />
        </GridItem>
      </Grid>
      <Button mt={4} onClick={handleFormData}>
        submit form
      </Button>
      <Grid templateColumns="repeat(2, 1fr)" gap={6} mt={2}>
        {isLoading
          ? Array.from({ length: 8 }).map((_item, index) => (
              <SkeletonCard key={index + Math.random() * 1000} />
            ))
          : data?.map((comment) => {
              return (
                <GridItem w="100%" key={comment.id}>
                  <Card>
                    <CardHeader>
                      <Text fontSize={"xl"}>{comment.name.toUpperCase()}</Text>
                    </CardHeader>
                    <CardBody>
                      <Text fontSize={"2xl"}>{comment.email}</Text>
                      <Text>{comment.body}</Text>
                    </CardBody>
                  </Card>
                </GridItem>
              );
            })}
      </Grid>
    </Container>
  );
};

export default Review;

const SkeletonCard = () => (
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
