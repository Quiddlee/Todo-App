import { cssTransition } from 'react-toastify';

export const urlParams = {
  NOTE_ID: 'id',
  SEARCH: 'query',
} as const;

export const queryParamsInit = {
  [urlParams.SEARCH]: '',
};

export const localStorageKeys = {
  IS_DARK_MODE: 'isDarkMode',
} as const;

export const cookie = {
  ACCESS_TOKEN: 'access-token',
  REFRESH_TOKEN: 'refresh-token',
} as const;

export const routes = {
  BASE: '/',
  NOTES: 'notes',
  ARCHIVE: 'archive',
  TRASH: 'trash',
  LABEL: 'labels',
  DYNAMIC_LABEL: 'labels/:labelId',
  LOGIN: 'login',
  SIGN_UP: 'signup',
  AUTH: 'auth',
  SETTINGS: 'settings',
  ACCOUNT: 'account',
  GENERAL: 'general',
} as const;

export const langs = {
  EN: 'en',
  RU: 'ru',
} as const;

export const LABEL_COLOR_DECREASE = 45;

export const BACKSPACE_KEY = 'Backspace';

export const SEARCH_BOTTOM_OFFSET = 20;

export const filledIconStyles = {
  fontVariationSettings: "'FILL' 1",
};

export const SNACKBAR_AUTO_HIDE_DURATION = 4000;

export const SnackBarTransition = cssTransition({
  enter: 'animate-fade-in-snackbar',
  exit: 'animate-fade-out-snackbar',
});
