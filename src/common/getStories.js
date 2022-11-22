import axios from "axios";
import {React, useEffect, useState} from "react";
import useGetIds from "./getIds";

const useGetStories = (urlParams) => {
    const [ids, setData] = useState({});
    const [stories, setStories] = useState({});
    const [loading, setLoading] = useState(true);

    const baseStoriesURL = "https://hacker-news.firebaseio.com/v0/";
    const baseItemURL = "https://hacker-news.firebaseio.com/v0/item/";


    useEffect(() => {

        const fetchData = async () => {
            try {
                let storyList = [];
                const fullIdList = await axios.get(baseStoriesURL + urlParams + '.json');
                const idSet = fullIdList.data.slice(1, 13);

                await Promise.all(idSet.map((id) => axios.get(baseItemURL + id + '.json')
                    .then((story) => storyList.push(story.data))));

                setStories(storyList);

            } catch (error) {
                console.error(error);
            }
            setLoading(false);
        }

        fetchData()

    }, [urlParams]);

    return {
        stories,
        loading,
    };
};

export default useGetStories;