import React, {useEffect, useState} from "react";
import {ErrorBoundary} from "react-error-boundary";
import {ThemeProvider} from "styled-components";
import {GlobalStyles} from "./components/GlobalStyles";
import {darkTheme, lightTheme} from "./components/Themes";
import "./App.css";
import NavBar from "./components/NavBar";
import ArticleListContainer from "./components/ArticleListContainer";

export const App = () => {

    const [theme, setTheme] = useState('light');



    const toggleTheme = (theme) => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme',newTheme);

    }

    const errorFallback = ({error, resetErrorBoundary}) => {
            return (
                <div role="alert">
                    <p>Something went wrong:</p>
                    <pre>{error.message}</pre>
                    <button onClick={resetErrorBoundary}>Try again</button>
                </div>
            )
//remember last setting on refresh
    }

    useEffect(() => {
        function getInitialTheme() {
            let storedTheme = 'light';

            if (localStorage.getItem('theme')) {
                storedTheme = localStorage.getItem('theme');
            }
            else if((window.matchMedia("(prefers-color-scheme: dark)").matches)) {
                storedTheme = 'dark';
            }
            const initialTheme = storedTheme;

            // const storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
            setTheme(initialTheme);
            localStorage.setItem('theme', initialTheme);
        }
        getInitialTheme();
        // const initialTheme = storedTheme ? storedTheme : theme;
        // localStorage.setItem('theme', initialTheme);

    }, [])

        return (
            // article lsit container to ber wrapped by error boundary so that it can inherit methods from errorboundary for fetching errors
            <>
                <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme} handleClick={toggleTheme}>
                    <>
                        <GlobalStyles/>
                {/*<div  theme={this.state.theme} className={`container`} >*/}
                <div className={`container`}>
                    {/*<NavBar />*/}

                    <NavBar theme={theme} handleClick={() =>toggleTheme(theme)}/>
                        <div className="content" >
                            <ErrorBoundary FallbackComponent={errorFallback}>
                                <ArticleListContainer />

                            </ErrorBoundary>

                        </div>
                </div>
                        </>
                </ThemeProvider>
            </>

        );
}

export default App;

