import {createGlobalStyle} from "styled-components"

//TODO reconcile with styled components
export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Verdana', 'Geneva',
    sans-serif;
    font-size:100%;
    background: ${({theme}) => theme.body};
    color: ${({theme}) => theme.text};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
    height: 100vh;
    min-height: 100vh;

    transition: 0.50s linear;
    transition-property: -webkit-font-smoothing, -moz-osx-font-smoothing, color, background, font-family;
  }


  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
  
  

  a {
    text-decoration: none;
    color: ${({theme}) => theme.text};

  }

  i.logo::before {
    color:coral;
    background: radial-gradient(white 50%, transparent 50%);
    //background-color: #FFFFFF;


  }

 

  //li {
  //  margin-bottom: 1em;
  //  /*color: var(--color);*/
  //}

  //.article-div {
  //  display: inline-flex;
  //  overflow: hidden;
  //  /*color: var(--color);*/
  //}
  //
  //.article-title {
  //  display: inline-flex;
  //  font-weight: bold;
  //  /*font-size:larger;*/
  //  /*color: var(--color);*/
  //
  //}
  //
  //.domain-url {
  //  margin-left: 0.25em;
  //  color: gray;
  //  display: inline-flex;
  //
  //}

`
