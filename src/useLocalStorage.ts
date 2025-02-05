import { useEffect, useState } from 'react';

function getSavedValue<T>(key: string, initValue: T): T {
  if (initValue instanceof Function) {
    return initValue();
  }

  const savedValue = localStorage.getItem(key);
  if (savedValue) {
    return JSON.parse(savedValue);
  }
  return initValue;
}

export default function useLocalStorage<T>(key: string, initValue: T) {
  const [value, setValue] = useState<T>(() => {
    return getSavedValue(key, initValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}
