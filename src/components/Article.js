import React, {useEffect, useState} from "react";
import axios from "axios";
import moment from 'moment';
import {useErrorHandler} from "react-error-boundary";
import styled from "styled-components"
import {Stack} from "react-bootstrap";


export const Article = (props) => {

    const [articleInfo, setArticleInfo] = useState({

        title: undefined,
        url: null,
        score: null,
        by: null,
        time: null,
        comments: null,
    });

    const [loading, setLoading] = useState(true);

    const handleError = useErrorHandler();


    useEffect(() => {
        async function getArticle(id) {
            const baseURL = "https://hacker-news.firebaseio.com/v0/item/";
            try {
                const {data} = await axios.get(`${baseURL}${id}.json`);
                return data;

            } catch (error) {
                handleError(error);
            }
        }

        getArticle(props.id).then(r => setArticleInfo({
            title: r.title,
            url: r.url,
            score: r.score,
            by: r.by,
            time: r.time,
            comments: r.descendants,

        })).catch((error) => {
            handleError(error);
        })
        setLoading(false)

    }, [])


    const convertURL = (url) => {
        const domain = url ? new URL(url).hostname : undefined;

        return domain;

    }

    const convertTime = (time) => {
        const relativeTime = moment.unix(time).utc().fromNow();
        return relativeTime;
    }

    return (
        <>
            <li className="">
                <Stack direction="horizontal" gap={3}>
{/*// TODO add css font styles via styled-components*/}
                    <div>
                        <a className="article-title me-1" href={articleInfo.url}>{articleInfo.title} </a>
                        <a href=".">({`${convertURL(articleInfo.url)}`})</a>

                    </div>

                </Stack>

                {!loading &&
                    <div>
                        {articleInfo.score} {articleInfo.score === 1 ? 'point' : 'points'} by {articleInfo.by} {convertTime(articleInfo.time)} | {articleInfo.comments} {articleInfo.comments === 1 ? 'comment' : 'comments'}
                    </div>
                }
            </li>
        </>

    )


}

// const StyledArticle = styled.li`
//     margin-bottom: 1em;
//
// `;

export default Article;