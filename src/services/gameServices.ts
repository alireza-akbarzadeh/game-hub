import { Game } from "../hooks/useGames";
import APICLient from "./api-client";

export default new APICLient<Game>("/games");
