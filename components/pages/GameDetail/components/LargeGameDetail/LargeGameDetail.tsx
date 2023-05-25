/* eslint-disable @next/next/no-img-element */
import { IMobileGameDetailProps } from '../MobileGameDetail/MobileGameDetail.models';
import { Divider, Stack, Typography } from '@mui/material';
import GameAttribute from '../GameAttribute/GameAttribute';
import { notAvailableString } from '../../../../../constants';

const LargeGameDetail = ({
  savedGameData,
  gameMechanicsLabels,
  gameCategoriesLabels,
}: IMobileGameDetailProps) => {
  return (
    <Stack spacing={5} alignItems={'center'}>
      <GameAttribute
        separateWithColon={false}
        attributeName={savedGameData.name}
        attributeDescriptions={[
          savedGameData.year_published
            ? `(${savedGameData.year_published?.toString()})`
            : null,
        ]}
        nameStyle={{
          maxWidth: '90vw',
          fontWeight: 600,
          fontSize: 40,
        }}
        descriptionStyle={{
          fontSize: 30,
          fontWeight: 400,
        }}
      />
      <Stack flexDirection={'row'} gap={5}>
        <img
          src={savedGameData.image_url}
          srcSet={savedGameData.image_url}
          alt={savedGameData.name}
          style={{
            maxWidth: '100%',
            maxHeight: 400,
            objectFit: 'contain',
          }}
        />
        <Stack alignItems={'flex-start'} gap={1}>
          <GameAttribute
            attributeName="Designer"
            attributeDescriptions={[savedGameData.primary_designer.name]}
          />

          <GameAttribute
            attributeName="Publisher"
            attributeDescriptions={[savedGameData.primary_publisher.name]}
          />
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
                : `${savedGameData.min_playtime} - ${savedGameData.max_playtime} Minutes`,
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
      {savedGameData.description_preview && (
        <>
          <Divider style={{ width: '100%' }} />
          <Typography textAlign="center" fontSize={17} fontStyle={'italic'}>
            {savedGameData.description_preview}
          </Typography>
        </>
      )}
    </Stack>
  );
};
export default LargeGameDetail;
