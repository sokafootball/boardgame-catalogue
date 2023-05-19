export interface ISearchBarProps {
  filters: SearchBarFilters;
  handleFiltersChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleConfirmSearch: () => void;
  handleClearFilters: () => void;
}

export interface SearchBarFilters {
  name: string;
  gt_min_age: string;
  gt_min_players: string;
  lt_max_players: string;
  gt_min_playtime: string;
  lt_max_playtime: string;
}
