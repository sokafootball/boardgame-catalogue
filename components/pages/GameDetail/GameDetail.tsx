import { gameDataSessionStorageKey } from '../../../constants';
import { Game } from '../../../api/boardgamesAtlas/models/getGames';
import { IScreenSizeType } from '../../../hooks/UseScreenType';
import { useContext, useEffect, useState } from 'react';
import { ScreenSizeContext } from '../../../providers/ScreenSizeProvider';
import { Container, LinearProgress } from '@mui/material';
import gameMechanicsDB from '../../../statics/gameMechanics.json';
import gameCategoriesDB from '../../../statics/gameCategories.json';
import MobileGameDetail from './components/MobileGameDetail/MobileGameDetail';
import LargeGameDetail from './components/LargeGameDetail/LargeGameDetail';

const GameDetail = () => {
  const [savedGameData, setSavedGameData] = useState<Game>();
  useEffect(() => {
    const gameData = sessionStorage.getItem(gameDataSessionStorageKey);
    const parsedData = JSON.parse(gameData);
    setSavedGameData(parsedData);
  }, []);

  const screenSize: IScreenSizeType = useContext(
    ScreenSizeContext
  ) as IScreenSizeType;

  const gameCategoriesLabels = savedGameData?.categories.map(
    (category) => gameCategoriesDB.find((m) => m.id === category.id).name
  );
  const gameMechanicsLabels = savedGameData?.mechanics.map(
    (mechanic) => gameMechanicsDB.find((m) => m.id === mechanic.id).name
  );

  return (
    <Container style={{ paddingTop: '20px', paddingBottom: '20px' }}>
      {savedGameData ? (
        screenSize.isMobile ? (
          <MobileGameDetail
            savedGameData={savedGameData}
            gameMechanicsLabels={gameMechanicsLabels}
            gameCategoriesLabels={gameCategoriesLabels}
          />
        ) : (
          <LargeGameDetail
            savedGameData={savedGameData}
            gameMechanicsLabels={gameMechanicsLabels}
            gameCategoriesLabels={gameCategoriesLabels}
          />
        )
      ) : (
        <LinearProgress />
      )}
    </Container>
  );
};
export default GameDetail;
