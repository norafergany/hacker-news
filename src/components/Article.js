import React, {useEffect, useState} from "react";
import axios from "axios";
import moment from 'moment';
import {useErrorHandler} from "react-error-boundary";


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
        <div>
            <li className="">
                    <span className="article-div">
                        <a className="article-title" href={articleInfo.url}>{articleInfo.title} </a>
                        <span className="domain-url">({`${convertURL(articleInfo.url)}`})</span>
                    </span>

                <span>

                    </span>
                {!loading &&
                <div>
                    {articleInfo.score} {articleInfo.score === 1 ? 'point' : 'points'} by {articleInfo.by} {convertTime(articleInfo.time)} ago {articleInfo.comments} {articleInfo.comments === 1 ? 'comment' : 'comments'}
                </div>
                }
            </li>
        </div>


    )


}

export default Article;