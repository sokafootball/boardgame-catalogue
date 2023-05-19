import { IBGCardProps } from './BGCard.models';
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
const BGCard = ({
  name,
  minPlayers,
  maxPlayers,
  minPlaytime,
  maxPlaytime,
  minAge,
  year,
  imageUrl,
}: IBGCardProps) => {
  const screenSize: IScreenSizeType = useContext(
    ScreenSizeContext
  ) as IScreenSizeType;
  const notAvailableString = 'n/a';
  const iconLabelsGap = 0.5;
  return (
    <ImageListItem style={{ alignItems: 'center' }}>
      <img
        src={imageUrl}
        srcSet={imageUrl}
        alt={name}
        style={{
          maxWidth: 350,
          height: '400px',
          objectFit: 'contain',
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
              {name}
            </Typography>
            <Typography align="center">
              {year ? `(${year})` : notAvailableString}
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
                  {minPlayers
                    ? minPlayers === maxPlayers
                      ? `${minPlayers}`
                      : `${minPlayers} - ${maxPlayers}`
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
                  {minPlaytime
                    ? minPlaytime === maxPlaytime
                      ? `${minPlaytime}`
                      : `${minPlaytime} - ${maxPlaytime}`
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
                  {minAge ? `${minAge}+` : notAvailableString}
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
