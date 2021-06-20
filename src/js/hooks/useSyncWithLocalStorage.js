import { useEffect, useCallback } from 'react';
import { canUseLocalStorage, tryGetLocalStorage, setLocalStorage } from '../utils';

export const useSyncWithLocalStorage = (storageKey, stateHook) => {
  if (!canUseLocalStorage()) {
    return stateHook;
  }

  const [baseState, setBaseState] = stateHook;

  const setState = useCallback((val) => {
    setLocalStorage(storageKey, val);
    setBaseState(val);
  }, [storageKey]);

  useEffect(() => {
    setBaseState(tryGetLocalStorage(storageKey, baseState));
  }, [storageKey])

  return [baseState, setState];
};
