import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  type Query {
    "Query to get tracks array for the homepage grid"
    tracksForHome: [Track!]!,
    track(id: ID!): Track,
  }
  
  type Mutation {
    incrementTrackViews(id:ID): IncrementTrackViewsResponse!
  }

  type IncrementTrackViewsResponse {
    "Similar to HTTP status code, represents the status of the mutation"
    code: Int!
    "Indicates whether the mutation was successful"
    success: Boolean!
    "Human-readable message for the UI"
    message: String!
    "Newly updated track after a successful mutation"
    track: Track
  }

  "A track is a group of modules that teaches about a specific topic"
  type Track {
    id: ID!
    "the track's title"
    title: String!
    "the track's main author"
    author: Author!
    "the track's main illustration to display in track card or track page detail"
    thumbnail: String
    "the track's approximate length to complete, inminutes"
    length: Int
    "the number of modules this track contains"
    modulesCount: Int,
    "The track's complete description, can be in Markdown format"
    description: String,
    "The number of times a track has been viewed"
    numberOfViews: Int,
    "The track's complete array of Modules"
    modules: [Module!]!
  }

  "A Module is a single unit of teaching. Multiple Modules compose a Track"
  type Module {
    id: ID!,
    "The Module's title"
    title: String!,
    "The Module's length in minutes"
    length: Int,
  }

  "Author of complete track"
  type Author {
    id: ID!
    "Author's first and las name"
    name: String!
    "Author's prifle picture url"
    photo: String
}
`;

export default typeDefs;
