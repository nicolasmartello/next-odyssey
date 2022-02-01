export type TrackModule = {
  id: string;
  title: string;
  length: !number;
}

export type TrackAuthor = {
  id: string;
  name: string;
  photo: !string;
}

export type Track = {
  id: string;
  title: string;
  author: TrackAuthor;
  thumbnail: !string;
  length: !number;
  modulesCount: !number;
  description: !string;
  numberOfViews: !number;
  modules: [TrackModule];
}