import React from 'react';
import { useQuery, gql } from '@apollo/client';
import TRACKS from '../../clientSchemas/tracks';
import TrackCard from '../../containers/track-card';
import { Layout, QueryResult } from '../../components';
import { Track } from '../../clientSchemas/track.d';

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
 const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);
  return (
    <Layout grid>
      <QueryResult error={error} loading={loading} data={data}>
        {data?.tracksForHome?.map((track: Track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </QueryResult>
    </Layout>
  );
};

export default Tracks;
