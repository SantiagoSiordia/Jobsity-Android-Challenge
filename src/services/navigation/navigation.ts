export type DetailRoute = 'Details';
export type PersonDetailRoute = 'PersonDetails';
export type ImageRoute = 'Image';
export type EpisodeRoute = 'Episode';

export type Routes =
  | DetailRoute
  | ImageRoute
  | EpisodeRoute
  | PersonDetailRoute;

export const ROUTES: Record<string, Routes> = {
  DETAILS: 'Details',
  IMAGE: 'Image',
};

export type ParamList = {
  Details: {
    showId: string;
  };
  Episode: {
    episodeId: string;
    showId: string;
  };
  Image: {
    image: string;
  };
  PersonDetails: {
    personId: string;
  };
};
