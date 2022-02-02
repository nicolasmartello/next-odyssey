const resolvers = {
  Query: {
    // get all tracks, will be used to populate the homepage grid of our web client
    tracksForHome: (_: unknown, __: unknown, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },
    // get a single track by ID, for the track page
    track: (_, { id }, { dataSources }) => {
      return dataSources.trackAPI.getTrack(id);
    }
  },

  Mutation: {
    incrementTrackViews: async (_, { id }, { dataSources }) => {
      try {
        // increments a track's numberOfViews property
        const track = await dataSources.trackAPI.incrementTrackViews(id);
        return {
          code: 200,
          success: true,
          message: `Successfully incremented number of views fro track ${id}`,
          track,
        };
      } catch(err) {
        const { extensions: { response: { status, body } } } = err;
        return {
          code: status,
          success: false,
          message: body,
          track: null,
        };
      }
      
    }
  },

  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
    modules: ({ id }, _, { dataSources }) => {
      return dataSources.trackAPI.getTrackModules(id);
    }
  }
};

export default resolvers;
