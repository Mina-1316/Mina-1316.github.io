import { useEffect, useState } from "react";

// https://stackoverflow.com/questions/71876755/save-state-to-localstorage
export function useLocalStorage<T>(
  key: string,
  initValue: T,
): [T, (newValue: T) => void] {
  const [value, setValue] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key); // Get from local storage
      return storedValue !== null ? JSON.parse(storedValue) : initValue; // Initialize value
    } catch (error) {
      console.error(error); // Log any errors
      return initValue; // Return initial value in case of error
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value)); // Set in local storage
    } catch (error) {
      console.error(error); // Log any errors
    }
  }, [key, value]);

  return [value, setValue];
}
