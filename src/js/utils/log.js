import { LOG_PREFIX } from '../constants';

export const log = (message) => {
  console.log(`${LOG_PREFIX} ${message}`);
}

export const logError = (message, error) => {
  log(message);
  console.log(error);
}
