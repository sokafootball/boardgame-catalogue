import { IBGCardProps } from './BGCard.models';
import {
  Box,
  Divider,
  ImageListItem,
  ImageListItemBar,
  Stack,
  Typography,
} from '@mui/material';
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
  const iconLabelsGap = 0.5;
  return (
    <ImageListItem>
      <img
        src={imageUrl}
        srcSet={imageUrl}
        alt={name}
        style={{ maxWidth: '100%' }}
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
            <Typography align="center">{`(${year})`}</Typography>
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
                  {minPlayers === maxPlayers
                    ? `${minPlayers}`
                    : `${minPlayers} - ${maxPlayers}`}
                </Typography>
              </Box>
              <Box
                display={'flex'}
                justifyContent={'center'}
                gap={iconLabelsGap}
              >
                <AccessTime />
                <Typography>
                  {minPlaytime === maxPlaytime
                    ? `${minPlaytime}`
                    : `${minPlaytime} - ${maxPlaytime}`}
                </Typography>
              </Box>
              <Box
                display={'flex'}
                justifyContent={'center'}
                gap={iconLabelsGap}
              >
                <FamilyRestroom />
                <Typography>{`${minAge}+`}</Typography>
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
