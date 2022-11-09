import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        const currentValue = window.localStorage.getItem(key);

        return currentValue ? JSON.parse(currentValue) : initialValue;
    });

    const setLocalStorage = (val) => {
        setValue(val);
        window.localStorage.setItem(key, val)
    };

    return [value, setLocalStorage];
};