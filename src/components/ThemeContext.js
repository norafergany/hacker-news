import React, {createContext} from "react";


const ThemeContext = createContext(true);

const ThemeProvider = ThemeContext.Provider;
const ThemeConsumer = ThemeContext.Consumer;

export default ThemeContext;