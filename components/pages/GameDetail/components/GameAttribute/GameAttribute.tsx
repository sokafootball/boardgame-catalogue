import { IGameAttributeProps } from './GameAttribute.models';
import { Divider, Stack, Typography } from '@mui/material';
import { notAvailableString } from '../../../../../constants';
import { ScreenSizeContext } from '../../../../../providers/ScreenSizeProvider';
import { IScreenSizeType } from '../../../../../hooks/UseScreenType';
import { useContext } from 'react';

const GameAttribute = ({
  attributeName,
  attributeDescriptions,
  nameStyle,
  descriptionStyle,
  separateWithColon = true,
}: IGameAttributeProps) => {
  const screenSize: IScreenSizeType = useContext(
    ScreenSizeContext
  ) as IScreenSizeType;
  return (
    <Stack
      flexDirection={screenSize.isMobile ? 'column' : 'row'}
      justifyContent={'center'}
      alignItems={'center'}
      gap={screenSize.isMobile ? 0.5 : 1}
    >
      <Typography
        fontSize={20}
        fontWeight={600}
        style={{ ...nameStyle }}
        textAlign={'center'}
        alignSelf={!screenSize.isMobile && 'flex-start'}
      >
        {`${attributeName}${
          !screenSize.isMobile && separateWithColon ? `:` : ''
        }`}
      </Typography>
      <Stack
        flexDirection={screenSize.isMobile ? 'column' : 'row'}
        divider={
          !screenSize.isMobile && <Divider orientation="vertical" flexItem />
        }
        gap={1}
        alignItems={'center'}
        maxWidth={400}
        flexWrap={'wrap'}
      >
        {attributeDescriptions.map((description, index) => (
          <Typography
            key={`attribute_${index}`}
            fontSize={20}
            style={{ ...descriptionStyle }}
            textAlign={'center'}
          >
            {description ? description : notAvailableString}
          </Typography>
        ))}
      </Stack>
    </Stack>
  );
};
export default GameAttribute;
