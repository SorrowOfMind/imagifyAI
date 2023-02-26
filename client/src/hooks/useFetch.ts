import { useEffect, useState } from "react";


const useFetch = (url: string, method: string, callback: () => void) => {
    const [loading, setLoading] = useState<boolean>();
    const [data, setData] = useState(null);
    const [searchText, setSearchText] = useState<string>();
    const [error, setError] = useState(null);

    

    useEffect(() => {
        setLoading(true);
        const controller = new AbortController();




    }, [url]);


    return {loading, data, searchText, setSearchText, error};
}

export default useFetch;