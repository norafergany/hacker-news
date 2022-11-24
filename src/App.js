import React, {Component} from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import ArticleList from "./components/ArticleList";
import axios from "axios";


export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ids:[],
            currentIds:[],
            currentStories:[],
            storyType:'topstories',
            loading:true,
            start:0,
            end:13,
        }
        this.getIds = this.getIds.bind(this);
        this.getCurrentIds = this.getCurrentIds.bind(this);

    }


    async getIds(storyType) {
        const baseURL = "https://hacker-news.firebaseio.com/v0/";
        const endpoint = `${baseURL}${storyType}.json`;

        try {
            const response = await axios.get(endpoint);
            this.setState({ids:response.data}, function() {
                const currentIds = this.getCurrentIds(this.state.ids, this.state.start, this.state.end);
                // this.getProm(currentIds);

            })
            console.log(response);
        } catch (error) {
            console.error(error);
        }


    }






    getCurrentIds(ids, start, end){
        const currentSlice = this.state.ids.slice(start, end);
        console.log(currentSlice);
        this.setState({currentIds:currentSlice}, function() {
            this.setState({loading:false})

            return currentSlice;
        });


    }


    componentDidMount() {
        const allIds = this.getIds(this.state.storyType);
        this.getCurrentIds(allIds);
    }


    render() {
        let loadingMessage = <div>Loading...</div>;

        return (
           <>
               <NavBar />
                   <div className="content">



               {/*{this.state.loading && loadingMessage}*/}

               {!this.state.loading &&

                   <ArticleList ids={this.state.currentIds} />
               }
                   </div>

           </>

       );

   }


}

