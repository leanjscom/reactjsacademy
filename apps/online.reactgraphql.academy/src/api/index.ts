import { getCookie } from '../utils';

const umApiBaseUrl =
  process.env.GATSBY_UPMENTORING_GRAPHQL_API_BASE_URL ||
  'https://api2.upmentoring.com';
const apiBaseUrl =
  process.env.GATSBY_LEANJS_API_BASE_URL || 'https://api.leanjs.com';

const defaultOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
};

export const login = (token) =>
  fetch(`${umApiBaseUrl}/auth`, {
    credentials: 'include',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const courseSubscribe = (message) =>
  fetch(`${apiBaseUrl}/courseSubscribe`, {
    ...defaultOptions,
    body: JSON.stringify({
      ...message,
      utm_source: getCookie('utm_source'),
      slackChannel: 'C016TLFL695',
    }),
  });

export const triggerSubscribe = ({
  email,
  form = 'login',
  resources = true,
}) => {
  const utm_source = getCookie('utm_source');
  const path = typeof window !== 'undefined' ? window.location.pathname : '';
  const payload = {
    email,
    form,
    resources,
    path,
    utm_source,
  };
  return fetch(`${apiBaseUrl}/subscribe`, {
    ...defaultOptions,
    body: JSON.stringify(payload),
  });
};