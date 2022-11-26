import React, {Component} from "react";
import axios from "axios";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Themes"
import "./App.css";
import NavBar from "./components/NavBar";
import ArticleList from "./components/ArticleList";


export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ids: [],
            currentIds: [],
            storyType: 'topstories',
            loading: true,
            start: 0,
            end: 13,
            theme:'light'
        }
        this.getIds = this.getIds.bind(this);
        this.getCurrentIds = this.getCurrentIds.bind(this);
        this.toggleTheme = this.toggleTheme.bind(this);
        this.getInitialTheme = this.getInitialTheme.bind(this);


    }


    toggleTheme() {

        if (this.state.theme === 'light') {
            this.setState({theme: 'dark'});

        } else {
            this.setState({theme: 'light'});
        }
        localStorage.setItem('theme', this.state.theme);


    }

    getInitialTheme() {
        const storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
        if (storedTheme) {
            this.setState({theme: storedTheme});
            localStorage.setItem('theme', storedTheme);
            document.body.classList.add(storedTheme);

        }
    }

    async getIds(storyType) {
        const baseURL = "https://hacker-news.firebaseio.com/v0/";
        const endpoint = `${baseURL}${storyType}.json`;

        try {
            const {data} = await axios.get(endpoint);
            this.setState({ids: data}, function () {
                this.getCurrentIds(this.state.ids, this.state.start, this.state.end);

            })
            console.log(data);
        } catch (error) {
            console.error(error);
        }

    }

    updateCurrentIds(newIds) {
        this.setState({currentIds:newIds});
    }


    getCurrentIds(ids, start, end) {
        const currentSlice = this.state.ids.slice(start, end);
        console.log(currentSlice);
        this.setState({currentIds: currentSlice}, function () {
            this.setState({loading: false})

            return currentSlice;
        });


    }


    componentDidMount() {
        const allIds = this.getIds(this.state.storyType);
        this.getCurrentIds(allIds);
        this.getInitialTheme();
    }


    render() {

        return (
            <>
                <div  theme={this.state.theme} data-theme={`${this.state.theme === 'dark' ? "dark" : "light"}`} className={`container`} >

                    <NavBar theme={this.state.theme} toggleTheme={this.state.toggleTheme} handleClick={this.toggleTheme}/>
                <div className="content" data-theme={`${this.state.theme === 'dark' ? "dark" : "light"}`}>

                    {!this.state.loading &&

                        <ArticleList ids={this.state.currentIds} onUpdate={this.updateCurrentIds}/>
                    }
                </div>

                </div>
            </>

        );

    }


}

