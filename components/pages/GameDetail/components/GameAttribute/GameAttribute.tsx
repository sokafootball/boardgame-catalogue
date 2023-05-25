import { IGameAttributeProps } from './GameAttribute.models';
import { Box, Typography } from '@mui/material';
import { notAvailableString } from '../../../../../constants';

const GameAttribute = ({
  attributeName,
  attributeDescriptions,
  nameStyle,
  descriptionStyle,
}: IGameAttributeProps) => {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      gap={0.5}
    >
      <Typography fontSize={20} style={{ ...nameStyle }} textAlign={'center'}>
        {attributeName}
      </Typography>
      {attributeDescriptions.map((description, index) => (
        <Typography
          key={`attribute_${index}`}
          fontWeight={600}
          fontSize={20}
          style={{ ...descriptionStyle }}
          textAlign={'center'}
        >
          {description ? description : notAvailableString}
        </Typography>
      ))}
    </Box>
  );
};
export default GameAttribute;
