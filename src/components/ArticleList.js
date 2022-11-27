import React from "react";
import Article from "./Article";


export const ArticleList = (props) => {

        return (
            <>
                <div className="story-list ">
                    <ol>
                        {props.ids?.map((id) => <Article key={id} id={id}/>)}


                    </ol>
                </div>
            </>
        )




}
export default ArticleList;

