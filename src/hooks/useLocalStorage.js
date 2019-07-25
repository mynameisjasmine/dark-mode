import React, { useState } from "react";

// const [storedValue, setStoredValue] = useState(() => {
//   const item = window.localStorage.getItem(key);
//   return item ? JSON.parse(item) : initialValue
// });


const useLocalStorage = (key, initialValue) => {
 const [storedValue, setStoredValue] = useState(() => {
 const item = window.localStorage.getItem(key);
 return item ? JSON.parse(item) : initialValue
 });
 return [storedValue];
};

export default useLocalStorage;