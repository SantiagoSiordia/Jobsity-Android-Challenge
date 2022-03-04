import { useShow } from '@services';
import React, { FC } from 'react';
import { Show } from './Show';

export interface ShowIdWrapperProps {
  showId: string;
}

export const ShowIdWrapper: FC<ShowIdWrapperProps> = ({ showId }) => {
  const { data: show } = useShow(showId);
  if (show === undefined || show === null) {
    return null;
  }
  return <Show show={show} />;
};
