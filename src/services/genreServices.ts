import { Genre } from "../entities/Genre";
import APICLient from "./api-client";

export default new APICLient<Genre>("/genres");
