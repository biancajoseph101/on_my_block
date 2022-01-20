export const BaseURL =
  process.env.NODE_ENV === 'production'
    ? `${window.location.origin}/api`
    : 'http://localhost:3001/api';

export const AuthURL =
  process.env.NODE_ENV === 'production'
    ? `${window.location.origin}/auth`
    : 'http://localhost:3001/auth';
