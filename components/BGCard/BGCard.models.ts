export interface IBGCardProps {
  name: string;
  minPlayers: number;
  maxPlayers: number;
  minPlaytime: number;
  maxPlaytime: number;
  minAge: number;
  year: number;
  description: string;
  thumbnailUrl: string;
  imageUrl: string;
  price: number;
  mechanicsIDs: mechanicID[];
  categoriesIDs: categoryID[];
  descriptionPreview?: string;
}

export type mechanicID = { id: string };
export type categoryID = { id: string };
