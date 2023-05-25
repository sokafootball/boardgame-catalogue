/* eslint-disable @next/next/no-img-element */
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

  const gameCategoriesLabels = savedGameData?.categories.map(
    (category) => gameCategoriesDB.find((m) => m.id === category.id).name
  );
  const gameMechanicsLabels = savedGameData?.mechanics.map(
    (mechanic) => gameMechanicsDB.find((m) => m.id === mechanic.id).name
  );

  return (
    <Container style={{ paddingTop: '20px', paddingBottom: '20px' }}>
      {savedGameData ? (
        <Box>
          <Stack spacing={3} alignItems={'center'}>
            <GameAttribute
              attributeName={savedGameData.name}
              attributeDescriptions={[
                savedGameData.year_published
                  ? `(${savedGameData.year_published?.toString()})`
                  : null,
              ]}
              nameStyle={{
                maxWidth: '90vw',
                fontWeight: 600,
                fontSize: screenSize.isMobile ? 30 : 40,
              }}
              descriptionStyle={{
                fontSize: screenSize.isMobile ? 20 : 30,
                fontWeight: 400,
              }}
            />
            <img
              src={savedGameData.image_url}
              srcSet={savedGameData.image_url}
              alt={savedGameData.name}
              style={{
                maxWidth: screenSize.isMobile ? '100%' : 500,
                maxHeight: screenSize.isMobile ? 250 : 500,
                objectFit: 'contain',
              }}
            />
            <Stack spacing={1} justifyContent={'center'}>
              <GameAttribute
                attributeName="Designer"
                attributeDescriptions={[savedGameData.primary_designer.name]}
              />

              <GameAttribute
                attributeName="Publisher"
                attributeDescriptions={[savedGameData.primary_publisher.name]}
              />
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
              <GameAttribute
                attributeName="Players"
                attributeDescriptions={[
                  savedGameData.min_players === savedGameData.max_players
                    ? `${savedGameData.min_players}`
                    : `${savedGameData.min_players} - ${savedGameData.max_players}`,
                ]}
              />
              <GameAttribute
                attributeName="Playtime"
                attributeDescriptions={[
                  savedGameData.min_playtime === savedGameData.max_playtime
                    ? `${savedGameData.min_playtime} Min`
                    : `${savedGameData.min_playtime} - ${savedGameData.max_playtime} Min`,
                ]}
              />
              <GameAttribute
                attributeName="Age"
                attributeDescriptions={[
                  savedGameData.min_age
                    ? `${savedGameData.min_age}+`
                    : notAvailableString,
                ]}
              />
            </Stack>
            <Divider style={{ width: '100%' }} />
            <Stack
              divider={<Divider orientation="horizontal" flexItem />}
              spacing={1.5}
              justifyContent={'center'}
            >
              {savedGameData.mechanics.length > 0 && (
                <GameAttribute
                  attributeName="Mechanics"
                  attributeDescriptions={gameMechanicsLabels}
                />
              )}
              {savedGameData.categories.length > 0 && (
                <GameAttribute
                  attributeName="Categories"
                  attributeDescriptions={gameCategoriesLabels}
                />
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
