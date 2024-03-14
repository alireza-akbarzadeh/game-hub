import { Container, Grid } from "@chakra-ui/react";
import { useGetComment } from "../../hooks/useGetComment";
import { usePostComment } from "../../hooks/usePostComment";
import ReviewForm from "../Review/ReviewForm";
import { ReviewList } from "../Review/ReviewList";
import { SkeletonCard } from "../Review/ReviewSkeleton";

const Review = () => {
  const { data, isLoading } = useGetComment();
  const { isPending } = usePostComment();
  return (
    <Container maxW="container.lg">
      <ReviewForm />
      <Grid templateColumns="repeat(2, 1fr)" gap={6} mt={2}>
        {isLoading || isPending
          ? Array.from({ length: 8 }).map((_item, index) => (
              <SkeletonCard key={index + Math.random() * 1000} />
            ))
          : data?.map((comment) => (
              <ReviewList {...comment} key={comment.id} />
            ))}
      </Grid>
    </Container>
  );
};

export default Review;
