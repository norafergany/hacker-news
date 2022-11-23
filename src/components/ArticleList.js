import { useEffect, useState} from "react";
import React from "react";

const axios = require('axios').default


//TODO rename this as ArticleList with parameters NEW or TOP
// TODO put async code inside this component

const ArticleList = (props) => {
    const [stories, setStories] = useState({});
    const [loading, setLoading] = useState(true);

    const baseStoriesURL = "https://hacker-news.firebaseio.com/v0/";
    const baseItemURL = "https://hacker-news.firebaseio.com/v0/item/";

    const params = 'topstories';


    // (!loading &&  console.log(stories));

    useEffect(() => {

        const fetchData = async () => {
            try {
                let storyList = [];
                const fullIdList = await axios.get(baseStoriesURL + props.urlParams + '.json');
                const idSet = fullIdList.data.slice(1, 13);
                console.log(idSet);

                await Promise.all(idSet.map((id) => axios.get(baseItemURL + id + '.json')
                    .then((story) => storyList.push(story.data))));

                setStories(storyList);
                console.log(storyList);

            } catch (error) {
                console.error(error);
            }
            setLoading(false);
        }

        fetchData()

    }, [props.urlParams]);

    return (
        <div >
            <div>
                {loading && <p data-testid="loading">Loading</p>}
            </div>



            {!loading && (
                <div data-testid="article-list" className="newest-articles-list content">
                    Article List

                    <ul>
                        {stories.map(item => (<li key={item.id}>{item.title}</li>))}
                    </ul>
                </div>
            )}

        </div>
    )
};


export default ArticleList;