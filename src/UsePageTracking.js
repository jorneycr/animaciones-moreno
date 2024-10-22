import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

const UsePageTracking = () => {
  const location = useLocation();  // Necesita estar dentro de Router

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);
};

export default UsePageTracking;
