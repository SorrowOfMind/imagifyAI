import { useEffect, useState } from "react";


const useFetch = (url: string) => {
    const [loading, setLoading] = useState<boolean>();
    const [data, setData] = useState(null);
    const [searchText, setSearchText] = useState<string>();
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);




    }, [url]);


    return {loading, data, searchText, setSearchText, error};
}

export default useFetch;