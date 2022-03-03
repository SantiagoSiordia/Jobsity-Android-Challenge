export type DetailRoute = 'Details';
export type ImageRoute = 'Image';

export type Routes = DetailRoute | ImageRoute;

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
};
