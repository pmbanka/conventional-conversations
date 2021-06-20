import { useEffect, useCallback, useState } from 'react';
import { DARK_MODE_CLASS, DARK_MODE_STORAGE_KEY } from '../constants';
import { logError } from '../utils';
import { useSyncWithLocalStorage } from './useSyncWithLocalStorage';

const matchesDarkModeQuery = () => {
  try {
    const match =  window.matchMedia('(prefers-color-scheme: dark)');

    return match.matches;
  } catch (e) {
    logError('Unexpected error while testing for dark mode.', e);
    return false;
  }
};

const updateDarkModeClass = (isDarkMode) => {
  const el = document.documentElement;

  if (isDarkMode) {
    el.classList.add(DARK_MODE_CLASS);
  } else {
    el.classList.remove(DARK_MODE_CLASS);
  }
}

const useDarkModeState = () => {
  return useSyncWithLocalStorage(DARK_MODE_STORAGE_KEY, useState(matchesDarkModeQuery()));
};

export const useDarkMode = () => {
  const [state, setState] = useDarkModeState();

  useEffect(() => {
    updateDarkModeClass(state)
  }, [state]);

  return {
    value: state,
    enable: useCallback(() => setState(true), [setState]),
    disable: useCallback(() => setState(false), [setState]),
  }
};
