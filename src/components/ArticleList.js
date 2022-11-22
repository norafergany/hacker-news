import React, {useCallback, useEffect} from "react";
import useGetIds from '../common/getIds.js'
import useGetStories from "../common/getStories";

//TODO rename this as ArticleList with parameters NEW or TOP
function ArticleList() {

    const params = 'topstories';

    const {stories, loading} = useGetStories(params);

    (!loading &&  console.log(stories));



    return (
        <div >
            {loading && <div>Loading</div>}

            {!loading && (
                <div className="newest-articles-list content">

                    <ul>
                        {stories.map(item => (<li key={item.id}>{item.title}</li>))}
                    </ul>
                </div>
            )}

        </div>
    )
}

export default ArticleList;