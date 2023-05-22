import { IBGCardProps } from './BGCard.models';
import { useRouter } from 'next/router';
import {
  Box,
  Divider,
  ImageListItem,
  ImageListItemBar,
  Stack,
  Typography,
} from '@mui/material';
import { ScreenSizeContext } from '../../providers/ScreenSizeProvider';
import { IScreenSizeType } from '../../hooks/UseScreenType';
import { useContext } from 'react';
import { FamilyRestroom, AccessTime, Person } from '@mui/icons-material';
const BGCard = ({ gameData }: IBGCardProps) => {
  const router = useRouter();
  const screenSize: IScreenSizeType = useContext(
    ScreenSizeContext
  ) as IScreenSizeType;
  const notAvailableString = 'n/a';
  const iconLabelsGap = 0.5;
  return (
    <ImageListItem style={{ alignItems: 'center' }}>
      <img
        src={gameData.image_url}
        srcSet={gameData.image_url}
        alt={gameData.name}
        style={{
          maxWidth: 350,
          height: '400px',
          objectFit: 'contain',
        }}
        onClick={() => {
          router.push(`${gameData.id}`);
        }}
      />
      <ImageListItemBar
        subtitle={
          <Stack spacing={0.5}>
            <Typography
              align="center"
              noWrap
              style={{ maxWidth: '90vw' }}
              sx={{ margin: 'auto' }}
            >
              {gameData.name}
            </Typography>
            <Typography align="center">
              {gameData.year_published
                ? `(${gameData.year_published})`
                : notAvailableString}
            </Typography>
            <Stack
              direction={'row'}
              divider={<Divider orientation="vertical" flexItem />}
              spacing={1.5}
              justifyContent={'center'}
            >
              <Box
                display={'flex'}
                justifyContent={'center'}
                gap={iconLabelsGap}
              >
                <Person />
                <Typography>
                  {gameData.min_players
                    ? gameData.min_players === gameData.max_players
                      ? `${gameData.min_players}`
                      : `${gameData.min_players} - ${gameData.max_players}`
                    : notAvailableString}
                </Typography>
              </Box>
              <Box
                display={'flex'}
                justifyContent={'center'}
                gap={iconLabelsGap}
              >
                <AccessTime />
                <Typography>
                  {gameData.min_playtime
                    ? gameData.min_playtime === gameData.max_playtime
                      ? `${gameData.min_playtime}`
                      : `${gameData.min_playtime} - ${gameData.max_playtime}`
                    : notAvailableString}
                </Typography>
              </Box>
              <Box
                display={'flex'}
                justifyContent={'center'}
                gap={iconLabelsGap}
              >
                <FamilyRestroom />
                <Typography>
                  {gameData.min_age
                    ? `${gameData.min_age}+`
                    : notAvailableString}
                </Typography>
              </Box>
            </Stack>
          </Stack>
        }
        position="below"
      />
    </ImageListItem>
  );
};
export default BGCard;
