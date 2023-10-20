import axios from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const key = "8257b43c498c40428c973400f9b32790";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key,
  },
});

// import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: "https://api.rawg.io/api",
//   params: {
//     key: "c7b18323a47d40c394ea5b019646b1f5",
//   },
// });

// class APICLient<T> {
//   endpoint: string;
//   constructor(endpoint: string) {
//     this.endpoint = endpoint;
//   }

//   getAll = () => {
//     return axiosInstance.get<T[]>("/genres").then((res) => res.data);
//   };
//   post = (data: T) => {
//     return axiosInstance.post<T>("/genres", data).then((res) => res.data);
//   };
// }

// export default APICLient;
