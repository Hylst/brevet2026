import { STORAGE_KEYS } from '../constants';

export const getDeviceId = (): string => {
  let deviceId = localStorage.getItem(STORAGE_KEYS.DEVICE_ID);
  if (!deviceId) {
    deviceId = crypto.randomUUID 
      ? crypto.randomUUID() 
      : 'device-' + Date.now() + '-' + Math.random().toString(36).substring(2);
    localStorage.setItem(STORAGE_KEYS.DEVICE_ID, deviceId);
  }
  return deviceId;
};
