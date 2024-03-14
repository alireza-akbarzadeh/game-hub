import {
  Button,
  Container,
  Grid,
  GridItem,
  Input,
  Spinner,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import { PostComment, usePostComment } from "../../hooks/usePostComment";

export const ReviewForm = () => {
  const [formData, setFormData] = useState<PostComment>({
    body: "",
    title: "",
    userId: 0,
  });
  const { mutateAsync } = usePostComment();
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormData = async () => {
    await mutateAsync(formData);
  };

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
    </Container>
  );
};

export default ReviewForm;
