import React from "react";
import Article from "./Article";


export const ArticleList = (props) => {

        return (
            <>
                <div className="row">
                    <div className="col">

                        <ol>

                            <div className="vstack gap-3">

                            {props.ids?.map((id) =><Article key={id} id={id}/>)}
                            </div>


                        </ol>

                    </div>
                </div>

            </>
        )




}
export default ArticleList;

