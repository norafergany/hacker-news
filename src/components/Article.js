import React, {Component} from "react";
import axios from "axios";
import moment from 'moment';


export default class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: null,
            url:null,
            score:0,
            by:null,
            time:null,
            comments:0
        }
        this.getArticle = this.getArticle.bind(this);
        this.convertURL = this.convertURL.bind(this);
        this.convertTime = this.convertTime.bind(this);

    }

    async getArticle(id) {
        const baseURL = "https://hacker-news.firebaseio.com/v0/item/";
        try {
            const { data : {title, url, score, by, time, descendants} } = await axios.get(`${baseURL}${id}.json`);
            this.setState({
                title: title,
                url:url,
                score:score,
                by:by,
                time:time,
                comments:descendants
            }, function () {
                console.log(title);
                return {title, url, score, by, time, descendants};
            })




        } catch (error) {
            console.error(error);
        }
    }

    convertURL(url) {
        console.log(url);
        const domain = url ? new URL(url).hostname : undefined;

        // console.log(domain);
        // domain = domain.hostname;
        // return domain;

        const exp = url + 'abc';
        return domain;

    }

    convertTime(time) {
        const relativeTime = moment.unix(time).utc().fromNow();
        return relativeTime;
    }

    componentDidMount() {
        this.getArticle(this.props.id);

    }


    render() {
        // const domain = this.convertURL(this.state.url);
        return (
            <div>
                <li className="">
                    <span className="article-div">
                        <a className="article-title" href={this.state.url}>{this.state.title} </a>
                        <span className="domain-url">({`${this.convertURL(this.state.url)}`})</span>
                    </span>

                    <span>

                    </span>
                    <div>
                        {this.state.score} points by {this.state.by} {this.convertTime(this.state.time)} ago {this.state.comments} comments
                    </div>
                </li>
            </div>


        )
    }

}