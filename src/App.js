import { ThemeProvider } from "styled-components";
import Card from "./Components/Card";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Sidebar from "./Components/Sidebar";
import { Layout } from "./Components/Layout";
import GlobalStyles from "./Components/styled/Global";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";

const theme = {
  brakepoints: {
    tablet: "768px",
    desktop: "1024px",
  },
};
const brakePoint = 1024;

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/">
            <GlobalStyles />
            <Layout>
              <Header width={width} />
              <Hero />
              <Card width={width} />
              {width > brakePoint && <Sidebar />}
            </Layout>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
