import {memo, useEffect, useState} from "react";
import React from "react";
import useGetStories from "../common/getStories";
import useGetIds from "../common/getIds";
import axios from "axios";


//TODO rename this as ArticleList with parameters NEW or TOP
// TODO put async code inside this component

const ArticleList = (props) => {

    const [more, setMore] = useState(true);

    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(13);

    const [stories, setStories] = useState([]);
    const [loading, setLoading] = useState(true);

    // const[currentIds, setCurrentIds] = useState([]);

    //TODO set state of current ids here ?
    /*
    make 1 axios call and continually slice array?
    or make multiple axios calls?
    dashboard that defines current items?
    pager to go above and
    parent component pager that defines ids that getstories should call on and passes them down as props
     */

    if (end > 501) {
        setEnd(501-start);
        setMore(false);
    }

    const params = "topstories";
    const {ids, idLoading} = useGetIds(params);
    console.log(ids);
    let currIds = ids.slice(start, end);
    // setCurrentIds(currIds);
    // console.log(currIds);
    console.log(start);
    console.log(end);
    // console.log(typeof(currentIds));
    // // const currentIds = ids.slice(start, end);
    console.log(currIds);

    //
    //
    // const {stories, loading} = useGetStories(currIds);

    // let me = stories[0];
    // console.log(me);
    // // console.log(stories[0].title);
    console.log(stories);
    const baseItemURL = "https://hacker-news.firebaseio.com/v0/item/";
    // const currIds = [
    //     33726816,
    //     33724468,
    //     33719983,
    //     33720602,
    //     33724759,
    //     33726947,
    //     33718508,
    //     33703192,
    //     33724681,
    //     33724826,
    //     33718124,
    //     33721685,
    //     33710877
    // ];
    async function fetchData(currIds) {
        try {
            let storyList = [];
            console.log("currIds");

            console.log(currIds);
            await Promise.all(currIds.map((id) => axios.get(baseItemURL + id + '.json').then((response) => storyList.push(response))))
                .then(() => {
                    console.log(storyList)
                    setStories(storyList);
                });

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData(currIds);
    },[currIds])
    // useEffect(() => {
    //
    //
    //     const fetchData = async () => {
    //         try {
    //             // const fullIdList = await axios.get(baseStoriesURL + urlParams + '.json');
    //             // const idSet = idList.slice(start, end);
    //             // console.log(idSet);
    //             let storyList = [];
    //
    //             console.log(currIds);
    //             // const urls = idList.map((id)=> axios.get(baseItemURL + id + '.json'));
    //             await Promise.all(currIds.map((id) => axios.get(baseItemURL + id + '.json')))
    //                 .then((res) => {
    //                     console.log(res);
    //                     console.log(res.data);
    //                     let mycar = res.map((res) => res.data);
    //                     console.log(mycar);
    //                     setStories(res.map((res) => res.data))
    //                 });
    //
    //             // await Promise.all(idList.map((id) => axios.get(baseItemURL + id + '.json')
    //             //     .then((story) => storyList.push(story.data))))
    //             //     .then(story => setStories(story))
    //             //
    //             // ;
    //
    //             // setStories(storyList);
    //             console.log(storyList);
    //
    //         } catch (error) {
    //             console.error(error);
    //         }
    //         setLoading(false);
    //     }
    //
    //     fetchData()
    //
    // }, []);

    console.log(stories);

    // const renderedList = useMemo(() => (
    //     stories.map(({ key, value }) => (
    //         <div key={key}>
    //             {value}
    //         </div>
    //     ))
    // ), [stories]);




    return (
        <div >
            <div>

                {idLoading && <div>Loading</div>}

                {currIds}
{/*<ul>*/}
{/*    {!idLoading && currIds.map((item)=> <li key={item}>{item}</li>)}*/}
{/*</ul>*/}

            {/*/!*<div>*!/*/}
            {/*    {(props.idLoading || props.loading) &&  <p data-testid="loading">Loading</p>}*/}
            {/*</div>*/}



            {/*{(!props.idLoading && !props.loading) && (*/}
            {/*    <div data-testid="article-list" className="newest-articles-list content">*/}

            {/*        <ol data-testid="story-list">*/}
            {/*            {props.stories.map(item => (<li data-testid="story" key={item.id}>{item.title} <span><a href={item.url}>{(item.url)}</a></span></li>))}*/}
            {/*        </ol>*/}
            {/*    </div>*/}
            {/*)}*/}

            {/*/!*{more &&*!/*/}
            {/*/!*<button onClick={() => setStart(start + 13)}>Show more</button>*!/*/}
            {/*/!*}*!/*/}
        </div>
        </div>

    )
};


export default ArticleList;