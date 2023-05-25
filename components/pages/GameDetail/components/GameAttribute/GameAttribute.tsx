import styles from './GameAttribute.module.scss';
import { IGameAttributeProps } from './GameAttribute.models';
import { Box, Typography } from '@mui/material';

const GameAttribute = ({ attributeName, children }: IGameAttributeProps) => {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      gap={0.5}
    >
      <Typography fontSize={20}>{attributeName}</Typography>
      {children}
    </Box>
  );
};
export default GameAttribute;
