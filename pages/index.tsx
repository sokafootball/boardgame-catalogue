import {
  Alert,
  Box,
  Container,
  ImageList,
  LinearProgress,
} from '@mui/material';
import BGCard from '../components/BGCard/BGCard';
import { useCallback, useContext, useEffect, useState } from 'react';
import { ScreenSizeContext } from '../providers/ScreenSizeProvider';
import { IScreenSizeType } from '../hooks/UseScreenType';
import { useLazyGetGamesQuery } from '../api/boardgamesAtlas';
import SearchBar from '../components/SearchBar/SearchBar';
import { SearchBarFilters } from '../components/SearchBar/SearchBar.models';
import { parseObjValuesFromNumbersToString } from '../utils';
const Home = () => {
  const defaultFilters: SearchBarFilters = {
    name: '',
    gt_min_age: '',
    lt_max_players: '',
    gt_min_players: '',
    gt_min_playtime: '',
    lt_max_playtime: '',
  };
  const [filters, setFilters] = useState<SearchBarFilters>(defaultFilters);
  const [setGetGames, { data, isLoading, isError, isSuccess }] =
    useLazyGetGamesQuery();
  const screenSize: IScreenSizeType = useContext(
    ScreenSizeContext
  ) as IScreenSizeType;

  const handleFiltersChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    let formattedValue =
      Number.isNaN(Number(value)) || value == '' ? value : Number(value);
    setFilters((prevState) => ({
      ...prevState,
      [name]: formattedValue,
    }));
  };

  const handleConfirmSearch = () => {
    const formattedFilters = parseObjValuesFromNumbersToString(filters);
    setGetGames(formattedFilters);
  };

  const handleClearFilters = () => {
    setFilters(defaultFilters);
  };

  useEffect(() => {
    console.log('filters:', filters);
  }, [filters]);

  return (
    <>
      <Container maxWidth="md">
        <SearchBar
          filters={filters}
          handleFiltersChange={handleFiltersChange}
          handleConfirmSearch={handleConfirmSearch}
          handleClearFilters={handleClearFilters}
        />
      </Container>
      <Box mt={10}>
        <Container maxWidth="xl">
          {isSuccess && data?.count === 0 && (
            <Alert
              variant="filled"
              severity="info"
              style={{
                alignItems: 'center',
              }}
            >
              There were no results for your search.
            </Alert>
          )}
          {isLoading && <LinearProgress />}
          {isError && (
            <Alert
              variant="filled"
              severity="error"
              style={{ alignItems: 'center' }}
            >
              There was an error, please try again later.
            </Alert>
          )}
          {data?.games.length > 0 && (
            <ImageList
              cols={screenSize.isMobile ? 1 : screenSize.isTablet ? 2 : 3}
              sx={{ justifyItems: 'center', alignItems: 'center' }}
              gap={20}
            >
              {data.games.map((item, index) => (
                <BGCard
                  key={`card_${index}`}
                  name={item.name}
                  minPlayers={item.min_players}
                  maxPlayers={item.max_players}
                  minPlaytime={item.min_playtime}
                  maxPlaytime={item.max_playtime}
                  minAge={item.min_age}
                  year={item.year_published}
                  description={item.description}
                  thumbnailUrl={item.thumb_url}
                  imageUrl={item.image_url}
                  price={item.price}
                  mechanicsIDs={item.mechanics}
                  categoriesIDs={item.categories}
                />
              ))}
            </ImageList>
          )}
        </Container>
      </Box>
    </>
  );
};

export default Home;
