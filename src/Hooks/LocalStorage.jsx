import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
  // Get data from localStorage or use initialValue
  const storedValue = JSON.parse(localStorage.getItem(key)) || initialValue;

  // State to hold the current value
  const [value, setValue] = useState(storedValue);

  // Update localStorage when the value changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
