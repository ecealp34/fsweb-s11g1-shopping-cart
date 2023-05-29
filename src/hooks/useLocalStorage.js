import { useState } from "react";

export default function useLocalStorage(key, defaultValue) {

    const [value, setValue] = useState(() => {

        const localValue = JSON.parse(localStorage.getItem(key));
        
        if (localValue === null) {
            localStorage.setItem(key, JSON.stringify(defaultValue));
            console.log("localde data yok", defaultValue);
            return defaultValue;
        } else {
            console.log("localde data var", localValue);
            return localValue;
        }
    });

    const setLocalStorage = (yeniDeğer) => {
        localStorage.setItem(key, JSON.stringify(yeniDeğer));
        setValue(yeniDeğer)
    }

    return [value, setLocalStorage];
}