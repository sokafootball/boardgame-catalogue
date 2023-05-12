import { Container, ImageList } from '@mui/material';
import BGCard from '../components/BGCard/BGCard';
import { useContext } from 'react';
import { ScreenSizeContext } from '../providers/ScreenSizeProvider';
import { IScreenSizeType } from '../hooks/UseScreenType';
import { useGetGamesQuery } from '../api/boardgamesAtlas';
const Home = () => {
  const { data, isLoading } = useGetGamesQuery({ name: 'catan' });
  const screenSize: IScreenSizeType = useContext(
    ScreenSizeContext
  ) as IScreenSizeType;

  return (
    <>
      <Container>
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
