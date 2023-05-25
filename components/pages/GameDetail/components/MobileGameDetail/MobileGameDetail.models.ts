import { Game } from '../../../../../api/boardgamesAtlas/models/getGames';

export interface IMobileGameDetailProps {
  savedGameData: Game;
  gameMechanicsLabels: string[];
  gameCategoriesLabels: string[];
}
