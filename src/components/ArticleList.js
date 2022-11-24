import React, {Component} from "react";
import Article from "./Article";


export default class ArticleList extends Component {

    render() {

        return (
            <>
                <div className="story-list">
                    <ol>
                        {this.props.ids.map((id) => <Article key={id} id={id}/>)}
                    </ol>
                </div>
            </>
        )

    }


}


