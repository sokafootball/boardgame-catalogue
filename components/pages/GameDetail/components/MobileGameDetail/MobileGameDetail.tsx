/* eslint-disable @next/next/no-img-element */
import { IMobileGameDetailProps } from './MobileGameDetail.models';
import { Divider, Stack, Typography } from '@mui/material';
import GameAttribute from '../GameAttribute/GameAttribute';
import { notAvailableString } from '../../../../../constants';

const MobileGameDetail = ({
  savedGameData,
  gameMechanicsLabels,
  gameCategoriesLabels,
}: IMobileGameDetailProps) => {
  return (
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
          fontSize: 30,
        }}
        descriptionStyle={{
          fontSize: 20,
          fontWeight: 400,
        }}
      />
      <img
        src={savedGameData.image_url}
        srcSet={savedGameData.image_url}
        alt={savedGameData.name}
        style={{
          maxWidth: '100%',
          maxHeight: 250,
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
          <Typography textAlign="center" fontSize={17} fontStyle={'italic'}>
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
  );
};
export default MobileGameDetail;
