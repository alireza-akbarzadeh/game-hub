import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export type PostComment = {
  id?: number;
  title: string;
  body: string;
  userId: number;
};

export const usePostComment = () => {
  const handlePost = (params: PostComment) => {
    return axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        body: {
          ...params,
        },
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((res) => res.data);
  };
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: handlePost,
    onMutate: (variables) => {
      // You can perform optimistic updates here
      console.log({ variables });
    },
    onError: (error, variables, context) => {
      // You can handle errors here
      console.log(error);
    },
    onSuccess: (data, variables, context) => {
      console.log("Comment posted successfully");
      console.log("Response data:", data);
      // You can perform additional actions here after successful mutation
    },
    onSettled: (data, error, variables, context) => {
      // You can perform additional actions here after completion
      //   queryClient.invalidateQueries([QueryKey.COMMENTS]);
    },
  });
};
