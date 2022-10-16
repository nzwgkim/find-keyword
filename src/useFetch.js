import React, { useState, useEffect } from 'react'

export function useFetch(base, initType) {
    const [data, setData] = useState(null);

    const fetchUrl = (initType) => {
        fetch(base + '/' + initType)
            .then(res => res.json())
            .then(res => setData(res));
    };

    console.log(data);


    useEffect(() => {
        fetchUrl(initType);
    }, [])

    return { data, fetchUrl };
}

export default useFetch