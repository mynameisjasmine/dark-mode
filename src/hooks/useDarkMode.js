import React, { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";




const UseDarkMode = (key, initialValue) => {
const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);

useEffect(() => {
 if(darkMode) {
document.querySelector('body').classList.add('dark-mode')
 } else {
    document.querySelector('body').classList.remove('dark-mode')   
 }
},[])


 return [darkMode, setDarkMode]
}



export default UseDarkMode;