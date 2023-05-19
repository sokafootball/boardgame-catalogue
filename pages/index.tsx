import { Container, ImageList } from '@mui/material';
import BGCard from '../components/BGCard/BGCard';
import { useContext, useEffect, useState } from 'react';
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
  const [setGetGames, { data, isLoading, isError }, lastPromiseInfo] =
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
      <Container>
        <SearchBar
          filters={filters}
          handleFiltersChange={handleFiltersChange}
          handleConfirmSearch={handleConfirmSearch}
          handleClearFilters={handleClearFilters}
        />
        {isLoading && <p>loading...</p>}
        {data !== undefined && (
          <ImageList
            cols={screenSize.isMobile ? 1 : screenSize.isTablet ? 2 : 4}
            sx={{ justifyItems: 'center' }}
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
    </>
  );
};

export default Home;
