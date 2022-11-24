import axios from "axios";
import {useEffect, useState} from "react";

const useGetIds = (urlParams) => {
    const [ids, setIds] = useState([]);
    const [idLoading, setIdLoading] = useState(true);

    const baseURL = "https://hacker-news.firebaseio.com/v0/";

    console.log(baseURL);
    console.log(baseURL + urlParams + '.json');



    useEffect(() => {
        const fetchData = async () => {
            try {
                await axios.get(baseURL + urlParams + '.json')
                    .then((response) => setIds(response.data))
                ;
            } catch (error) {

            }
            setIdLoading(false);
        }
        fetchData()
    }, [])

    // useEffect(() => {
    //
    //         const apiCall = baseURL + urlParams + '.json';
    //         console.log(baseURL + urlParams + ".json");
    //         const { data: ids } = axios.get(apiCall)
    //             .then(ids => setIds(ids))
    //             .catch(error => {
    //                 console.error(error)
    //             });
    //         console.log(ids);
    //         // console.log(JSON.stringify(data));
    //         // console.log(JSON.stringify(data.data));
    //
    //
    //         // const {data: response} = await data.map((id) => axios.get(baseURL + urlParams + '.json'));
    //
    //     setLoading(false);
    //
    //
    //     // const fetchData = async () => {
    //     //
    //     //
    //     //
    //     // };
    //     //
    //     // fetchData();
    // }, [urlParams]);

    return {
        ids,
        idLoading,

    };
};

export default useGetIds;