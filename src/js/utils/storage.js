const memoize = require('lodash/memoize');
const { log } = require('./log');

const STORAGE_TEST = 'storageTest';

export const canUseLocalStorage = memoize(() => {
  try {
    localStorage.setItem(STORAGE_TEST, STORAGE_TEST);
    localStorage.removeItem(STORAGE_TEST);
    return true;
  } catch (e) {
    log('localStorage not supported');
    return false;
  }
});

export const tryGetLocalStorage = (key, defaultValue) => {
  const item = localStorage.getItem(key);

  // not found
  if (item === null) {
    return defaultValue;
  }

  try {
    return JSON.parse(item);
  } catch {
    return defaultValue;
  }
};

export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};