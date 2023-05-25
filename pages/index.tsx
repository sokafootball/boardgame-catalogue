import {
  Alert,
  Box,
  Container,
  ImageList,
  LinearProgress,
} from '@mui/material';
import BGCard from '../components/BGCard/BGCard';
import { useContext, useEffect, useState } from 'react';
import { ScreenSizeContext } from '../providers/ScreenSizeProvider';
import { IScreenSizeType } from '../hooks/UseScreenType';
import { useLazyGetGamesQuery } from '../api/boardgamesAtlas';
import SearchBar from '../components/SearchBar/SearchBar';
import { SearchBarFilters } from '../components/SearchBar/SearchBar.models';
import { parseObjValuesFromNumbersToString } from '../utils';
import { GameModel } from '../api/boardgamesAtlas/models/getGames';
import { searchResultsSessionStorageKey } from '../constants';
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
  const [savedSearchData, setSavedSearchData] = useState<GameModel>();

  const getSearchDataFromSessionStorage = () => {
    const savedData = sessionStorage.getItem(searchResultsSessionStorageKey);
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setSavedSearchData(parsedData);
    }
  };

  const handleFiltersChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    let formattedValue =
      Number.isNaN(Number(value)) || value == '' ? value : Number(value);
    setFilters((prevState) => ({
      ...prevState,
      [name]: formattedValue,
    }));
  };

  useEffect(() => {
    getSearchDataFromSessionStorage();
  }, []);

  useEffect(() => {
    if (data?.count > 0) {
      sessionStorage.setItem(
        searchResultsSessionStorageKey,
        JSON.stringify(data)
      );
      getSearchDataFromSessionStorage();
    }
  }, [data]);

  const handleConfirmSearch = () => {
    const formattedFilters = parseObjValuesFromNumbersToString(filters);
    setGetGames(formattedFilters);
  };

  const handleClearFilters = () => {
    setFilters(defaultFilters);
  };

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
          {isSuccess && savedSearchData?.count === 0 && (
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
          {savedSearchData?.count > 0 && (
            <ImageList
              cols={screenSize.isMobile ? 1 : screenSize.isTablet ? 2 : 3}
              sx={{
                justifyItems: 'center',
                alignItems: 'center',
                overflow: 'hidden',
              }}
              gap={20}
            >
              {savedSearchData?.games.map((item, index) => (
                <BGCard key={`card_${index}`} gameData={item} />
              ))}
            </ImageList>
          )}
        </Container>
      </Box>
    </>
  );
};

export default Home;
