import { UseQueryResult, useQuery } from "@tanstack/react-query";
import axios from "axios";
import ms from "ms";
import { QueryKey } from "./QueryKey";

export type Comment = {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
};

export const useGetComment = (): UseQueryResult<Comment[], Error> => {
  const handFetchCommnet = async () => {
    try {
      const response = await axios.get<Comment[]>(
        "https://jsonplaceholder.typicode.com/comments"
      );
      return response.data;
    } catch (error) {
      console.log("something went wrong", error);
      throw new Error("Failed to fetch comments");
    }
  };
  return useQuery<Comment[], Error>({
    queryKey: [QueryKey.COMMENTS],
    queryFn: handFetchCommnet,
    staleTime: ms("24"),
    select: (data: Comment[]) => {
      // Reverse the array of comments
      return data.reverse();
    },
  });
};
