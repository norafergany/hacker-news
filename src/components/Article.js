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
            time: moment.unix(r.time).utc().fromNow(),
            comments: r.descendants,
            domain: r.url ? new URL(r.url).hostname : undefined

        })).catch((error) => {
            handleError(error);
        })
        setLoading(false)

    }, [handleError, props.id])


    return (
        <>
            <li>
                <div>
                <Stack direction="horizontal" gap={3}>
{/*// TODO add css font styles via styled-components*/}
                    <div className="list-item">
                        <a className="article-title me-1" href={articleInfo.url}>{articleInfo.title} </a>
                        <a href=".">{articleInfo.domain}</a>

                    </div>

                </Stack>

                {!loading &&
                    <div>
                        {articleInfo.score} {articleInfo.score === 1 ? 'point' : 'points'} by {articleInfo.by} {articleInfo.time} | {articleInfo.comments} {articleInfo.comments === 1 ? 'comment' : 'comments'}
                    </div>
                }
                </div>

            </li>
        </>

    )


}

// const StyledArticle = styled.li`
//     margin-bottom: 1em;
//
// `;

export default Article;