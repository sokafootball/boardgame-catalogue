import { Game } from '../../api/boardgamesAtlas/models/getGames';

export interface IBGCardProps {
  gameData: Game;
}

export type mechanicID = { id: string };
export type categoryID = { id: string };
