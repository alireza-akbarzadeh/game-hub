import { Game } from "../entities/Game";
import APICLient from "./api-client";

export default new APICLient<Game>("/games");
