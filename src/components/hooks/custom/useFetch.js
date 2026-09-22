import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // const getData = async () => {
        //     fetch(url).then((res) => res.json()).then((data) => setData(data));
        //     setLoading(false);
        // };

        // getData();

        const fetchData = async () => {
            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error("Something went wrong");
                }

                const result = await response.json();

                setData(result);
            } 
            catch (err) {
                setError(err.message);
            } 
            finally {
                setLoading(false);
            }
        };

        fetchData();

    }, [url]);

    return {data, loading, error};

}

export default useFetch;