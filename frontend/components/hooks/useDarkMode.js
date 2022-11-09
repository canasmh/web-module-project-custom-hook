import useLocalStorage from "./useLocalStorage"

export default useDarkMode = (key, initialValue) => {
    const [value, setValue] = useLocalStorage(key, initialValue);

    return [value, setValue];
}