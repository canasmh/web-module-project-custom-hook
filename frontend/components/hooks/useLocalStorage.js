import { useState } from "react";

export default useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        const currentValue = window.localStorage.get(key);

        return currentValue ? JSON.parse(currentValue) : initialValue;
    });

    const setLocalStorage= (value) => {
        setValue(value);
        window.localStorage.setItem(key, valueE)
    }

    return [value, setLocalStorage];
}