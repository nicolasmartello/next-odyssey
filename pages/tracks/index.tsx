import React from 'react';
import { useQuery, gql } from '@apollo/client';
import TRACKS from '../../clientSchemas/tracks';

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);
  if (loading) {
    return (<div>Is loading</div>)
  }
  return (
    <div>
      {data?.tracksForHome?.map((track: any) => (
        <div key={track.id}>{track.title}</div>
      ))}
    </div>
  );
};

export default Tracks;
