import React, {Component} from "react";
import axios from "axios";

export default class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: null
        }
        this.getArticle = this.getArticle.bind(this);

    }

    async getArticle(id) {
        const baseURL = "https://hacker-news.firebaseio.com/v0/item/";
        try {
            const { data } = await axios.get(`${baseURL}${id}.json`);
            this.setState({
                title: data.title
            }, function () {
                console.log(data.title);
                return data;

            })




        } catch (error) {
            console.error(error);
        }
    }

    componentDidMount() {
        this.getArticle(this.props.id);

    }


    render() {

        return (
            <div>
                <li >
                        {this.state.title} {this.props.id}
                </li>
            </div>


        )
    }

}