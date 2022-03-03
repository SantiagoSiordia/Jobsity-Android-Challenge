export type DetailRoute = 'Details';

export type Routes = DetailRoute;

export const ROUTES: Record<string, Routes> = {
  DETAILS: 'Details',
};

export type ParamList = {
  [ROUTES.DETAILS]: {
    showId: string;
  };
};
