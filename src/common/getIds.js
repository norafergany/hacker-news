import axios from "axios";
import {useEffect, useState} from "react";

const useGetIds = (urlParams) => {
    const [ids, setIds] = useState({});
    const [loading, setLoading] = useState(true);

    const baseURL = "https://hacker-news.firebaseio.com/v0/"
    // https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty
        // https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty
    // https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty
    useEffect(() => {

            const apiCall = baseURL + urlParams + '.json';
            console.log(baseURL + urlParams + ".json");
            const { data: ids } = axios.get(apiCall)
                .then(ids => setIds(ids))
                .catch(error => {
                    console.error(error)
                });
            console.log(ids);
            // console.log(JSON.stringify(data));
            // console.log(JSON.stringify(data.data));


            // const {data: response} = await data.map((id) => axios.get(baseURL + urlParams + '.json'));

        setLoading(false);


        // const fetchData = async () => {
        //
        //
        //
        // };
        //
        // fetchData();
    }, [urlParams]);

    return {
        ids,
        loading,

    };
};

export default useGetIds;