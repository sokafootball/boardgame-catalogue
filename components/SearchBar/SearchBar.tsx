import { ISearchBarProps } from './SearchBar.models';
import { Box, Button, TextField, Tooltip } from '@mui/material';
import { AccessTime, Person } from '@mui/icons-material';
import { ScreenSizeContext } from '../../providers/ScreenSizeProvider';
import { IScreenSizeType } from '../../hooks/UseScreenType';
import { ChangeEvent, useContext } from 'react';
import { blue } from '@mui/material/colors';

const SearchBar = ({
  filters,
  handleFiltersChange,
  handleConfirmSearch,
  handleClearFilters,
}: ISearchBarProps) => {
  const screenSize: IScreenSizeType = useContext(
    ScreenSizeContext
  ) as IScreenSizeType;

  const maxNumberInputLength = 3;
  const maxStringInputLength = 25;

  const onFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const valueType = e.target.type;
    if (
      (valueType === 'text' || valueType === 'search') &&
      value.length > maxStringInputLength
    )
      return;
    if (valueType === 'number' && value.length > maxNumberInputLength) return;
    handleFiltersChange(e);
  };

  return (
    <Box mt={2} display={'flex'} flexDirection={'column'} gap={1}>
      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        sx={{ border: 1 }}
        p={2}
        gap={1}
        border={2}
        borderColor={'primary.main'}
        borderRadius={'4px'}
      >
        <TextField
          label="Game name"
          type="search"
          fullWidth
          value={filters.name}
          name="name"
          onChange={onFilterChange}
          onKeyDown={(e) => {
            if (e.key == 'Enter') {
              handleConfirmSearch();
            }
          }}
        />
        <Box
          display={'flex'}
          flexDirection={screenSize.isMobile ? 'column' : 'row'}
          justifyContent={screenSize.isMobile ? 'center' : 'space-between'}
          alignItems={'center'}
          gap={1}
        >
          <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            gap={1}
          >
            <Tooltip title="Number of players">
              <Person fontSize="medium" />
            </Tooltip>
            <TextField
              size="small"
              label="Min"
              type="number"
              value={filters.gt_min_players?.toString()}
              name="gt_min_players"
              onChange={onFilterChange}
            />
            <TextField
              size="small"
              label="Max"
              type="number"
              value={filters.lt_max_players?.toString()}
              name="lt_max_players"
              onChange={onFilterChange}
            />
          </Box>
          <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            gap={1}
          >
            <Tooltip title="Average playtime in minutes">
              <AccessTime fontSize="medium" />
            </Tooltip>
            <TextField
              size="small"
              label="Min"
              type="number"
              value={filters.gt_min_playtime?.toString()}
              name="gt_min_playtime"
              onChange={onFilterChange}
            />
            <TextField
              size="small"
              label="Max"
              type="number"
              value={filters.lt_max_playtime?.toString()}
              name="lt_max_playtime"
              onChange={onFilterChange}
            />
          </Box>
        </Box>
      </Box>
      {/* buttons box */}
      <Box display={'flex'} justifyContent={'space-between'}>
        <Button
          variant="outlined"
          onClick={handleClearFilters}
          sx={{ borderColor: blue[700] }}
        >
          Clear filters
        </Button>
        <Button variant="contained" onClick={handleConfirmSearch}>
          Search
        </Button>
      </Box>
    </Box>
  );
};
export default SearchBar;
