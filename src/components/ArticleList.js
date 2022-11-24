import React, {Component} from "react";
import Article from "./Article";
import axios from "axios";


//TODO rename this as ArticleList with parameters NEW or TOP
// TODO put async code inside this component

export default class ArticleList extends Component {

    constructor(props) {
        super(props);

    }




    render() {

        let loadingMessage = <div>Loading...</div>;


        let storyList = this.props.ids;
        console.log(storyList);





        return (
            <>
                {/*{this.props.loading && loadingMessage}*/}
                {/*{!this.props.loading && "some text"}*/}

                <div className="story-list">

                    <ol>
                        {/*{storyList}*/}
                        {storyList.map((id) => <Article key={id} id={id} />)}
                    </ol>
                </div>
            </>
        )

}


}


