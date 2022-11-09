import useLocalStorage from "./useLocalStorage"

export default function useDarkMode(key, initialValue) {
    const [value, setValue] = useLocalStorage(key, initialValue);

    return [value, setValue];
}