import React, {useEffect, useState} from "react";
import Container from 'react-bootstrap/Container';
import {ErrorBoundary} from "react-error-boundary";
import {ThemeProvider} from "styled-components";
import {GlobalStyles} from "./themes/GlobalStyles";
import {darkTheme, lightTheme} from "./themes/Themes";
import Navigation from "./components/Navigation";
import ArticleListContainer from "./components/ArticleListContainer";


export const App = () => {

    const [theme, setTheme] = useState('light');

    const toggleTheme = (theme) => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    }

    const errorFallback = ({error, resetErrorBoundary}) => {
        return (
            <div role="alert">
                <p>Something went wrong:</p>
                <pre>{error.message}</pre>
                <button onClick={resetErrorBoundary}>Try again</button>
            </div>
        )
    }

    useEffect(() => {
        function getInitialTheme() {
            let storedTheme = 'light';

            if (localStorage.getItem('theme')) {
                storedTheme = localStorage.getItem('theme');
            } else if ((window.matchMedia("(prefers-color-scheme: dark)").matches)) {
                storedTheme = 'dark';
            }
            const initialTheme = storedTheme;

            setTheme(initialTheme);
            localStorage.setItem('theme', initialTheme);
        }

        getInitialTheme();

    }, [])

    return (
        <>
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme} handleClick={toggleTheme}>
                <>
                    <GlobalStyles/>
                    <Container>
                        <Navigation theme={theme} handleClick={() => toggleTheme(theme)}/>
                        <ErrorBoundary FallbackComponent={errorFallback}>
                            <ArticleListContainer/>
                        </ErrorBoundary>
                    </Container>
                </>
            </ThemeProvider>
        </>
    );
}

export default App;

