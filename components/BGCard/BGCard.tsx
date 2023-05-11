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
  return (
    <ImageListItem>
      <img src={imageUrl} srcSet={imageUrl} alt={name} />
      <ImageListItemBar
        subtitle={
          <Stack spacing={0.5}>
            <Box display={'flex'} justifyContent={'center'} gap={0.5}>
              <Typography>{name}</Typography>
              <Typography>{`(${year})`}</Typography>
            </Box>
            <Stack
              direction={'row'}
              divider={<Divider orientation="vertical" flexItem />}
              spacing={1.5}
              justifyContent={'center'}
            >
              <Box display={'flex'} justifyContent={'center'} gap={1}>
                <Person />
                <Typography>
                  {minPlayers === maxPlayers
                    ? `${minPlayers}`
                    : `${minPlayers} - ${maxPlayers}`}
                </Typography>
              </Box>
              <Box display={'flex'} justifyContent={'center'} gap={1}>
                <AccessTime />
                <Typography>
                  {minPlaytime === maxPlaytime
                    ? `${minPlaytime}`
                    : `${minPlaytime} - ${maxPlaytime}`}
                </Typography>
              </Box>
              <Box display={'flex'} justifyContent={'center'} gap={1}>
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
