import ArticleList from "./ArticleList";
import React, {useEffect, useState} from "react";
import axios from 'axios';
import {useErrorHandler} from 'react-error-boundary'




export const ArticleListContainer = () => {

    const [ids, setIds] = useState();
    const [currentIds, setCurrentIds] = useState();
    const [storyType, setStoryType] = useState('topstories');
    const [loading, setLoading] = useState(true);
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(13);

    const handleError = useErrorHandler();



    useEffect(() => {
        // const allIds =  getIds('topstories');
        async function getIds(storyType) {
            const baseURL = "https://hacker-news.firebaseio.com/v0/";
            const endpoint = `${baseURL}${storyType}.json`;

            try {
                const {data} = await axios.get(endpoint);
                // const {data} = await axios.get(endpoint);

                console.log(data);
                return data;
            } catch (error) {
                handleError(error);
            }
        }

        getIds(storyType).then(r => {
            setIds(r);
            getCurrentIds(r, start, end);
            setLoading(false);

        }).catch((error) => {
            handleError(error)
        })
    }, []);


    const getCurrentIds = (ids, start, end) => {
        try {
                const currentSlice =  ids.slice(start, end);
                console.log(currentSlice);
                setCurrentIds(currentSlice);
            } catch (error) {
                console.error(error);
                handleError(error);

        }
    }



    const updateCurrentIds = (newIds) => {
        setCurrentIds(newIds)
    }


    return (
        <>
                {!loading &&
                <ArticleList ids={currentIds}/>
                }
        </>
    )

}

export default ArticleListContainer;
