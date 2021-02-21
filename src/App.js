// Styling
import { GlobalStyle, ThemeButton } from "./styles";
import { useState } from 'react';
// Components
import CookieList from "./components/ProductList";
import Home from "./components/Home";
import { ThemeProvider } from "styled-components";

const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};

function App() {
  
const [buttonName,setButtonName] = useState('Dark Mode'); 
const [currentTheme,setCurrentTheme] = useState('light'); 
const toggleCurrentTheme = () => {
 if(currentTheme === 'light'){
  setCurrentTheme('dark')
setButtonName("Light Mode");
 } else{ setCurrentTheme('light')
 setButtonName("Dark Mode");
}
}



  return (
    <ThemeProvider theme={currentTheme === 'light' ? theme.light : theme.dark}>
      <GlobalStyle />
      <ThemeButton onClick={toggleCurrentTheme}>
      {buttonName}
      </ThemeButton>
      <Home />
      <CookieList />
    </ThemeProvider>
  );

  
}

export default App;
