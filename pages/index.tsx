import { Container, ImageList } from '@mui/material';
import BGCard from '../components/BGCard/BGCard';
import { useContext } from 'react';
import { ScreenSizeContext } from '../providers/ScreenSizeProvider';
import { IScreenSizeType } from '../hooks/UseScreenType';
import { mockItemsData } from '../mocks/itemsData';

const Home = () => {
  const screenSize: IScreenSizeType = useContext(
    ScreenSizeContext
  ) as IScreenSizeType;

  return (
    <>
      <Container>
        <ImageList cols={screenSize.isMobile ? 1 : screenSize.isTablet ? 2 : 4}>
          {mockItemsData.map((item, index) => (
            <BGCard
              key={`card_${index}`}
              name={item.name}
              minPlayers={item.minPlayers}
              maxPlayers={item.maxPlayers}
              minPlaytime={item.minPlaytime}
              maxPlaytime={item.maxPlaytime}
              minAge={item.minAge}
              year={item.year}
              description={item.description}
              thumbnailUrl={item.thumbnailUrl}
              imageUrl={item.imageUrl}
              price={item.price}
              mechanicsIDs={item.mechanicsIDs}
              categoriesIDs={item.categoriesIDs}
            />
          ))}
        </ImageList>
      </Container>
    </>
  );
};

export default Home;
