import {
  notAvailableString,
  gameDataSessionStorageKey,
} from '../../../constants';
import { Game } from '../../../api/boardgamesAtlas/models/getGames';
import { IScreenSizeType } from '../../../hooks/UseScreenType';
import { useContext, useEffect, useState } from 'react';
import { ScreenSizeContext } from '../../../providers/ScreenSizeProvider';
import {
  Box,
  Container,
  Divider,
  LinearProgress,
  Stack,
  Typography,
} from '@mui/material';
import gameMechanicsDB from '../../../statics/gameMechanics.json';
import gameCategoriesDB from '../../../statics/gameCategories.json';
import GameAttribute from './components/GameAttribute/GameAttribute';

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

  const gameCategoriesLabels = savedGameData?.categories.map((category) => {
    const gameCategory = gameCategoriesDB.find((m) => m.id === category.id);
    return (
      <Typography
        key={`category_${category.id}`}
        fontWeight={600}
        fontSize={20}
        textAlign={'center'}
      >
        {gameCategory.name}
      </Typography>
    );
  });
  const gameMechanicsLabels = savedGameData?.mechanics.map((mechanic) => {
    const gameMechanic = gameMechanicsDB.find((m) => m.id === mechanic.id);
    return (
      <Typography
        key={`mechanic_${mechanic.id}`}
        fontWeight={600}
        fontSize={20}
        textAlign={'center'}
      >
        {gameMechanic.name}
      </Typography>
    );
  });

  return (
    <Container style={{ paddingTop: '20px', paddingBottom: '20px' }}>
      {savedGameData ? (
        <Box>
          <Stack spacing={3} alignItems={'center'}>
            <Box>
              <Typography
                align="center"
                noWrap
                style={{ maxWidth: '90vw', fontWeight: 600, fontSize: 40 }}
                textAlign={'center'}
              >
                {savedGameData.name}
              </Typography>
              <Typography
                textAlign={'center'}
                fontSize={screenSize.isMobile ? 20 : 30}
              >
                {savedGameData.year_published
                  ? `(${savedGameData.year_published})`
                  : notAvailableString}
              </Typography>
            </Box>
            <img
              src={savedGameData.image_url}
              srcSet={savedGameData.image_url}
              alt={savedGameData.name}
              style={{
                maxWidth: screenSize.isMobile ? 350 : 500,
                maxHeight: screenSize.isMobile ? 250 : 500,
                objectFit: 'contain',
              }}
            />
            <Stack spacing={1} justifyContent={'center'}>
              <GameAttribute attributeName="Designer">
                <Typography fontWeight={600} fontSize={20}>
                  {savedGameData.primary_designer.name}
                </Typography>
              </GameAttribute>
              <GameAttribute attributeName="Publisher">
                <Typography fontWeight={600} fontSize={20}>
                  {savedGameData.primary_publisher.name}
                </Typography>
              </GameAttribute>
            </Stack>
            {savedGameData.description_preview && (
              <>
                <Divider style={{ width: '100%' }} />
                <Typography
                  textAlign="center"
                  fontSize={17}
                  fontStyle={'italic'}
                >
                  {savedGameData.description_preview}
                </Typography>
              </>
            )}
            <Divider style={{ width: '100%' }} />
            <Stack spacing={1.5} justifyContent={'center'}>
              <GameAttribute attributeName="Players">
                <Typography fontWeight={600} fontSize={20}>
                  {savedGameData.min_players
                    ? savedGameData.min_players === savedGameData.max_players
                      ? `${savedGameData.min_players}`
                      : `${savedGameData.min_players} - ${savedGameData.max_players}`
                    : notAvailableString}
                </Typography>
              </GameAttribute>
              <GameAttribute attributeName="Playtime">
                <Typography fontWeight={600} fontSize={20}>
                  {savedGameData.min_playtime
                    ? savedGameData.min_playtime === savedGameData.max_playtime
                      ? `${savedGameData.min_playtime} Min`
                      : `${savedGameData.min_playtime} - ${savedGameData.max_playtime} Min`
                    : notAvailableString}
                </Typography>
              </GameAttribute>
              <GameAttribute attributeName="Age">
                <Typography fontWeight={600} fontSize={20}>
                  {savedGameData.min_age
                    ? `${savedGameData.min_age}+`
                    : notAvailableString}
                </Typography>
              </GameAttribute>
            </Stack>
            <Divider style={{ width: '100%' }} />
            <Stack
              divider={<Divider orientation="horizontal" flexItem />}
              spacing={1.5}
              justifyContent={'center'}
            >
              {savedGameData.mechanics.length > 0 && (
                <GameAttribute attributeName="Mechanics">
                  {gameMechanicsLabels}
                </GameAttribute>
              )}
              {savedGameData.categories.length > 0 && (
                <GameAttribute attributeName="Categories">
                  {gameCategoriesLabels}
                </GameAttribute>
              )}
            </Stack>
          </Stack>
        </Box>
      ) : (
        <LinearProgress />
      )}
    </Container>
  );
};
export default GameDetail;
