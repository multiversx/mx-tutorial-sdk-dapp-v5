import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RouteNamesEnum } from 'routes';

export const Unlock = () => {
  const navigate = useNavigate();
  const isLoggedIn = false; // TODO: Replace with the actual login state

  useEffect(() => {
    if (isLoggedIn) {
      navigate(RouteNamesEnum.dashboard);
      return;
    }
    // open unlock panel here
  }, [isLoggedIn]);

  return null;
};
