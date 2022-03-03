export type DetailRoute = 'Details';
export type ImageRoute = 'Image';
export type EpisodeRoute = 'Episode';

export type Routes = DetailRoute | ImageRoute | EpisodeRoute;

export const ROUTES: Record<string, Routes> = {
  DETAILS: 'Details',
  IMAGE: 'Image',
};

export type ParamList = {
  Details: {
    showId: string;
  };
  Image: {
    image: string;
  };
  Episode: {
    episodeId: string;
    showId: string;
  };
};
