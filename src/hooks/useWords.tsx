import { useCallback, useState } from "react";
import { generate } from "random-words";

const generateWords = (count: number) => {
    return generate(count).join(" ").toLowerCase();
};

const useWords = (count: number) => {
    const [words, setWords] = useState<string>(generateWords(count));

    const updateWords = useCallback(() => {
        setWords(generateWords(count));
    }, [count]);

    return { words, updateWords };
};

export default useWords